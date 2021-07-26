import { combineRecords, prepareTableData, generateCalendarFile, downloadToFile } from './index';

describe('Helpers test suite', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });
    describe('Helper module tests', () => {
        test('Combine records successfully', () => {
            const absences = [{
                admitterId: null,
                admitterNote: "",
                confirmedAt: "2020-12-12T18:03:55.000+01:00",
                createdAt: "2020-12-12T14:17:01.000+01:00",
                crewId: 352,
                endDate: "2021-01-13",
                id: 2351,
                memberNote: "",
                rejectedAt: null,
                startDate: "2021-01-13",
                type: "sickness",
                userId: 12
            }];
            const members = [{ userId: 12, name: 'Harry', crewId: 123, id: 123, image: 'http://www.google.com/harry.jpg' }];
            const combinedRecords = combineRecords(members, absences);
            expect(combinedRecords.length).toEqual(1);
            expect(combinedRecords[0].name).toEqual('Harry');
            expect(combinedRecords[0].image).toEqual('http://www.google.com/harry.jpg');
        });

        test('Prepare table data successfully', () => {
            const gridData = prepareTableData([{
                admitterId: null,
                admitterNote: "",
                confirmedAt: "2020-12-12T18:03:55.000+01:00",
                createdAt: "2020-12-12T14:17:01.000+01:00",
                crewId: 352,
                endDate: "2021-01-13",
                id: 2351,
                memberNote: "",
                rejectedAt: null,
                startDate: "2021-01-13",
                type: "sickness",
                userId: 2664,
                name: 'Harry',
                image: 'http://www.google.com/harry.jpg'
            }, {
                admitterId: null,
                admitterNote: "",
                confirmedAt: "2020-12-12T18:03:55.000+01:00",
                createdAt: "2020-12-12T14:17:01.000+01:00",
                crewId: 352,
                endDate: "2021-01-13",
                id: 2351,
                memberNote: "",
                rejectedAt: null,
                startDate: "2021-01-13",
                type: "sickness",
                userId: 355,
                name: 'Jacky',
                image: 'http://www.google.com/jacky.jpg'
            }]);
            expect(gridData.columns.length).toEqual(9);
            expect(gridData.rows.length).toEqual(2);
        });

        test('Generate calendar file successfully', () => {
            const calFileData = generateCalendarFile([{
                admitterId: null,
                admitterNote: "hell there",
                confirmedAt: "2020-12-12T18:03:55.000+01:00",
                createdAt: "2020-12-12T14:17:01.000+01:00",
                crewId: 352,
                endDate: "2021-01-13",
                id: 2351,
                memberNote: "I am sick",
                rejectedAt: null,
                startDate: "2021-01-13",
                type: "sickness",
                userId: 2664,
                name: 'Harry',
                image: 'http://www.google.com/harry.jpg'
            }, {
                admitterId: null,
                admitterNote: "",
                confirmedAt: "2020-12-12T18:03:55.000+01:00",
                createdAt: "2020-12-12T14:17:01.000+01:00",
                crewId: 352,
                endDate: "2021-01-13",
                id: 2351,
                memberNote: "",
                rejectedAt: null,
                startDate: "2021-01-13",
                type: "sickness",
                userId: 355,
                name: 'Jacky',
                image: 'http://www.google.com/jacky.jpg'
            }]);
            expect(calFileData.includes('I am sick')).toEqual(true);
        });

        test('downloadToFile method executed successfully', () => {
            global.URL.createObjectURL = jest.fn();
            global.URL.revokeObjectURL = jest.fn();
            downloadToFile('hi there', 'a.txt', 'text/plain');
            expect(global.URL.createObjectURL).toHaveBeenCalled();
            expect(global.URL.revokeObjectURL).toHaveBeenCalled();
        });
    });
});

