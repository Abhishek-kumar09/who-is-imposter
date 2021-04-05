function initialize_defaults() {
    chrome.storage.sync.get("defaults_initialized", function(obj) {
        if (obj.defaults_initialized)
            return;

        chrome.storage.sync.set({"twitter_enabled":true});
    })
}

initialize_defaults();

chrome.browserAction.onClicked.addListener(function(tab) {
    //Called when the user clicks on the browser action.
    bookmarklet();
});

function bookmarklet() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {'message': 'bookmarklet'});
    });
}

