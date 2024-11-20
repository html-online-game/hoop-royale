consolel0g= console.log;
adsTag= {
  "renderInterstitial": function(){
  },
  "renderAnchor": function() {
  },
  "init": function() {
  },
  "renderAds": function() {
  },
}

window.addEventListener("load", ()=> {
  // ***** consolel0g *****
  let xiframe = document.createElement('iframe');
  xiframe.style.display = 'none';
  document.body.appendChild(xiframe);
  consolel0g= xiframe.contentWindow.console.log;
});
