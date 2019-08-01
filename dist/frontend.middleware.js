"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const path = require("path");
const cc_1 = require("./cc");
const allowedExt = [
    '.js',
    '.ico',
    '.css',
    '.png',
    '.jpg',
    '.woff2',
    '.woff',
    '.ttf',
    '.svg',
    '.html',
];
const resolvePath = (file) => path.resolve(`front/${file}`);
let FrontEndMiddleware = class FrontEndMiddleware {
    use(req, res, next) {
        const { baseUrl } = req;
        if (baseUrl.indexOf("/api") === 0) {
            cc_1.cc.log(`${baseUrl} => Backend`, cc_1.cc.colors.FgCyan);
            next();
        }
        else if (allowedExt.filter(ext => baseUrl.indexOf(ext) > 0).length > 0) {
            cc_1.cc.log(`${baseUrl} => Frontend`, cc_1.cc.colors.FgYellow);
            res.sendFile(resolvePath(baseUrl));
        }
        else {
            cc_1.cc.log(`${baseUrl} => Frontend Default`, cc_1.cc.colors.BgYellow);
            res.sendFile(resolvePath('index.html'));
        }
    }
};
FrontEndMiddleware = __decorate([
    common_1.Injectable()
], FrontEndMiddleware);
exports.FrontEndMiddleware = FrontEndMiddleware;
//# sourceMappingURL=frontend.middleware.js.map