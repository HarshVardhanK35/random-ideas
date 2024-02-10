const express = require("express");
const router = express.Router()

// bring all the routes and the ideas object from server.js

// ideas object created inside server.js file.. brought from server.js into this for cleaning up the routes
const ideas = [
  {
    id: 1,
    text: "Positive news letter, a newsletter that only shares positive, uplifting news",
    tag: 'Technology',
    username: 'TonyStark',
    date: '22-01-2024'
  },
  {
    id: 2,
    text: "Milk cartons that turn a different color the older that your milk is getting",
    tag: 'Inventions',
    username: 'Steve',
    date: '12-02-2024'
  },
  {
    id: 3,
    text: "ATM location app which lets you know where the closest ATM is (if it is only in service)",
    tag: 'Software',
    username: 'Bruce',
    date: '3-02-2024'
  },
];

/*
  -------------------------- REST structure of EndPoints --------------------------
  * GET- get all ideas- (/api/ideas)
  * GET- get an idea- GET req to an id of an idea- (/api/ideas/:id)
  * POST- Create an idea- POST req to (/api/ideas)
  * DELETE- Delete an idea- DELETE req to (/api/ideas/:id)
  * PUT- Update an idea- PUT req to (/api/ideas/:id)
*/

// GET req to get all the ideas
router.get("/",(req, res)=> {
  res.json({ success: true, data: ideas});
});

// POST Request to add an Idea
router.post('/', (req, res)=> {
  res.send("POST SUCCESS")
})

/*
-------------------------- GET req- to get a single idea with its' Id
- to get an idea with its' Id we use "Query Param"-> /:id (id === id of that idea)
- way to access it is: with request object-> (req.params) and the param we need-> (id)
  with (req.params.id)
- to filter an idea by Id
    -> we do manually here using... HigherOrderArray Methods.
    -> usually, we use findById() when we use tools like Mongoose.
*/
router.get("/:id",(req, res)=> {

  const idea = ideas.find((idea)=> {
    return idea.id === +req.params.id
  })

  // -------------------------- handling the error
  // we need to take care of... to handle error if there is no idea with that Id
  if(!idea){
    return res.status(404).json({ success: false, error: "Data not found" })
  }

  res.json({ success: true, data: idea});
});


module.exports = router;