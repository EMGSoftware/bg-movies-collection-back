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

	@Get( '/report' )
	report ( @Query() query )
	{
		return new Promise( ( resolve, reject ) =>
		{
			console.log( query )
			let db = this.connect_db()
			let sql = `SELECT dt, macaddress, power, reference, received FROM "data" WHERE dt BETWEEN ? AND ? ORDER BY dt, macaddress, reference, power DESC`
			let results = []
			let locations = []
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
						results.push( { dt: lastDT, macaddress: lastMacaddress, locations: locations } )
						lastResult = row.dt + row.macaddress
						locations = []
					}
					locations.push( { reference: row.reference, power: row.power, received: row.received } )
					lastDT = row.dt
					lastMacaddress = row.macaddress
				}
				resolve( results )	
			} )
		})
	}
		

	@Post ('/payload')
	async upload_payload (@Body () payload )
	{
		let db = this.connect_db()
		db.run( "CREATE TABLE IF NOT EXISTS data (macaddress text, dt date, power integer, reference text, received date, PRIMARY KEY (macaddress, dt, reference));" )
		for ( let client of payload.clients )
		{
			let received = new Date()
			let timebase = received.toJSON().substring( 0, 16 ) + ":00.000Z"
			db.run( `INSERT INTO data (macaddress, dt, power, reference, received) VALUES (?, ?, ?, ?, ?)`, [client.macaddress, timebase, client.power, payload.identity, received], ( err ) =>
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
