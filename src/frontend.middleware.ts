import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import * as path from 'path'
import { cc } from './cc'
const allowedExt = [
	'.js',
	'.ico',
	'.css',
	'.png',
	'.jpg',
	'.woff2',
	'.gif',
	'.woff',
	'.ttf',
	'.svg',
	'.html',
]

const resolvePath = ( file: string ) => path.resolve( `front/${ file }` )

@Injectable()
export class FrontEndMiddleware implements NestMiddleware
{
	use ( req: Request, res: Response, next: Function )
	{
		const { baseUrl } = req
		if ( baseUrl.indexOf( "/api" ) === 0 )
		{
			cc.log( `${ baseUrl } => Backend`, cc.colors.FgCyan )
			next()
		}
		else if ( allowedExt.filter( ext => baseUrl.indexOf( ext ) > 0 ).length > 0 )
		{
			cc.log( `${ baseUrl } => Frontend`, cc.colors.FgYellow )
			res.sendFile( resolvePath( baseUrl ) )
		}
		else
		{
			cc.log( `${ baseUrl } => Frontend Default`, cc.colors.BgYellow )
			res.sendFile( resolvePath( 'index.html' ) )
		}
	}
}
