import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap ()
{
	const app = await NestFactory.create( AppModule );
	const corsOptions: CorsOptions = { credentials: true, origin: true }
	app.enableCors( corsOptions )

	console.log( "Listening on port ", process.env.PORT || 3000 )
	await app.listen( process.env.PORT || 3000 );
}
bootstrap();
