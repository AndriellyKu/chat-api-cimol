const token = require('../util/token')
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    let tokenIsValid = await token.checkToken(req.headers.token, req.headers.iduser, req.headers.nick);
    console.log("é valido: ", tokenIsValid)
    if(tokenIsValid){
        const salaController = require("../controllers/salaController")
        let resp = await salaController.get();

        res.status(200).send(resp);
    } else {
        res.status(401).send({
            "msg": "usuario invalido"
        })
    }
})

router.put("/", async(req, res) => {
    let tokenIsValid = token.checkToken(req.headers.token, req.headers.iduser, req.headers.nick);
    
})

module.exports = router;