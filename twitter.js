import * as tf from '@tensorflow/tfjs';

function parentWithClassName(el, className) {
    while ((el = el.parentNode) && (!el.classList || !el.classList.contains(className)));
    return el;
}

let tweets_list = [];

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

function addInstapaperAction() {
    
    var tweets = document.querySelectorAll('div[class="css-1dbjc4n"] div[class="css-901oao r-18jsvk2 r-1qd0xha r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-bnwqim r-qvutc0"]');
    
    console.log('Model', tf.loadLayersModel("./model/my_model/model.json"));

    for (var i = 0; i < tweets.length; i++) {

        var tweet_link = tweets[i];
    
        var regex = /(<([^>]+)>)/ig
        ,   body = tweet_link.innerHTML
        ,   result = body.replace(regex, "");
                
        if (!tweets_list.includes(result)){
            tweets_list.push(result)
            // console.log(result)
        }

        // condition prob >0.9
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
        tweet_link.style.filter = "blur(10px)";                   

    }
    
    setTimeout(addInstapaperAction, 1000);
}

chrome.storage.sync.get("twitter_enabled", function(obj) {
    if (obj.twitter_enabled)
        addInstapaperAction();
})

