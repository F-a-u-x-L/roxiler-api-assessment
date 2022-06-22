# A NodeJS project with following APIs

## About the project

Packages used : express, node-fetch@2  
Fetch is used to get the data from the API  


## GET /todos

Your API should internally call a third party API to get the list of todo items. The third party API  
URL is https://jsonplaceholder.typicode.com/todos & the method is GET which will return a list of  
todo items in a JSON array of objects.  


## GET /user/pass-your-user-id-here

You have to get the user information for the given user id (in the url) from a third party API.  
The third party API URL is : https://jsonplaceholder.typicode.com/users/pass-your-user-id-here.  

You also need to get all the todo items from this API https://jsonplaceholder.typicode.com/todos and  
find out all the todo items where user id matches with the above user id passed in the URL and  
append it to the output