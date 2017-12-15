

chrome.tabs.onUpdated.addListener(function(){
	var tabSelector = {//object used to select current tab
		active: true,//tab should be active
		currentWindow: true//tab should be in the curren window
	}

	chrome.tabs.query(tabSelector, (tabs) => {
		var thisTab = tabs[0];
		var thisUrl = thisTab.url;

		if(thisUrl == "https://bits-oasis.org/" || thisUrl == "https://bits-bosm.org/" || thisUrl == "https://www.bits-apogee.org/2017/"){

			chrome.tabs.executeScript({
				code:'console.log("Hurray!");'
			})
		}
	});
});