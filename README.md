## Introduction
`superagent-scraper` handles switching of `ip address` (via `X_FORWARDED_FOR`), `user-agent` and `referer` for you.

## Install
`npm i -S superagent-scraper`

## Add Plugin
Add `superagent-scraper` to `superagent`:
```js
const scraper = require('superagent-scraper')
const superagent = require('superagent')
scraper(superagent)
```

## Usage
```js
var url = 'https://www.example.com'
var req = superagent.get(url).scraper().end((err,res)=>{
    //response process
})
console.log(req.header)
```

`console.log(req.header)` will output(it's different each time):

```
{ 'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:47.0) Gecko/20100101 Firefox/47.0',
  Accept: '*/*',
  'Accept-Encoding': 'gzip, deflate, sdch',
  'Accept-Language': 'en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4',
  X_FORWARDED_FOR: '90.199.133.231',
  Referer: 'http://www.taobao.com/' }

```
