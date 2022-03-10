const path = require("path")
require("dotenv").config({ path: path.resolve(__dirname, "../.env") })

const movieUrl = `https://api.themoviedb.org/3`
const API = process.env.TMDB_API
const popular = `${movieUrl}/movie/popular?api_key=${API}`
module.exports = {
	popular
}
