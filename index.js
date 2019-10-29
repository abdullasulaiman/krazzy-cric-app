const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 9000;

const player = process.argv[2];
let searchUrl = `https://site.api.espn.com/apis/common/v3/search?sport=cricket&query=${player}&limit=5&type=league%2Cteam%2Cplayer%2Cpersonality%2Cshow%2Cpodcast%2Cradio&mode=prefix&lang=en&region=in&site=espncricinfo&section=cricinfo`

app.get('/', (req, res) => {
  axios.get(searchUrl)
  .then( res => {
    var {
      items,

    } = res.data;
    items.map( player => {
      var {
        displayName,
        headshot: {
          href: playerphoto
        }
      } = player;
      console.log(' Name -> ', displayName);
      console.log(' Photo -> ', playerphoto);
    })
  })
  res.send("This is Krazy API POC ..!");
})

app.listen(port);
console.log("Server started at port " + port);
