// Create a NodeJS project with following APIs

const express = require('express');
const fetch = require('node-fetch');
const app = express();


// A GET request to return a list of todos without user id field

app.get('/todos', async (req, res) => {
    // Using try-catch for error handling in case the API is down
    try {
        // Getting the response from the API for todos and parsing the data
        const responseTodo = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await responseTodo.json();

        // Retuning the data after excluding the user id field
        const result = data.map(d => {
            return {
                id: d.id,
                title: d.title,
                completed: d.completed
            }
        })

        console.log('Response sent');

        // Sending the response
        res.send(result);

    } catch (e) {
        console.log('Something went wrong!!!', e);
        res.send('There might be some issue with the API, please try after some time');
    }
});



// A GET request to return user information along with todo items where userid matches with the one provided in the URL

app.get('/user/:id', async (req, res) => {
    // Using try-catch for error handling in case the API is down
    try {
        // Extracting the id from the request
        const {id} = req.params;

        // Getting the response from the API for user information and parsing the data
        const responseUser = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const userData = await responseUser.json();

        // Getting the response from the API for todos and parsing the data
        const responseTodo = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await responseTodo.json();

        // Returning only the data from the API for todos where the user id matches the inquired one
        const userTodo = data.filter(d => d.userId === Number(id));

        // Creating the result object with the user data and the corresponding todo list
        const result = {
            id: id,
            name: userData.name,
            email: userData.email,
            phone: userData.phone,
            todos: userTodo
        };

        console.log('Response sent');

        // Sending the response
        res.send(result);

    } catch (e) {
        console.log('Something went wrong!!!', e);
    }
});


// Starting the server
app.listen(3000, () => {
    console.log('Listening on port 3000');
});