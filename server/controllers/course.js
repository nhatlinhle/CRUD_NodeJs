const mongoose = require('mongoose');
const Course = require('../models/course');

// create new cause
function createCourse(req, res) {
  const course = new Course({
    _id: mongoose.Types.ObjectId(),
    title: req.body.title,
    description: req.body.description,
  });
  return course
    .save()
    .then((newCourse) => {
      return {
        success: true,
        message: 'New cause created successfully',
        Course: newCourse,
      };
    })
    .catch((error) => {
      return {
        success: false,
        message: 'Server error. Please try again.',
        error: error.message,
      };
    });
}

// Get all course
function getAllCourse(req, res) {
  Course.find().exec().then((first) => {console.log(first)})
  // Course.find()
  // .then((allCourse) => {
  //   console.log(allCourse)
  //   return {
  //     success: true,
  //     message: 'A list of all course',
  //     Course: allCourse,
  //   };
  // })
  // .catch((err) => {
  //   return {
  //     success: false,
  //     message: 'Server error. Please try again.',
  //     error: err.message,
  //   };
  // });
}

module.exports = { createCourse, getAllCourse };