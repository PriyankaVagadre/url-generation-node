
import { nanoid } from 'nanoid';
import URL from '../models/urls'

async function handelGenerateNewShortURL(req,res){
    if(!req.body) return res.status(400).json({'status':'not found'});

    const shorId = nanoid(8);

    await URL.create({
        shortId : shorId,
        origalUrl: req?.body.url,
        visitHistory : [],
    })

   return res.status(200).json({'shortURL': shorId})
}

module.exports = {
    handelGenerateNewShortURL
}