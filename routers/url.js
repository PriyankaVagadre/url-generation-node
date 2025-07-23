const express = require('express');

const router = express.Router();

const {handelGenerateNewShortURL, handelGetRedirectUrl, handelAnalytics} = require('../controllers/url')

router.post('/', handelGenerateNewShortURL);

router.get('/:shortId', handelGetRedirectUrl)

router.get('/analytics/:shortId', handelAnalytics)

module.exports = router;