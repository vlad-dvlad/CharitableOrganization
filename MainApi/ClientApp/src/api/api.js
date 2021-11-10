"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instance = void 0;
var axios_1 = require("axios");
exports.instance = axios_1.default.create({
    baseURL: "http://localhost:5000/api/",
    withCredentials: true,
});
//# sourceMappingURL=api.js.map