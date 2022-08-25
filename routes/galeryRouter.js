const express = require('express')
const { getAllGalery, createGalery } = require('../controllers/galeryController.js')
const {updateImage} = require('../controllers/galeryImage.js')
const router = express.Router()

router.route('/').get(getAllGalery).post(createGalery)
router.route('/uploads').post(updateImage)


module.exports = router