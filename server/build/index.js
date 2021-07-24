"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = require("./api");
var HTTP_ERROR;
(function (HTTP_ERROR) {
    HTTP_ERROR[HTTP_ERROR["SERVER_ERROR"] = 500] = "SERVER_ERROR";
})(HTTP_ERROR || (HTTP_ERROR = {}));
;
const SERVER_PORT = 8081;
const app = express_1.default();
app.get('/absences', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Request received for path /absences`);
    try {
        const absenceRecords = yield api_1.absences();
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json(absenceRecords);
    }
    catch (e) {
        next(e);
    }
}));
app.get('/members', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Request received for path /members`);
    try {
        const memberRecords = yield api_1.members();
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json(memberRecords);
    }
    catch (e) {
        next(e);
    }
}));
app.use((err, req, res, next) => {
    res.status(HTTP_ERROR.SERVER_ERROR).json({
        code: HTTP_ERROR.SERVER_ERROR,
        message: err.message
    });
});
app.listen(SERVER_PORT, () => {
    console.log(`Express server listening on port ${SERVER_PORT}`);
});
