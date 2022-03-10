const path = require("path")
const axios = require("axios")
const { popular } = require("../constants")
require("dotenv").config({ path: path.resolve(__dirname, "../.env") })
class Model {
	static async getAllMovie() {
        const URL = popular

        const {data} = await axios.get(URL)
        return data
	}
}


module.exports = Model