# Skills Evaluation V1.0

The goals of this evaluation are:
This skills evaluation will demonstrate your ability to operate on the entire stack and manipulate data moving from front to back and back to front ends.

It consists of 2 tickets and should take no more than 1.5 hours. Your objective is to modify both the front and backend code to satisfy the requirements of each ticket.

## Starting the project

A basic react frontend and express.js backend have been pre-configured for as well as linting to help you maintain consistency and spot errors quickly.

1. `npm run frontend` to start the frontend.
2. `npm run backend` to start the backend.

## Notice

1. The csv files you should use for this project are located under `src/data`.
2. You may install packages and libraries as you see fit.

## Ticket 1 -  Data File Upload

**Satisfy the following requirements**

1. A user can upload a csv data file (use the files in `src/data`) to the api.
2. Uploaded data files are converted to a JSON object and sent back to the user.
3. The user can see converted json object.
	* Display the data however you think is best.

## Ticket 2 - Data Parsing

**Satisfy the following requirements**

1. The density `(mass / volume)` of each compound in a data file is calculated on upload (perform calculatons in the API, not frontend)
2. The calculated densities are sent back to the user as a JSON object.
	* The _converted json_ object you created in **Ticket 1** should also be sent back to the user.
3. A user can see both the original json object from **Ticket 1** and the calculated densities object from this ticket.
	* Display the data however you think is best.

As an example, if the csv data file was:
| Compound | Mass     | Volume   |
| -------- | -------- | -------- |
| carbon   | 12       | 2        |
| hydrogen | 10       | 5        |

The densities might look like:

```
[
	{
		compound: 'carbon',
		density: 6
	},
	{
		compound: 'hydrogen',
		density: 2
	},
]
```