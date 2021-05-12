# Full Stack Developer Home Coding

## Purpose

The purpose of the exercise is to understand how you approach the problem and your ability to use code to accomplish things.

Please timebox your effort to 4 hours. An incomplete solution is not failing the exercise but please point out the missing points.

## Issue

A hospital wants so setup a covid test center for their employess. Employees who want to get tested get an identifier code like EQPIG4. With the code the tested person should have the possibility to retrieve the test result from a self service website.

## Your Job

Use the provided api template to create a small backend which accepts a test identifier and returns the result. Create a input field in provided vue template to retrieve the identifier from the user and show the test result.

## Hints
### Api
* Prepare the api with `npm install` and start it with `npm run serve`
* The code for returning the result can be stored in api/src/server.ts
* The results are stored in results.json

### Gui
* Prepare the gui with `npm install` and start it with `npm run serve`
* The code for retrieving the result can be stored in gui/src/views/Home.vue
* The api can be access within the Gui via http://localhost:8080/api/get-result?identifier=foo . This behaviour is configured in vue.config.js

# Bonus
If you don't feel challenged you can store the test results in a database of your choice and use the database in api.
