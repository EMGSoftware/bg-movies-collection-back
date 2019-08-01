import { NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
export declare class FrontEndMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function): void;
}
