const db = require('../database/models')

module.exports={

    list: (req,res) => {
        db.Movie.findAll()
            .then(movies => {
                return res.render('moviesList', {
                    movies
                })
            })
    },
    new : (req,res) => {

    },
    recommended : (req,res) => {

    },

    detail : (req,res) => {

    }

}