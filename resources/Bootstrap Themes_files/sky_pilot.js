(function(){

(SkyPilot = {
  target: "#downloads",
  hide_unless_downloads: function(email, order_id, shop_url){
    SkyPilot.jQuery.getJSON("https://skypilotapp.com/apps/downloads/orders/view/" + encodeURIComponent(email) + "/" + order_id + ".js?shop=" + shop_url + "&callback=?", function(data){
      if(!data.has_digital_goods)
      {
        SkyPilot.jQuery(SkyPilot.target).hide();
      }
    })
  },
  ready: function(){
    if(typeof(document.sky_pilot_ready) != "undefined")
    {
      document.sky_pilot_ready();
    }
  }
})

/* Load Script function we may need to load jQuery from the Google's CDN */
/* That code is world-reknown. */
/* One source: http://snipplr.com/view/18756/loadscript/ */

var loadScript = function(url, callback){

  var script = document.createElement("script");
  script.type = "text/javascript";

  // If the browser is Internet Explorer.
  if (script.readyState){
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" || script.readyState == "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  // For any other browser.
  } else {
    script.onload = function(){
      callback();
    };
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);

};

/* If jQuery has not yet been loaded or if it has but it's too old for our needs,
we will load jQuery from the Google CDN, and when it's fully loaded, we will run
our app's JavaScript. Set your own limits here, the sample's code below uses 1.7
as the minimum version we are ready to use, and if the jQuery is older, we load 1.9. */
if ((typeof jQuery === 'undefined') || (parseFloat(jQuery.fn.jquery) < 1.7)) {
  loadScript('//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js', function(){
    jQuery191 = jQuery.noConflict(true);
    SkyPilot.jQuery = jQuery191
    SkyPilot.ready();
  });
} else {
  SkyPilot.jQuery = jQuery;
  SkyPilot.ready();
}
})();
