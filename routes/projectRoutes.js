const express = require('express');
const router  = express.Router();

router.get('/', (req, res, next) => {
  // this route is actualy localhost:3000/api/projects 
//  because of the preface i put on this routes file in app.js
  let allTheProjects = 
  [{_id: "234234", name: "project paper clip"}, {_id: "55444", name: "project AREA-53"}];
   
  res.status(200).json(allTheProjects);
  
});

module.exports = router;