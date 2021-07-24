"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.absences = exports.members = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const ABSENCES_PATH = path_1.default.join(__dirname, '../../static/json_files', 'absences.json');
const MEMBERS_PATH = path_1.default.join(__dirname, '../../static/json_files', 'members.json');
const readJsonFile = (path) => new Promise((resolve) => fs_1.default.readFile(path, 'utf8', (_, data) => resolve(data)))
    .then((data) => JSON.parse(data))
    .then((data) => data.payload)
    .catch(e => { throw e; });
const members = () => readJsonFile(MEMBERS_PATH);
exports.members = members;
const absences = () => readJsonFile(ABSENCES_PATH);
exports.absences = absences;
