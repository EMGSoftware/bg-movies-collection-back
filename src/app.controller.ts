import { Get, Post, Controller, Body, Query, Param } from '@nestjs/common';
import { AppService } from './app.service';

const sqlite3 = require( 'sqlite3' ).verbose();

@Controller()
export class AppController 
{
	constructor(private readonly appService: AppService) {}

	@Get()
	root(): string {
		return this.appService.root();
	}

	@Get( '/cube/report' )
	report ( @Query() query )
	{
		return new Promise( ( resolve, reject ) =>
		{
			console.log( query )
			let db = this.connect_db()
			let sql = `SELECT dt, macaddress, avg(power) AS power, reference, COUNT(1) AS samples, MAX(power) AS max, MIN(power) AS min, R.x, R.y, R.name FROM "data" AS D INNER JOIN "references" AS R ON D.reference = R.identity WHERE dt BETWEEN ? AND ? GROUP BY dt, macaddress, reference ORDER BY dt, macaddress, reference, power DESC`
			let results = []
			let measurements = []
			let lastResult = null
			let lastDT = null
			let lastMacaddress = null
			db.all( sql, [query.from, query.to], ( err, rows ) =>
			{
				console.log( rows.length )
				if ( err )
				{
					reject ( err.message )
				}
				for ( let row of rows )
				{
					if ( lastResult == null ) lastResult = row.dt + row.macaddress
					if ( lastResult != row.dt + row.macaddress )
					{
						results.push( { dt: lastDT, macaddress: lastMacaddress, measurements: measurements } )
						lastResult = row.dt + row.macaddress
						measurements = []
					}
					measurements.push( { reference: { name: row.name, x: row.x, y: row.y }, avg_power: row.power, samples: row.samples, max: row.max, min: row.min } )
					lastDT = row.dt
					lastMacaddress = row.macaddress
				}
				resolve( results )	
			} )
		})
	}
		

	@Post('/cube/payload')
	async upload_payload (@Body () payload )
	{
		let db = this.connect_db()
		db.run( "CREATE TABLE IF NOT EXISTS data (macaddress text, dt date, power integer, reference text, received date, PRIMARY KEY (macaddress, dt, reference));" )
		let received = new Date()
		let timebase = received.toJSON().substring( 0, 16 ) + ":00.000Z"
		for ( let client of payload.clients )
		{
			db.run( `INSERT INTO data (macaddress, dt, power, reference, received) VALUES (?, ?, ?, ?, ?)`,
				[client.macaddress, timebase, client.power, payload.identity, received], ( err ) =>
			{
				if (err) console.error (err)
			} )	
		}
		db.close()
		console.log("upload_payload")
		return `OK ${JSON.stringify (payload)}`
	}

	connect_db ()
	{
		return new sqlite3.Database( './cube.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, ( err ) =>
		{
			if ( err ) {
				console.error( err.message )
			}
			console.log( 'Connected to the cube database.' )
		} )
	}
}
