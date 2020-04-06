const express = require('express');
const router = express.Router()

const ongsController = require("./controllers/ongsController");
const incidentsController =  require("./controllers/incidentsController");

router.get("/ongs", ongsController.index); 
router.post("/ongs", ongsController.create); 

router.get("/incidents", incidentsController.index);
router.post("/incidents", incidentsController.create);
router.delete("/incidents/:id", incidentsController.destroy);

module.exports = router;