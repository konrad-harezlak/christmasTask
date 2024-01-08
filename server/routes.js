const express = require('express');
const pool = require('./pool');
const router = express.Router();

const packageController = require('./packageController')
const elfController = require('./elfController')

router.post('/addElf/:firstName/:lastName', elfController.addElf)
router.delete('/removeElf/:idElf', elfController.removeElf)
router.put('/setFreeElf/:idElf', elfController.setFree)
router.put('/setMaternityLeave/:idElf', elfController.setMaternityLeave)

router.post('/addPackage/:name',packageController.addPackage)
router.put('/signPackage/:idPackage/:idElf',packageController.signPackage)

router.get('/', async (req,res)=>{
   
   try {
        const packages = await pool.query(`select * from packages`);
        const elves = await pool.query(`select * from elves`);
        const responseData = {
            message: "Witaj na stronie z elfami!",
            packages: packages.rows,
            elves: elves.rows
        };
    
        const formattedResponse = JSON.stringify(responseData, null, 2);
    
        res.setHeader('Content-Type', 'application/json');
        res.send(formattedResponse);
        
    } catch (error) {
        console.error("Error adding elf:", error);
        throw error;
    }
    
})
module.exports= router;