const express = require('express');
const passport = require('passport');

const {
  getCourses,
  createCourse,
} = require('../controllers/coursesController');

const router = express.Router();

router.get('/', getCourses);
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  createCourse
);

module.exports = router;
