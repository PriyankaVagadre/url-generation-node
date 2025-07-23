const express = require('express');

const router = express.Router();

const {handelGenerateNewShortURL} = require('../controllers/url')

router.post('/', handelGenerateNewShortURL);

module.exports = router;