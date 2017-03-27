const superagent = require('superagent')
const scraper = require('../index')
scraper(superagent)
let url = 'https://www.baidu.com'
var req = superagent.get(url).scraper().end((err,res)=>{
	console.log('response status:',res.status)
})
console.log('request headers:',req.header)