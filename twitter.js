// import * as tf from '@tensorflow/tfjs';

let tweets_list = [];
let block = [];

function arr_diff (a1, a2) {

    var a = [], diff = [];

    for (var i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }

    for (var i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }

    for (var k in a) {
        diff.push(k);
    }

    return diff;
}

// Example POST method implementation:
async function getData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}
  

function addInstapaperAction() {
    
    var tweets = document.querySelectorAll('div[class="css-1dbjc4n"] div[class="css-901oao r-18jsvk2 r-1qd0xha r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-bnwqim r-qvutc0"]');
    
    // console.log('Model', tf.loadLayersModel("./model/my_model/model.json"));

    var new_tweets = [];
    var tag2tweet = {};

    for (var i = 0; i < tweets.length; i++) {

        var tweet_link = tweets[i];
    
        var regex = /(<([^>]+)>)/ig
        ,   body = tweet_link.innerHTML
        ,   result = body.replace(regex, "");
                
        if (!tweets_list.includes(result)){
            tweets_list.push(result)
            new_tweets.push(result)
            tag2tweet[result] = tweet_link;
            console.log(result)
        }

        // condition prob >0.9
        // 0. Remove all the special chars
        // 1. Tokenization
        // hello world -> ["hello", "world"] -> [10, 5]
        // {""hello": 10, "world": 5}
        // 2. Padding -> 10
        // vector = [10, 5, 0, 0, 0, 0, 0,0, 0, 0,] -> size - 10
        // prob = model.predict(vector)
        // if (prob > 0.9)
        // {
        //      blur the tweet
        //      add a button to deblur the tweet
        // }
        // tweet_link.style.filter = "blur(10px)";                   

    }

    if(new_tweets.length != 0) {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "sents": new_tweets
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("http://127.0.0.1:5000/infer", requestOptions)
          .then(response => response.json())
          .then(result => {
              
              console.log('Result',result)
              for(var i=0; i<new_tweets.length; i++){
                  console.log(result['pred'][i], 0.0000002, new_tweets[i]);
                  console.log("")
                  if(result['pred'][i] > 0.0002){
                      block.push(tag2tweet[new_tweets[i]])
                  }
              }
              console.log('Block',block)

            })
          .catch(error => console.log('error', error));
    }    

    for(var i=0; i<block.length; i++){

        var tweet_link = block[i];
        tweet_link.style.filter = "blur(10px)";
        var button = document.createElement("button");
        var text = document.createTextNode("test");
        button.appendChild(text);
        tweet_link.insertBefore(button);  

        // var like_buttons = tweet.querySelectorAll('[data-testid="like"]');
        // if (like_buttons.length == 0) {
            // continue;
        // }
        
        // var like_button = like_buttons[0];
        // var tweet_actions = like_button.closest('[role="group"]');
        // var instapaper_element = document.createElement('div');
        // var instapaper_link = document.createElement('a');
        // instapaper_link.setAttribute('aria-label', 'Save to Instapaper');
        // instapaper_link.href = link;
        // instapaper_link.onclick = function(e) {
        //     var link = e.target;
        //     while (link && link.nodeName != "A")
        //         link = link.parentNode;
        //     if (link && link.href)
        //         saveLink(link.href);
        //     return false;
        // }

        // tweet_link.appendChild(instapaper_element);
        // instapaper_element.className = like_button.parentNode.className + ' ProfileTweet-action action-instapaper';
        // tweet_actions.insertBefore(instapaper_element, like_button.parentNode.nextSibling);         

    }

    setTimeout(addInstapaperAction, 1000);
}

addInstapaperAction()

