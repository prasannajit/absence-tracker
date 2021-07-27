import { combineRecords, getDataGridProps, generateCalendarFile, downloadToFile } from './index';

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

        test('Returns undefined when input record sets are empty', () => {
            const combinedRecords = combineRecords([], []);
            expect(combinedRecords).toEqual(undefined);
        });

        test('Prepare table data successfully', () => {
            const gridData = getDataGridProps([{
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

        test('Prepare table data method returns undefined when input array has no records', () => {
            const gridData = getDataGridProps([]);
            expect(gridData).toEqual(undefined);
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

        test('File data is undefined when input array has no records', () => {
            const calFileData = generateCalendarFile([]);
            expect(calFileData).toEqual(undefined);
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

