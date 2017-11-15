Hello! Earthquake Data will show you some interesting info about top earthquake activity around the world. Scroll through the data. Be amazed.

1. Clone the git repo here: (https://github.com/beth-dickerson/guru-earthquake)
2. Set up the environment: npm install
3. Start the server: npm start

Happy quaking!

This project was created based on the React framework, and boosted with a few libraries.
- Material UI (http://www.material-ui.com/)
- Moment.js (https://momentjs.com/)
- A handy search tutorial (https://www.youtube.com/watch?v=YRiMo2EjVds)
- And other helpful search tutorial (https://www.youtube.com/watch?v=OlVkYnVXPl0)
- It was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

* MaterialUI made everything look pretty.
* MomentJS allowed me to format the time.
* This assignment took me longer than the suggested 4-6 hours, but I enjoyed the entire process. Being given a problem to solve, rather than creating one on my own helps me to direct my continued learning with practical application and understand how to approach problems I have not thought of myself.
* I filtered the displayed data by magnitude, but could not figure out how to secondarily filter it by time. I left the (not working) code to demonstrate my last attempt, as it did not break it!
* I made a search area that has an onChange event handler, yet I was unsuccessful in connecting it to my API. I made further progress in it than I have before, so I see my steady improvement.
* I worked through this assignment on my own, instead of reaching out to friends and colleagues who are well-versed in JavaScript and React, because I wanted the opportunity to take this as far as I could on my own. (I will be reaching it this next week because I want to how to do these things, and now!)

* The requirements for this assignment are as follows:
  1. Load data from the above endpoint and show it in a table-like format.
    a. The data should be ordered from highest to lowest magnitude, in the   event of multiple earthquakes with the same magnitude, you should order those by most recent to least recent.
    b. After sorting, you should take all results up to a maximum of 20.
  2. The table should have the following columns, and show the following data properties
    a. Id showing   the   id   field
    b. Time showing   the   time   field
    c. Location showing   the   place field
    d. Magnitude showing   the   mag   field
  3. The time of the earthquake should be displayed as
    Month Day, Year @ Hour:Minute
  in the browser’s local   timezone (ie, 2pm on the first day of 2017 would be  displayed as January 1, 2017 @ 14:00).
  4. Each row of the table should have a button with the text “details” that when clicked displays the longitude and latitude of the earthquake
  5. There should be an input field that allows the user to filter across all of the results and maintain the previous sort rules
* The   rules   for   this   assignment   are   as   follows:
  1. You may use any library that you need to complete this task, HOWEVER, we will be judging you on your ability to manipulate the data, so please don’t use any libraries that abstract that away (such as https://datatables.net/)
  2. All work should be done on the client side. Do not use external API’s besides the one provided above to retrieve the data.
  3. Submissions are expect to be in the form of a zipped up folder that contains the following
    a. All source files before they through any kind of build system
    b. An index.html file that when opened loads all the necessary files/assets required to run and evaluate the project
    c. If your project requires any additional steps please add a README.md containing that information.
