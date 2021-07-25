import express,{Request,Response,NextFunction} from 'express';
import { members, absences } from './api';

enum HTTP_ERROR {
    SERVER_ERROR = 500,
};
const SERVER_PORT=8081;

const app = express();

app.get('/absences', async (req:Request, res:Response, next:NextFunction) => {
    console.log(`Request received for path /absences`);
    try {
        const absenceRecords = await absences();
        res.setHeader('Access-Control-Allow-Origin','*');
        res.json(absenceRecords);
    }
    catch (e) {
        next(e);
    }
});

app.get('/members', async (req:Request, res:Response, next:NextFunction) => {
    console.log(`Request received for path /members`);
    try {
        const memberRecords = await members();
        res.setHeader('Access-Control-Allow-Origin','*');
        res.json(memberRecords);
    }
    catch (e) {
        next(e);
    }
});

app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
    res.status(HTTP_ERROR.SERVER_ERROR).json({
        code: HTTP_ERROR.SERVER_ERROR,
        message: err.message
    });
});

app.listen(process.env.PORT || SERVER_PORT,()=>{
    console.log(`Express server listening on port ${SERVER_PORT}`);
});