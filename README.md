# Absence Tracker

Absence tracker is a web application to view, sort and filter absence records. This can also be used to download **iCal** file of approved absences.

## Quick Demo

The application is hosted on Netlify and available on the be below mentioned URL;

<https://absence-tracker.netlify.app>

The application uses two endpoints to get member and absence records.

- <https://express-server-prasan.herokuapp.com/members>
- <https://express-server-prasan.herokuapp.com/absences>

## Local Setup

The code for this application is available on github;
<https://github.com/prasannajit/react-test>

Perform the following steps to run the application locally.
Step 1: Clone the repo

git clone <https://github.com/prasannajit/react-test.git>

Step 2: Install node packages (server and react app)

-> npm install

-> cd server

-> npm install

-> cd ..

Step 3: Change absences and members url

-> cd src/config

Update API_URL_ABSENCES to <http://localhost:8081/absences> in index.ts file

Updated API_URL_MEMBERS to <http://localhost:8081/members> in index.ts file

Step 4: Start the server in a new terminal

Open a new terminal

-> cd server

-> npm run build

-> npm run dev

Step 5: Start the react application

-> npm start

## Usage instructions

- Filter
Use the toolbar to filter the records. Click on FILTERS button and select the column to filter.
Provide appropriate criteria of  search.

- Sort
Click on the arrow icon next to column name to sort in ascending or descending order. It is visible when mouse points is placed near the column name.

- Change page
Click on the arrow icons at the bottom of the page to go to next page or previous page. Use the dropdown to select the number of records per page.

- Download iCal file
Click on the download cal file button placed below the page heading to download ics file with approved absences.
