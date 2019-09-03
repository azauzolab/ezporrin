let User = require("../models/user.js");
let Task = require("../models/task.js");

let asyncHandler = require("../middleware/asyncHandler.js");
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/api/users", asyncHandler(async function (req, res, next) {
  let users = await User.findAll();
  let output = [];
  for(let user of users) {
    console.log(users);
    let tasks = await Task.findAll({
      where: {
        user: user.id
      }
    });

    user.dataValues.tasks = tasks.length;
    user.dataValues.payed = 0;
    user.dataValues.ammountTotal = 0;
    user.dataValues.ammountUnpayed = 0;
    for(let task of tasks) {
      user.dataValues.ammountTotal += task.cost;
      if(task.payed){
        user.dataValues.payed++;
      } else {
        user.dataValues.ammountUnpayed += task.cost;
      }
    }
    delete user.dataValues.rfid_id;
    output.push(user);
  }
  return output;
}));


router.get("/api/tasks", asyncHandler(async function (req, res, next) {
  let tasks = await Task.findAll({
    limit: 50,
    order: [["id", "DESC"]]
  });

  for(let task of tasks) {
    let user = await User.findOne({
      where: {
        id: task.user
      }
    });

    task.user = user;
    delete task.user.dataValues.rfid_id;
  }

  return tasks;
}));


router.get("/api/user/:id/tasks", asyncHandler(async function (req, res, next) {
  let tasks = await Task.findAll({
    order: [["id", "DESC"]],
    where: {
      user: req.params.id
    }
  });

  for(let task of tasks) {
    let user = await User.findOne({
      where: {
        id: task.user
      }
    });

    task.user = user;
    delete task.user.dataValues.rfid_id;
  }

  return tasks;
}));



module.exports = router;
