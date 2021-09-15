let data = require('../data');
// const slugify = require('slugify');

exports.getCourses = async (req, res, next) => {
  try {
    res.json(data);
  } catch (error) {
    next(error);
  }
};

exports.createCourse = async (req, res, next) => {
  try {
    if (req.user) {
      req.body.instructor = req.user.username;
    }
    let course = req.body;
    course.id = data[data.length - 1].id + 1;
    data.push(course);
    res.status(201).json(course);
  } catch (error) {
    next(error);
  }
};
