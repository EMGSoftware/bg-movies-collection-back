import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FrontEndMiddleware } from './frontend.middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule
{
	configure ( consumer: MiddlewareConsumer )
	{
		consumer
			.apply( FrontEndMiddleware )
			.forRoutes( {
				path: '/**', // For all routes
				method: RequestMethod.ALL, // For all methods
			} )
	}
}
