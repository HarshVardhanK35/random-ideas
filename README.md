# Random Ideas Application
A full stack application

1. Backend
- where we have routes that we can hit with HTTP requests to create, read, update and delete ideas
2. Frontend
- we have webpack, we will use modules, UI components.

Note:
* we did not implement the authentication but we have usernames that we gonna store them in local storage.
* we can only delete the ideas associated with my username but not with other usernames.
(it is not true authentication but it mimics how authentication actually works)

**Tools:**
1. Express - Backend web framework for NodeJS
  (easy to create routes and we gonna create data models for our ideas, a model and a schema)
2. Postman - make requests
  (POST- add an idea; PUT- to update; DELETE- to delete)
3. MongoDB(NoSQL data base)- create a mongodb database on the cloud with tool- ATLAS
4. Mongoose- To use database within our application we use this tool
  (make queries using simple methods like- find, findById findAndUpdate)