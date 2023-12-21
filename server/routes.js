const express = require('express');
const router = express.Router();

const packageController = require('./packageController')
const elfController = require('./elfController')

router.post('/addElf', elfController.addElf)
router.post('/addPackage',packageController.addPackage)

module.exports= router;