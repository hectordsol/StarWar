const {Router}=require("express");
const starwarsDB = require("../database");

const router = Router();
router.get("/:model", async (req,res) => {
    const {model} = req.params;
    const response = await starwarsDB[model].list();
    res.status(200).json(response);
});
router.get("/:model/:id", async (req,res) => {
    const {model, id} = req.params;
    const response = await starwarsDB[model].get(id);
    res.status(200).json(response);
});
router.post("/:model", async (req, res) =>{
    const {model} = req.params;
    const value = req.body;
    const response =await starwarsDB[model].insert(value);
    res.status(200).json(response);
});
module.exports = router;