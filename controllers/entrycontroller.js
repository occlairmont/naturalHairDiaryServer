const router = require("express").Router();
const Entry = require("../db").import("../models/entry");
const validateSession = require("../middleware/vaildate-session");
const entry = require("../models/entry");

router.post("/new", validateSession,(req, res) => {
    const dateConversion = new Date(req.body.date);
    const entryLog = {
        date: dateConversion,
        goal: req.body.goal,
        products: req.body.products,
        style: req.body.style,
        isSuccessful: req.body.isSuccessful,
        note: req.body.note,
        owner: req.user.id
    };
    Entry.create(entryLog)
        .then(entry => res.status(200).json(entry))
        .catch(err => res.status(500).json({error:err}));
});

router.get("/all", validateSession, (req, res) => {
    let userid = req.user.id
    Entry.findAll({
        where: {owner: userid}
    })
    .then(entries => res.status(200).json(entries))
    .catch(err => res.status(500).json({error:err}))
})

// router.get("/searched-dates", validateSession, (req, res) => {})

router.put("/update/:id", validateSession, (req, res) => {
    const dateConversion = new Date(req.body.date);
    const updateEntryLog = {
        date: dateConversion,
        goal: req.body.goal,
        products: req.body.products,
        style: req.body.style,
        isSuccessful: req.body.isSuccessful,
        note: req.body.note,
    };
    const query = {
        where:{
            id: req.params.id, owner: req.user.id
        }
    };
    Entry.update(updateEntryLog, query)
        .then((entries) => res.status(200).json(entries))
        .catch((err) => res.status(500).json({error:err}));
});

router.delete("/delete/:id", validateSession, (req, res) => {
    const query = {
        where: {
            id: req.params.id, owner: req.user.id
        }
    };
    Entry.destroy(query)
        .then(() => res.status(200).json({message: "Entry Deleted."}))
        .catch((err) => res.status(500).json({error:err}));
});

module.exports = router;