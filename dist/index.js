"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = require("magnet-core/module");
const auth0_1 = require("auth0");
class MagnetAuth0 extends module_1.Module {
    get moduleName() { return 'auth0'; }
    get defaultConfig() { return __dirname; }
    setup() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.config.authenticationClient) {
                this.insert(new auth0_1.AuthenticationClient(this.config.authenticationClient));
            }
            if (this.config.managementClient) {
                this.insert(new auth0_1.ManagementClient(this.config.managementClient), 'auth0Management');
            }
        });
    }
}
exports.default = MagnetAuth0;
//# sourceMappingURL=index.js.map