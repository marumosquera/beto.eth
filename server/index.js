let Twit = require('twit')

let T = new Twit({
  consumer_key:         'Nszz82sEtNSq7M0sqEjREHbcC',
  consumer_secret:      'WEQQcfLqXmOBRnONFyayMvuZtlGLPNZGY9JvtWybK9Cv1aHqJG',
  access_token:         '1558082101781594118-7dPRmMjeIigZrjr0xI5V7yue5kcCjb',
  access_token_secret:  'G28j9Lgpvwscy4cqHRAdz7fc7N5ojgIM73nZGHTUn3s3s',
})

 
let id_twitter;

function buscar(){
      T.get('https://www.twitter.com/search/tweets', { q: 'ethlatam', count: 1 }, function(err, data, response) {
        try {
            console.log(data)
        //    id_twitter = data.statuses[0].id_str; 
        //    tuitear(id_twitter);
        } catch (error) {
            console.log(error)
        }
      })
  }
  
  function tuitear(tweet){
      T.post('https://www.twitter.com/statuses/retweet/:id', { id: tweet }, function (err, data, response) {
          console.log(data)
        })
  }
  
//   setInterval(buscar, 1*60*1000);
buscar()