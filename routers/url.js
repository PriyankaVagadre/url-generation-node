const express = require('express');

const router = express.Router();

const {handelGenerateNewShortURL, handelGetRedirectUrl, handelAnalytics, handelServerSideRendering} = require('../controllers/url')

router.post('/', handelGenerateNewShortURL);

router.get('/:shortId', handelGetRedirectUrl)

router.get('/analytics/:shortId', handelAnalytics)

router.get('/url/serverside', handelServerSideRendering)

module.exports = router;