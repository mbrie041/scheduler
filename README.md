# Interview Scheduler
Interview Scheduler is a responsive React application that allows users to book and cancel interviews. It uses React, Webpack, Babel, Axios and Websockets to build a realtime experience. Testing was performed useing Storybook, Webpack Dev Server, Jest, Cypress and Testing Library.

## Basic Functionality 
- Interviews can be booked between Monday and Friday.
- A user can switch between weekdays.
- A user can book an interview in an empty appointment slot.
- Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers.
- A user can cancel an existing interview.
- A user can edit the details of an existing interview.
- The list of days informs the user how many slots are available for each day.
- The expected day updates the number of spots available when an interview is booked or canceled.
- A user is presented with a confirmation when they attempt to cancel an interview.
- A user is shown an error if an interview cannot be saved or deleted.
- A user is shown a status indicator while asynchronous operations are in progress.
- When the user presses the close button of the error they are returned to the Form or Show view (skipping Status and Confirm).
- The application makes API requests to load and persist data. We do not lose data after a browser refresh.

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Dependencies 
- "axios": "^0.21.1"
- "classnames": "^2.2.6"
- "normalize.css": "^8.0.1"
- "react": "^16.9.0"
- "react-dom": "^16.9.0"
- "react-scripts": "3.0.0"
- "@babel/core": "^7.4.3"
- "@storybook/addon-actions": "^5.0.10"
- "@storybook/addon-backgrounds": "^5.0.10"
- "@storybook/addon-links": "^5.0.10"
- "@storybook/addons": "^5.0.10"
- "@storybook/react": "^5.0.10"
- "@testing-library/jest-dom": "^4.0.0"
- "@testing-library/react": "^8.0.7"
- "@testing-library/react-hooks": "^5.1.1"
- "babel-loader": "^8.0.5"
- "cypress": "^7.1.0"
- "node-sass": "^4.14.0"
- "prop-types": "^15.7.2"
- "react-test-renderer": "^16.9.0"
- For more information please see package.json

!["Main page over 1440px"](https://github.com/mbrie041/scheduler/blob/master/public/Screenshots/Root%201440px%20+.png?raw=true)
!["Main page under 1440px"](https://github.com/mbrie041/scheduler/blob/master/public/Screenshots/Root%20under%201440px.png?raw=true)
!["Appointment Booking over 1440px"](https://github.com/mbrie041/scheduler/blob/master/public/Screenshots/Appointment%201440px%20+.png?raw=true)
!["Appointment Booking under 1440px"](https://github.com/mbrie041/scheduler/blob/master/public/Screenshots/Appointment%20under%201440px.png?raw=true)
!["Delete state"](https://github.com/mbrie041/scheduler/blob/master/public/Screenshots/Delete%20state.png?raw=true)
!["Saving state"](https://github.com/mbrie041/scheduler/blob/master/public/Screenshots/Saving%20state.png?raw=true)