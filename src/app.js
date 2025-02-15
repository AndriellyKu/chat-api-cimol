const express = require("express");
const router = express.Router();
const salaRouter = require("./routers/salaRouter");
const usuarioRouter = require("./routers/usuarioRouter")


router.use("/salas", salaRouter);
router.use("/usuario", usuarioRouter);

router.get("/sobre", (req, res) =>{
    res.status(200).send({
        "nome": "API - CHAT",
        "versao": "0.1.0",
        "autor": "Andrielly"
    })
})

application.use


module.exports = router
