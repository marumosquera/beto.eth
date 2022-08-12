let Twit = require('twit')

let T = new Twit({
  consumer_key:         'KXX5pTObZrNTgY9NAgpdahcnV',
  consumer_secret:      'KBVCYdSeAHW6Hpl9haa51vlIEAaHfOwF0n6j5QmQYvyV1t4UQX',
  access_token:         '1558082101781594118-HJnGTHEz8rF4eZNcuL6bfAMYp2GvUl',
  access_token_secret:  'Ay1pQqf4B58Hm3KrshI3c9j50QRR9Q8iJOUqaAzsyzoOH',
})

 
let id_twitter;

function buscar(){
      T.get('search/tweets', { q: 'ethlatam', count: 1 }, function(err, data, response) {
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
      T.post('statuses/retweet/:id', { id: tweet }, function (err, data, response) {
          console.log(data)
        })
  }
  
//   setInterval(buscar, 1*60*1000);
buscar()