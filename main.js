var intro = `
  <div id='intro'>
    <img src='cover.png'>
  </div>
`

$('body').html(intro);

var videostr = "<video id='mov' src='fathersday.mp4'></video>";
var videoid = "mov";

Mousetrap.bind('space', function() {
  sequence();
});

function sequence() { 
  var value1 = 15;
  var value2 = 15;
  var value3 = 15;
  var value4 = 15;
  
  //hide intro text
  $('body').html("<div id='bg'></div>");

  playVideo(videostr, videoid, value1);

  setTimeout(function(){ 
    playVideo(videostr, videoid, value2);    
  }, (value1)*1000);

  setTimeout(function(){ 
    playVideo(videostr, videoid, value3);   
  }, (value1+value2)*1000);

  setTimeout(function(){ 
    playVideo(videostr, videoid, value4);   
  }, (value1+value2+value3)*1000);

  setTimeout(function(){ 
    $('body').html(intro);
  }, (value1+value2+value3+value4)*1000);

}

function playVideo(videostr, videoid, length) {
  //load first video onto screen
  $("#bg").html(videostr);
  var bucket = document.getElementById(videoid);
  var bucket_length, play_start, play_end;

  //get video duration 
  bucket.addEventListener('loadedmetadata', function() {
    bucket_length = bucket.duration;
    play_start = getRandInt(0, bucket_length - length);
    play_end = play_start + length;
    bucket.currentTime = play_start;
    bucket.play();
  });

  bucket.addEventListener("timeupdate", function(){
    if (this.currentTime > play_end) {
      this.pause();
    }
  });
}

function getRandInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

