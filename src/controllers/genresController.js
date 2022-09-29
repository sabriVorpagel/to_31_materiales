const db = require('../database/models')

module.exports={

    list: (req,res) => {
        db.Genre.findAll()
            .then(genres => {
                return res.render('genresList', {
                    genres
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