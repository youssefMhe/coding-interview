# Support tickets - Infrastructure, back-end

## Context
We run a SaaS platform for BtoB users. We use a service called Zendesk for them to submit tickets when they need help or they have issues with our service. We noticed that it's very important for them to see we are taking good care of their requests.

## 1. Concept
1. Design a system that would enrich our users with their open issues on Zendesk on the most frequent basis assuming that we can retrieve and match their email from the source.
2. How would you provide additional data to the end-user such as the current status of the request? The data must be as "fresh" as possible from Zendesk.
3. How would you monitor that the service is running? How could you receive alerts when a user's number of tickets excesses 3 open tickets?
4. Every hour, we run a request to their service to host Zendesk statistics (average time before tickets resolution, most efficient agent...) in our database. Assuming that 1~3% of the requests to Zendesk will fail and respond with a 500 status, how do you make sure we always have 100% accurate data stored? Describe the whole process from the hourly job initiation.

## 2. Code
In a Node.js environnement (preferably Typescript) and using any library you want, create the API that would get a single user's tickets from our database enriched with the data provided by Zendesk. Here is the structure of the data available for a Zendesk ticket:

```json
{
"id": 35436,
"priority": "high",
"status": "open",
"subject": "Help, my printer is on fire!",
"description": "The fire is very colorful.",
"created_at": "YYYY-MM-DDTHH::MM::SS"
}
```

You will code a single endpoint `/api/tickets/user/:user-uuidv4` receiving the parameters of your choice and responding with the most appropriate structure for the front-end team according to you.

Describe how you would implement tests, feel free to create one.

## 3. Bonus
Your database performs slower than usual. More specifically, your queries are taking a lot of time. What would you do?

-------

### Tech requirements
- Node.js serverless infrastructure with functions timing out after 5 seconds
- **Test your code**
- Use only Postgres SQL Database
- Typescript is a plus
- You can consider changing anything from the database schema to the infrastructure, create micro-services, subscribe to new tools...

**SQL database structure:**

_users_

| **id** | **email** |
| ---| --- |
| uuidv4 | VARCHAR(255) |



_tickets_

| **user\_id** | **zendesk\_id** |
| ---| --- |
| uuid\_v4 | INTEGER |

_user\_id is a foreign key of id_

### Instructions
- The challenge is on!
- Build a performant, **clean and well-structured solution**.
- Commit early and often. We want to be able to check your progress.
- **Send us an email with a link to repository when you finish the assesment**.
- Please do not spend more than 4 hours.
- Please complete your working solution within 7 days of receiving this challenge.
- Please be as specific as possible in your answers!
- You can use https://www.diagrams.net/, lucidchart or any online tool to present your ideas for the first part.

### Submission instructions
1. Fork this repository on github.
2. Complete the project as described above within your fork.
3. Keep the commit history - don't squash.
4. Push all of your changes to your fork on github and submit a pull request to this repository.

### Evaluation criteria (in order of importance)
1. Diagram organization and explanation / carity
2. Code readability (including comments)
3. Adherence to the tech requirements described above
4. Commit history - structure and quality
5. Completeness

Remarks:
+ Use es6 or later, do not use es5
+ Use functional programming when it is wise to do so
+ Use fetch()
+ Use airbnb stylesguides for [ES6](https://github.com/airbnb/javascript)