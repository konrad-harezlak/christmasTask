const express = require('express');
const router = express.Router();

const packageController = require('./packageController')
const elfController = require('./elfController')

router.post('/addElf/:firstName/:lastName', elfController.addElf)
router.delete('/removeElf/:idElf', elfController.removeElf)
router.put('/setFreeElf/:idElf', elfController.setFree)
router.put('/setMaternityLeave/:idElf', elfController.setMaternityLeave)

router.post('/addPackage/:name',packageController.addPackage)
router.put('/signPackage/:idPackage/:idElf',packageController.signPackage)

router.get('/', (req,res)=>{
    res.send("Witaj na stronie z elfami")
})
module.exports= router;