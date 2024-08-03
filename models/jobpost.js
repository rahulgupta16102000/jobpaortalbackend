const mongoose = require('mongoose');

const jobPostSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  companyDescription:{
    type: String,
  },
  experience:{
type:String,
required: true,
  },
  post_number:{
    type: Number,
    required: true,
    unique:true
  },
  post_count:{
    type: Number,
    required: true,
  },
  jobHeading: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  experienceRange: {
    type: String,
    required: true,
  },
  jobRole: {
    type: String,
    required: true,
  },
  ctc: {
    type: String,
    required: true,
  },
  jobLocations: {
    type: [String], // Assuming job locations are stored as an array of strings
    required: true,
  },
  employmentType: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  qualification: {
    type: [String],
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
  eligibilityDetails: {
    type: [String],
    required: true,
  },
  jobDescription: {
    type: [String],
    required: true,
  },
  responsibility: {
    type: [String],
    required: true,
  },
  applyLink: {
    type: String,
    required: true,
  },
});

const JobPost = mongoose.model('JobPost', jobPostSchema);

module.exports = JobPost;
