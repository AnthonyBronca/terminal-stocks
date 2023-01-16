var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
require('dotenv').config();
var Alpaca = require('@alpacahq/alpaca-trade-api');
//grabs the env keys to be used to verify ALPACA access
var alpaca_key = process.env.ALPACA_KEY;
var alpaca_secret_key = process.env.ALPACA_SECRET_KEY;
//options needed to verify alpaca
var options = {
    keyId: alpaca_key,
    secretKey: alpaca_secret_key,
    paper: true
};
//sets up the instance for alpaca using current users information
var alpaca = new Alpaca(options);
//grabs and returns the users account information
function getAccountInfo() {
    return __awaiter(this, void 0, void 0, function () {
        var account;
        return __generator(this, function (_a) {
            account = alpaca.getAccount()
                .then(function (account) {
                console.log('Your Account Info:   ', account);
                return account;
            });
            return [2 /*return*/, account];
        });
    });
}
//TO-DO:
//make this dynamic - this is currently hard coded
var buyParams = {
    symbol: 'BTC/USD',
    qty: 1,
    side: 'sell',
    type: 'market',
    time_in_force: 'gtc'
};
//TO-DO:
//replace buyParams with dynamic parmeter
function createOrder(buyParams) {
    return __awaiter(this, void 0, void 0, function () {
        var order;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, alpaca.createOrder(buyParams)
                        .then(function (order) {
                        console.log("Order Details:  ", order);
                        return order;
                    })];
                case 1:
                    order = _a.sent();
                    return [2 /*return*/, order];
            }
        });
    });
}
;
// test function call
createOrder(buyParams);
// const newOrder = Promise.resolve(createOrder(buyParams));
// newOrder.then((value)=> {
//     console.log(value)
// });
//View positions
function getPositions() {
    return __awaiter(this, void 0, void 0, function () {
        var positions;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, alpaca.getPositions()
                        .then(function (positions) {
                        positions.forEach(function (position) {
                            return console.log(position);
                        });
                        return positions;
                    })];
                case 1:
                    positions = _a.sent();
                    return [2 /*return*/, positions];
            }
        });
    });
}
//test getPositions
// getPositions()
