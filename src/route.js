const express = require("express")
const controller = require("./Controller/controller.js")
const router = express.Router()


router.get("/movie", controller.viewAllMovie)
//router something



module.exports = router