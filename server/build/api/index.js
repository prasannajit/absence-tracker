"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.absences = exports.members = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var ABSENCES_PATH = path_1.default.join(__dirname, '../../static/json_files', 'absences.json');
var MEMBERS_PATH = path_1.default.join(__dirname, '../../static/json_files', 'members.json');
var readJsonFile = function (path) { return new Promise(function (resolve) { return fs_1.default.readFile(path, 'utf8', function (_, data) { return resolve(data); }); })
    .then(function (data) { return JSON.parse(data); })
    .then(function (data) { return data.payload; })
    .catch(function (e) { throw e; }); };
var members = function () { return readJsonFile(MEMBERS_PATH); };
exports.members = members;
var absences = function () { return readJsonFile(ABSENCES_PATH); };
exports.absences = absences;
