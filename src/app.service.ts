import { Injectable } from '@nestjs/common';
import * as path from 'path'

const resolvePath = ( file: string ) => path.resolve( `./${ file }` )

@Injectable()
export class AppService
{
	root ( res )
	{
		res.sendFile( resolvePath( './db.json' ) )
		return
	}

	covers ( res, img )
	{
		res.sendFile( resolvePath( `./movie-covers/${img}` ) )
		return
	}
}
