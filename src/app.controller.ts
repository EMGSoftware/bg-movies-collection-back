import { Get, Controller, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller( 'api/movies' )
export class AppController 
{
	constructor( private readonly appService: AppService ) { }

	@Get()
	root ( @Res() res )
	{
		return this.appService.root( res );
	}

	@Get( '/covers/:img' )
	covers ( @Res() res, @Param() param )
	{
		console.log( 'param', param )
		return this.appService.covers( res, param['img'] );
	}
}
