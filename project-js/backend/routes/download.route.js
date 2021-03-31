﻿const express = require('express');
const downloadRoute = express.Router();

let downloadModel = require('../models/Download');

// Create 
downloadRoute.route('/download').post((req,res,next)=>{
    downloadModel.create(req.body).then((error,data)=>{
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// get all data
downloadRoute.route('/view').get((req,res,next)=>{
    downloadModel.find((error,data)=>{
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// get one
downloadRoute.route('/show_one/:id').get((req,res,next)=>{
    downloadModel.findOne(req.params.id,(error,res)=>{
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Edit data
downloadRoute.route('/edit/:id').get((req,res,next)=>{
    downloadModel.findById(res.params.id,(error,data)=>{
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Update data
downloadRoute.route('/update/:id').put((req,res,next)=>{
    downloadModel.findByIdAndUpdate(req.params.id,{
        $set = req.body
    },(error,data)=>{
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Delete data
downloadRoute.route('/del/:id').delete((req,res,next)=>{
    downloadModel.findByIdAndDelete((error,data)=>{
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    })
})

module.exports = downloadRoute