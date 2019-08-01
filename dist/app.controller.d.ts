import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    root(res: any): void;
    covers(res: any, param: any): void;
}
