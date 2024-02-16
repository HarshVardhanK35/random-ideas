const express = require("express");
const router = express.Router();

// Import the schema from the models folder
const Idea = require("../models/Idea");

// bring all the routes and the ideas object from server.js

// ideas object created inside server.js file.. brought from server.js into this for cleaning up the routes
const ideas = [];

/*
  -------------------------- REST structure of EndPoints --------------------------
  * GET- get all ideas- (/api/ideas)
  * GET- get an idea- GET req to an id of an idea- (/api/ideas/:id)
  * POST- Create an idea- POST req to (/api/ideas)
  * DELETE- Delete an idea- DELETE req to (/api/ideas/:id)
  * PUT- Update an idea- PUT req to (/api/ideas/:id)
*/

// GET req --- get all the ideas
router.get("/", async(req, res)=> {
  try{
    const ideas = await Idea.find();
    res.json({ success: true, data: ideas })
  }
  catch(err){
    console.log(err)
    res.status(500).json({ success: false, err: "Something went wrong" })
  }
});

// get an single idea using it's id
router.get("/:id", async(req, res)=> {
  try{
    const idea = await Idea.findById(req.params.id)
    res.json({ success: true, data: idea })
  }
  catch(err){
    console.log(err);
    res.status(500).json({ success: false, err: "Something went wrong" })
  }
});

// POST Request to add an Idea
router.post('/', async (req, res)=> {
  const idea = new Idea({
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
  })

  try{
    // -> to save the object(idea) to the database
    const savedIdea = await idea.save();
    res.json({ success: true, data: savedIdea })
  }
  catch(err){
    console.log(err)
    res.status(500).json({ success: false, err: "Something went wrong" })
  }
})

// Update an Idea
router.put('/:id', async(req, res)=> {
  try {
    const updatedIdea = await Idea.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          text: req.body.text,
          tag: req.body.tag
        }
      },
      {
        new: true
      }
    )
    res.json({ success: true, data: updatedIdea })
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ success: false, err: "Something went wrong" })
  }
})

// DELETE an Idea
router.delete('/:id', async(req, res)=> {
  try{
    await Idea.findByIdAndDelete(req.params.id);
    res.json({ success: true, data: {} })
  }
  catch(err){
    console.log(err);
    res.status(500).json({ success: false, err: "Something went wrong" })
  }
})

module.exports = router;