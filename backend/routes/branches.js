const router = require("express").Router();
let Branch = require("../models/branch.model");

router.route("/").get((req, res)=>{
    Branch.find()
    .then(data => res.json(data))
    .catch(err => res.status(400).json("Error: "+ err));
});

router.route("/add").post((req, res)=>{
    const branch_name=req.body.branch_name;
    const subjects = req.body.subjects;
    const newBranch = new Branch({
        branch_name,
        subjects,
    });

    newBranch.save()
    .then(()=>res.json("Branch Added..!!"))
    .catch(err=> res.status(400).json("Error: " + err))
});

router.route("/addBranch").post((req, res)=>{

});

module.exports = router;