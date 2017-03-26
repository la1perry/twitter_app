let Twitter=require('./twitter');

let client = new Twitter ({
    consumer_key:'bbbA1aRERvYZ0KkHABXApBp9S',
    consumer_secret:'2zp4hrCE00t1NpclK64CvLl3PaDO6vMBfcASQo3bKVfNxi3Onc',
    access_token_key:'3037116397-GD7fJwoPIH24ntZ6PqV8pWxQa2vSm2x4mLcvkt0',
    access_token_secret:'Re1p554NlBcw1GiFofqLbGuiTxcIMtgfQPdlgE1a2ikVk'
});


// let btn=document.getElementById('btn');

// btn.addEventListener('click',(e)=>{
// e.preventDefault();


// });

let params={screen_name:'realDonaldTrump'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        console.log(tweets);}
});