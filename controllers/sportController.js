const axios = require("axios")

class sportController {
    static async getAll(req, res, next){
        try {
            const apiKey = 'fb32f43437e2453d928685c787c85348'
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=${apiKey}`)
            res.status(200).json(response.data)
            // console.log(response.data)
        } catch (error) {
           console.log(error) 
        }
    }

    

}

module.exports = sportController