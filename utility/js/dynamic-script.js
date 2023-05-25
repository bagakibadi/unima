$(document).ready(function() {
	// Instagram feed
	var feed = new Instafeed({
        get: 'user',
        userId: '2218371076',
        //clientId: 'fc11536b73544121bd5a2222a5379a60',
        //accessToken : 'fc11536b73544121bd5a2222a5379a60',
        accessToken: '2218371076.1677ed0.35ec0785effa46e6895bf72d3c43bf7a',
        limit: '9',
        resolution: 'standard_resolution'
    });
    
    if ($('.instafeed').length) {
    	feed.run();
    }
});