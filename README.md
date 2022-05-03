# Ball is Life

## Synopsis

In this small UI project, I was tasked with generating a UI interface that would allow users to fully interact with the Teams and part of the Games section of the balldontlie.io API which serves NBA stats of all teams by **name**, **city**, **abbreviation**, **conference**, and **division**. The UI was to allow users to view a **paginated table** of all 30 teams pulled from the API, click on a team, and have an **offcanvas** toggle on the right displaying the selected team's extended game details which also featured one of their latest season's games. The UI was also to include a Search Bar that would filter the teams by the user's input.

Utilized React, React-Query, Sass, Vanilla JavaScript, Bootstrap, Jest and JQuery.

### Running the Web Application
1. Run `npm i` to install the necessary node packages
2. Run `npm start` to run the application locally.

To run the test suite: Run **npm test** to run the application test suite.

### Loading Screen

The loading screen and its animations were purely done in **Sass** where I initially went with various JQuery-handled animations but decided that the use of it was excessive, so I translated them over to Sass. The animation was quick to make but centering the animation above the Michael Jordan quotes (which are randomly selected from a pool of quotes) without having the rotating MJ push the quote around was truly the difficult part in the process.

### Teams Table

My teams table is handled by React, Bootstrap, and React-Query where I make an initial call to the API to retrieve the list of JSON objects representing each team and then call `.map` on the array in order to map a `TeamRow.jsx` component (in accordance to the Pagination sectioning) into the Teams Table.

### Table Head

The table head (I hardcoded but can easily be generated dynamically based on the API call response) serves as categories to label each section of the Team Row for the user to understand the data being displayed in the `TeamRow.jsx` components. The table head categories also contain the functionality to be toggled on and off in order to sort the `TeamRow.jsx` components alphabetically based on the category that was selected. Animations for the Table Heads were generated purely with Sass.

### Team Row

The Team Rows are generated dynamically based on the list of teams pulled from the API after being sorted and filtered by functions belonging to the Table Head and Search Bar. Each `TeamRow.jsx` has a hover animation that allows for users to have an increase in feedback when browsing the table. On select, the `TeamRow.jsx` is set to a black background color and orange text in order to signal the user that they have selected that corresponding row. The Team Row also handles the trigger for the Side Bar and its content.

### Pagination

The Team Table is paginated manually through the use of the `.slice` function where I pass in a sliced subarray of teams (based on a calculated page size) that `TeamTable.jsx` then uses to dynamically render `TeamRow.jsx` components through props. The pagination tabs at the bottom are also highly responsive in the sense where they are generated based on the number of pages needed to display the current number of `TeamTable.jsx` pages. If the user is on the first page, the **Previous** button is disabled, if the user is on the last page, the **Next** button is disabled.

### Search Bar

The Seach Bar is set up as form where the input updates a teamQuery state that is used in filtering the initial array of Team JSON objects from the Teams Table. The Search Bar also incorporates a debounce function in order to process an onChange update of the teamQuery state after a set period of time. (In my case, 700ms).

### Offcanvas/SideBar

The Offcanvas/Sidebar, whatever you choose to call it, is a Bootstrap Component with a Bootstrap Grid System nested inside. It displays the selected team's name as the header, the team's complete name as the first data entry and the rest of the Sidebar content is comprised of data pulled from the Games section of the balldontlie.io API. The SideBar content contains ternary operators that allow for the users to see a Loading Spinner animation until the API call is complete (Although, it generally never shows due to the consistency and speed of the API)
