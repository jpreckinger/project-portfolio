# Project Portfolio

Multiview project portfolio. Main view displays snapshot and information about various projects, ordered by date completed, with the most recently completed at the top. The admin view allows a user to add a new project, or delete an existing project. This application allows me to display projects previously worked on, with links to the github repos and live versions if applicable. The application uses conditional rendering to only display aspects of each entry that have value. The core of the app is React, using Redux and Redux-Saga to handle async events and manage call order. 

The live version can be found at https://thawing-springs-85717.herokuapp.com/#/

## Built With

React, React-Redux, Redux-Saga, moderate styling with Material UI.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Software required before you attempt to start the app.

- [Node.js](https://nodejs.org/en/)
- [postgresQL](https://www.postgresql.org/download/)
- [postico](https://eggerapps.at/postico/) to interface with postgreSQL


### Installing

Steps to get the development environment running.

1. Download this project.
2. `npm install`
3. `npm run client`
4. `npm run server` in a different terminal window
5. Initiate postgres (depends on install method)
6. Copy/paste database.sql file contents into postico, execute all statements

## Screen Shot

![Project View](/public/images/projects.jpg)
![Admin View](/public/images/admin.jpg)

### Completed Features

High level list of items completed.

- [x] Projects displaying on main view
- [x] Admin view for adding/deleting projects

### Next Steps

Features that you would like to add at some point in the future.

- [ ] Better styling
- [ ] Editing projects

## Authors

* Jonathan Reckinger


## Acknowledgments

* Starter code provided by Prime Academy.