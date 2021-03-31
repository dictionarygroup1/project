const express = require('express');
const appRoute = express.Router();
// Member Model
let AppsModel = require('../models/Apps');

//GET ALL APP 
appRoute.route('/').get((req,res,next)=>{
    AppsModel.find((error,data)=>{
        if(error){
           return next(error)
        } else {
            res.json(data);
        }
    })
})
// Create App
appRoute.route('/create').post((req,res,next)=>{
    AppsModel.create(req.body,(error,data)=>{
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// EDIT APP
appRoute.route('/edit/:id').get((req,res,next)=>{
    AppsModel.findById(req.params.id,(error,data)=>{
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Update App
appRoute.route('/update/:id').put((req,res,next)=>{
    AppsModel.findByIdAndUpdate(req.params.id,{
        $set : req.body
    },(error,data)=>{
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// ค้นหาแอป
appRoute.route('/find/:id').get((req,res,next)=>{
    AppsModel.findOne(req.params.id,(error,data)=>{
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Delete App
appRoute.route('/del/:id').delete((req,res,next)=>{
    AppsModel.findByIdAndDelete(req.params.id,(error,data)=>{
        if(error) return next(error)
        else res.json(data)
    })
})

// Get last application
appRoute.route('/get_5').get((req,res,next)=>{
    AppsModel.find((error,data)=>{
        if(error){
            return next(error)
        }
        else {
            res.json(data)
        }
    }).sort({create_on:-1}).limit(5);
})

// Home Load
appRoute.route('/home_load/:category').get((req,res,next)=>{
    AppsModel.find({category:req.params.category},(error,data)=>{
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    }).limit(12)
})

module.exports = appRoute