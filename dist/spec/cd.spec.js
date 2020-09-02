"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cd_1 = require("../cd");
describe('Buying a CD', function () {
    it('removes quantity bought from stock count', function () {
        var cd = { stockCount: 1 };
        cd_1.buy(cd, 1);
        expect(cd.stockCount).toBe(0);
    });
});
//# sourceMappingURL=cd.spec.js.map