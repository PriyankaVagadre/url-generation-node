const express = require('express');

const router = express.Router();

const {handelGenerateNewShortURL, handelGetRedirectUrl} = require('../controllers/url')

router.post('/', handelGenerateNewShortURL);

router.get('/:shortId', handelGetRedirectUrl)

module.exports = router;