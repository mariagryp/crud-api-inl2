// api, router

const express = require('express');
const userRouter = express.Router();
const User = require("../models/User");

// request to a db get user
userRouter.get("/getusers", (req, res) => {
    /* const users = [
        { firstname: "Firstname 1", lastname: "Lastname 1" },
        { firstname: "Firstname 2", lastname: "Lastname 2" },
    ];
    res.status(200).json({users: users}) */
    User.find({}, (err, documents) => {
        if (err) {
            res.status(500).json({
                msg: {
                    msgBody: "An error occured while getting a user",
                    msgError: true,
                },
            });
        } else {
            res.status(200).json({
                users: documents
            });
        }
    });
});

// add user
userRouter.post("/newuser", (req, res) => {
    console.log("add a new user: ", req.body);
    const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname
    });
    newUser.save((err) => {
        if (err) {
            res.status(500).json({
                msg: {
                    msgBody: "An error occured while saving an user",
                    msgError: true
                }
            });
        } else {
            res.status(201).json({
                msg: {
                    msgBody: "An user was added successfully",
                    msgError: false
                }
            });
        }
    });
});

//   put (update) a user
userRouter.put("/updateuser/:id", (req, res) => {
    User.findByIdAndUpdate(
        req.params.id,
        {
            firstname: req.body.firstname,
            lastname: req.body.lastname
        },
        (err) => {
            if (err) {
                res.status(500).json({
                    msg: {
                        msgBody: "En error occured while updating a user ",
                        msgError: true,
                    }
                });
            } else {
                res.status(200).json({
                    msg: {
                        msgBody: "User was updated successfully",
                        msgError: false,
                    },
                });
            }
        }
    );
});

// delete a user
userRouter.delete("/deleteuser/:id", (req, res) => {
    User.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            res.status(500).json({
                msg: {
                    msgBody: "An error occured while deleting a user",
                    msgError: true,
                }
            });
        } else {
            res.status(200).json({
                msg: {
                    msgBody: "A user was deleted",
                    msgError: false,
                }
            });
        }
    });
});


module.exports = userRouter;