
const { nanoid } = require('nanoid');
const URL =require('../models/urls')

async function handelGenerateNewShortURL(req,res){
    if(!req.body) return res.status(400).json({'status':'not found'});

    const shorId = '123';

    await URL.create({
        shortId : shorId+6,
        origalUrl: 'https://www.google.com/',
        visitHistory : [],
    })

   return res.status(200).json({'shortURL': shorId})
}

async function handelGetRedirectUrl(req, res) {
    const id = req?.params?.shortId;

    const entry = await URL.findOneAndUpdate({ shortId: id }, {$push: {visitHistory: {timeStamp:Date.now()}}});

     res.redirect(entry?.origalUrl)
    // return res.json({'completed':'true' , 'data': entry})
}

async function handelAnalytics(req, res) {
    const id= req.params.shortId

    const entry = await URL.findOne({shortId :id})


    return res.json({'visitedHistory':entry.visitHistory.length, 'analytics': entry.visitHistory})
}

async function handelServerSideRendering(req, res) {

    const allShortId = await URL.find({})
    return res.end(`
        <html>
        <body>
        <ol>
        ${allShortId.map(url=> `<li>${url.shortId} - ${url.visitHistory.length}</li>`).join('')}
        </ol>
        </body>
        </html>`
    )
    
}

module.exports = {
    handelGenerateNewShortURL,
    handelGetRedirectUrl,
    handelAnalytics,
    handelServerSideRendering
}