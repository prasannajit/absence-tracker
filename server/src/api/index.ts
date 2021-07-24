import fs from 'fs';
import path from 'path';

type item = {[key:string]: any};
interface RecordSet {
  message: string,
  payload: Array<item>
}
const ABSENCES_PATH = path.join(__dirname, '../../static/json_files', 'absences.json');
const MEMBERS_PATH = path.join(__dirname, '../../static/json_files', 'members.json');
const readJsonFile = (path: string): Promise<Object> => new Promise((resolve) => fs.readFile(path, 'utf8', (_, data: string) => resolve(data)))
  .then((data: any): Promise<RecordSet> => JSON.parse(data))
  .then((data: RecordSet):Array<item>=> data.payload)
  .catch(e=>{throw e});

export const members = () => readJsonFile(MEMBERS_PATH);
export const absences = () => readJsonFile(ABSENCES_PATH);

