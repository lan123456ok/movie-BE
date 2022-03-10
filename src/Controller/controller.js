const { next } = require("cheerio/lib/api/traversing")
const Model = require("../Model/model")
class Controller {
    static async viewAllMovie(req, res, next) {
        
        var data1 = await Model.getAllMovie()
        res.json({ success: true, data: data1 })

	}
}

module.exports = Controller