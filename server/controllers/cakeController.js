const mongoose = require("mongoose");
const Cake = mongoose.model("Cake");
const Rate = mongoose.model("Rate");


console.log('SERVER > CONTROLLERS > cakeController.js');


module.exports = {
  //Root retrieve all
  retrieveAll: function(req, res) {
    Cake.find({}, function(err, cake_array) {
      if (err) {
        console.log("\nReturned error", err);
        res.json({ message: "\nError", error: err });
      } else {
        res.json({ message: "\nSuccess", data: cake_array });
      }
    });
  },

  //Retrieve 1 (by task id)
  retrieveOne: function(req, res) {
    Cake.findOne({ _id: req.params.id }, function(err, cake) {
      if (err) {
        console.log("\nerr getting back one from server", err);
        res.json({ message: "\nError", error: err });
      } else {
        res.json({ message: "\nSuccess", data: cake });
      }
    });
  },

  //Create /save
  create: function(req, res) {
    console.log("\n ====> req.body =>", req.body);
    var cakeInstance = new Cake({
      name: req.body.name,
      imgurl: req.body.imgurl,
    });
    cakeInstance.save(function(err) {
      if (err) {
        console.log("we have an error", err);
        for (var key in err.errors) {
          res.json({ message: "error", error: err });
        }
      } else {
        console.log("successfully added a user!");
        res.json({ message: "Success save" });
      }
    });
  },

  //comment / by cake id)
  comment: function(req, res) {
    Rate.create({ _id: req.params.id }, function(err, comment) {
      rate.rating = req.body.rating;
      rate.comment = req.body.comment;
      rate.save(function(err) {
        if (err) {
          console.log("we have an error", err);
          for (var key in err.errors) {
            res.json({ message: "error", error: err });
          }
        } else {
          console.log("successfully added a user!");
          res.json({ message: "Success save" });
        }
      });
    });
  },
//   //Delete (by task id)
//   destroy_task: function(req, res) {
//     // console.log(req.params.id);
//     Task.remove({ _id: req.params.id }, function(err) {
//       console.log("DELETEING TASK");
//       if (err) {
//         console.log("\nerr getting back one from server", err);
//         res.json({ message: "Error cannot delete", error: err });
//       } else {
//         res.json({ message: "Success deleted"});
//       }
//     });
//   }
};
