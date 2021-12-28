
## 1. Concept
1. Design a system that would enrich our users with their open issues on Zendesk on the most frequent basis assuming that we can retrieve and match their email from the source.

With your proposal that we can retrieve the emails and the information from the source so 
I have created an event that sends them to our applications then this event will process the data and 
enrich the database with the new issues in ZENDESK.

attachment document:
System design.jpeg

2. How would you provide additional data to the end-user such as the current status of the request? The data must be as "fresh" as possible from Zendesk.

In my opinion, I would like to use the Webhook The webhook is the interface that will collect this 
notification when an event occurs to ensure the condition: - Data must be as "fresh" as possible.

then I download the tickets from Zendesk to my local base. 
then create a table carrying data named 'Ticket_state' which contains all info
EXEMPLE:

{
Tiket:[
		{"id":001,
		 "object": "login problems"
		 "id-user":"0144"
		 "sector": "User"
		},
		{"id":002,
	 	"object": "Payment error"
		"id-user":"0787"
		"sector": "Product"
		}
	]
}
*////*
{

Ticket_state:[
		{"id":001,
		 "id_tiket": "002"
		 "state": "solved"
		},
		{"id":002,
	 	"id_tiket": "001"
		"state": " not solved"
		}
	]
}


3. How would you monitor that the service is running? How could you receive alerts when a user's number of tickets excesses 3 open tickets?

There are many proposals for monitoring the application.
- We can monitor a service endpoint for our application by checking the endpoint on a specific
schedule. When the specified event happens at that endpoint, such as your application 
going down, the event triggers your logic app's workflow and runs the actions in that workflow.
- Uses monitoring tools: we can use many tools (New Relic -Stackify-Datadog ...) 
all those that can hold our application all day is monitoring.
- Software containers: using platforms allowing to launch applications in software containers like Docker. With Docker technology, we can treat containers as very light and modular virtual machines. 
In addition, these containers give you great flexibility: you can create, deploy, copy and move them from
one environment to another, allowing you to optimize your applications for the cloud.

//
the clearest solution is to create a method or a service which counts the number of tikets for each customer 
and if the number exceeds 3 tickets an alert will be sent to the manager or we can use notification services or mailboxesto receive this information and to register this notification in the DB to have a memorized history of these alerts.


4. Every hour, we run a request to their service to host Zendesk statistics (average time before tickets resolution, most efficient agent...) in our database. Assuming that 1~3% of the requests to Zendesk will fail and respond with a 500 status, how do you make sure we always have 100% accurate data stored? Describe the whole process from the hourly job initiation.

To have 100% of precise data stored every days and every times it is not possible but we always try to make sure that it tends towards 100%.


to have this condition, it was necessary to know well balanced the load on the servers to guarantee a response and that your server must be ready to answer , also it is necessary to know the frequency with which our database will be fed with new information and on this measure we can calculate the frequency and preferable time for updating information and initiating requests,

we also need to use local storage (if we have a problem with request status like 500) to keep the information well and return the request later if we have a response, then free up the local storage space.




