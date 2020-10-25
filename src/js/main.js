import {siteLoader} from './loader';

var sl = new siteLoader();

document.addEventListener("DOMContentLoaded", function() {
  sl.init();
  document.querySelector('a.play').addEventListener("click", function(e){
    document.querySelector('video.video').play()
    document.querySelector('a.play').remove()
    e.preventDefault();
  });
}, false);

