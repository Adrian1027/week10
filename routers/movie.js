var Actor = require('../models/actor');
var Movie = require('../models/movie');
const mongoose = require('mongoose');
module.exports = {
    getAll: function (req, res) {
        Movie.find({}).populate('actors').exec(function(err,movies){
            if (err) return res.status(400).json(err);
            if (!movies) return res.status(404).json();
            res.json(movies);
        })
        // Movie.find(function (err, movies) {
        //     if (err) return res.status(400).json(err);
        //     res.json(movies);
        // });
    },
    createOne: function (req, res) {
        let newMovieDetails = req.body;
        newMovieDetails._id = new mongoose.Types.ObjectId();
        Movie.create(newMovieDetails, function (err, movie) {
            if (err) return res.status(400).json(err);
            res.json(movie);
        });
    },
    getOne: function (req, res) {
        Movie.findOne({ _id: req.params.id })
            .populate('actors')
            .exec(function (err, movie) {
                if (err) return res.status(400).json(err);
                if (!movie) return res.status(404).json();
                res.json(movie);
            });
    },
    updateOne: function (req, res) {
        Movie.findOneAndUpdate({ _id: req.params.id }, req.body, function (err, movie) {
            if (err) return res.status(400).json(err);
            if (!movie) return res.status(404).json();
            res.json(movie);
        });
    },
    //Lab7
    delbyid:function(req,res){
        Movie.findByIdAndDelete({ _id: req.params.id },function (err, movie) {
            if (err) return res.status(400).json(err);
            if (!movie) return res.status(404).json();
            res.json(movie);
        });
    },
    delAinM:function(req,res){
        Movie.findOne({_id:req.params.mid},function(err,movie){
            movie.actors.remove(req.params.aid);
            movie.save(function(err){
                if (err) return res.status(500).json(err);
                res.json(movie);
            })
        })
    },
    addActor: function (req, res) {
        Movie.findOne({ _id: req.params.id }, function (err, movie) {
            if (err) return res.status(400).json(err);
            if (!movie) return res.status(404).json();
            Actor.findOne({ _id: req.params.aid }, function (err, actor) {
                if (err) return res.status(400).json(err);
                if (!actor) return res.status(404).json();
                movie.actors.push(actor._id);
                console.log(movie.actors);
                movie.save(function (err) {
                    if (err) return res.status(500).json(err);
                    res.json(movie);
                });
            })
        });
    },
    delByYear:function(req,res){
        Movie.deleteMany({year:{$lt:req.params.year1}},function(err,movie){
            res.json(movie);
        })
    },
    getByYear:function(req,res){
        Actor.where('year').gt(req.params.year2).lt(req.params.year1).exec(function(err,movie){
            res.json(movie);
        })
    }
};