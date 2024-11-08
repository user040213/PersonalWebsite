const express = require("express")
const database = require("./connect")
const ObjectId = require("mongodb").ObjectId

let projectsRoutes = express.Router()
/*
// Create
projectsRoutes.route("/projects").post(async (request, response) => {
    let DB = database.getDB()
    let mongoObject = 
    {
        title: request.body.title,
        content: request.body.content,
        date: request.body.date,
        toolsLang: request.body.toolsLang,
    }
    let data = await DB.collection("posts").insertOne(mongoObject)
    response.json(data)
    
})
    */
// Read All
projectsRoutes.route("/projects").get(async (request, response) => {
    let DB = database.getDB()
    let data = await DB.collection("posts").find({}).toArray()
    if(data.length > 0)
    {
        response.json(data)
    }
    else
    {
        throw new Error("Data fetch error")
    }
})

// Read
projectsRoutes.route("/projects/:id").get(async (request, response) => {
    let DB = database.getDB()
    let data = await DB.collection("posts").findOne({_id: new ObjectId(request.params.id)})
    if(Object.keys(data).length > 0)
    {
        response.json(data)
    }
    else
    {
        throw new Error("Data fetch error")
    }
})
/*
// Update
projectsRoutes.route("/projects").post(async (request, response) => {
    let DB = database.getDB()
    let mongoObject = 
    {
        $set:
        {
            title: request.body.title,
            content: request.body.content,
            date: request.body.date,
            toolsLang: request.body.toolsLang,
        }
    }
    let data = await DB.collection("posts").updateOne({_id: new ObjectId(request.params.id)}, mongoObject)
    response.json(data)
    
})
// Delete
projectsRoutes.route("/projects/:id").delete(async (request, response) => {
    let DB = database.getDB()
    let data = await DB.collection("posts").deleteOne({_id: new ObjectId(request.params.id)})
    response.json(data)
})
    */

module.exports = projectsRoutes
