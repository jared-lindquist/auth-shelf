# Pod with a View's Auth Shelf Group Project

## Description

What is on the Prime Digital Academy: Room 2 Shelf? Let's find out!

## Prerequisites
    * Node.js
    * Postico
    * PostgreSQL
    * Nodemon

## Installation

    1. Clone this repo.
    2. Ensure that Postgres is running.
    3. Using Postico, create a database named `auth_shelf`
    4. To set up the tables, follow the instructions in `database.sql`
    5. Navigate to the cloned repo in the terminal.
    6. Run `npm install` to install all dependencies.
    7. Run `npm run server`
    8. Run `npm run client` in another tab. This automatically opens the app in your browser.


## Usage

    1. From the home page, view items currently on the shelf.
    2. To add an item, click on the 'Add' button.
    3. To delete an item, click on the 'Remove' button.

## Deployment

    1. Create a new Heroku project
    2. Link the Heroku project to the project GitHub Repo
    3. Create an Heroku Postgres database
    4. Connect to the Heroku Postgres database from Postico
    5. Create the necessary tables
    6. Add an environment variable for SERVER_SESSION_SECRET with a nice random string for security
    7. In the deploy section, select manual deploy

## Built With

    * Node.js
    * Postico
    * PostgreSQL
    * Nodemon


## Authors

    Pod with a View Team:
    * Jared Lindquist
    * Josh Clemons
    * Tracey Treat
    * Victor Llapa
    * Vanessa Wharton

## Acknowledgements

Thank you to Prime Academy, our instructors, the Shawl cohort, and everyone on the Pod with a View team!
