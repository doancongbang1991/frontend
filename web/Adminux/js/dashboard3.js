/*!
 * Adminux (http://maxartkiller.com)
 * Copyright 2017 The Adminux Author: Maxartkiller
 * purchase licence before use
 * You can not resale or modify without prior licences.
*/
"use strict";

/* Dashboard slider and audio plalyer js */
$('.flexslider').flexslider({
            animation: "slide",
            animationLoop: false,
            itemWidth: 240,
            itemMargin: 26,
             controlNav: false
});


        
/*Audio player script start here */
     function playit(){
var music = document.getElementById('music'); // id for audio element
          var duration = music.duration; // Duration of audio clip, calculated here for embedding purposes
          var pButton = document.getElementById('pButton'); // play button
          var playhead = document.getElementById('playhead'); // playhead
          var timeline = document.getElementById('timeline'); // timeline
          var voice = document.getElementById('volume'); // voice
          var eject = document.getElementById('eject'); // close

        // timeline width adjusted for playhead
        var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;

        // play button event listenter
        pButton.addEventListener("click", play);

        // timeupdate event listener
        music.addEventListener("timeupdate", timeUpdate, false);

        // makes timeline clickable
        timeline.addEventListener("click", function(event) {
            moveplayhead(event);
            music.currentTime = duration * clickPercent(event);
        }, false);

        
        voice.addEventListener("click", function(event) {
            this.classList.toggle('on');
             event = event || window.event;
            music.muted = !music.muted;
             event.preventDefault();
        }, false);

         // stop  button event listenter
        eject.addEventListener("click", function(){
            music.pause();
            music.currentTime = 0;
        });
         
         
        // returns click as decimal (.77) of the total timelineWidth
        function clickPercent(event) {
            return (event.clientX - getPosition(timeline)) / timelineWidth;
        }

        // makes playhead draggable
        playhead.addEventListener('mousedown', mouseDown, false);
        window.addEventListener('mouseup', mouseUp, false);

        // Boolean value so that audio position is updated only when the playhead is released
        var onplayhead = false;

        // mouseDown EventListener
        function mouseDown() {
            onplayhead = true;
            window.addEventListener('mousemove', moveplayhead, true);
            music.removeEventListener('timeupdate', timeUpdate, false);
        }

        // mouseUp EventListener
        // getting input from all mouse clicks
        function mouseUp(event) {
            if (onplayhead == true) {
                moveplayhead(event);
                window.removeEventListener('mousemove', moveplayhead, true);
                // change current time
                music.currentTime = duration * clickPercent(event);
                music.addEventListener('timeupdate', timeUpdate, false);
            }
            onplayhead = false;
        }
        // mousemove EventListener
        // Moves playhead as user drags
        function moveplayhead(event) {
            var newMargLeft = event.clientX - getPosition(timeline);

            if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
                playhead.style.width = newMargLeft + "px";
            }
            if (newMargLeft < 0) {
                playhead.style.width = "0px";
            }
            if (newMargLeft > timelineWidth) {
                playhead.style.width = timelineWidth + "px";
            }
        }

        // timeUpdate
        // Synchronizes playhead position with current point in audio
        function timeUpdate() {
            var playPercent = timelineWidth * (music.currentTime / duration);
            playhead.style.width = playPercent + "px";
            if (music.currentTime == duration) {
                pButton.className = "";
                pButton.className = "play btn btn-round btn-success btn-lg";
            }
        }

        //Play and Pause
        function play() {
            // start music
            if (music.paused) {
                music.play();
                // remove play, add pause
                pButton.className = "";
                pButton.className = "pause btn btn-round btn-danger btn-lg";
            } else { // pause music
                music.pause();
                // remove pause, add play
                pButton.className = "";
                pButton.className = "play  btn btn-round btn-success btn-lg";
            }
        }

        // Gets audio file duration
        music.addEventListener("canplaythrough", function() {
            duration = music.duration;
        }, false);

        // getPosition
        // Returns elements left position relative to top-left of viewport
        function getPosition(el) {
            return el.getBoundingClientRect().left;
        }


     }
/*Audio player script ends here */



$(".playnow").on("click",function(){
   $("body").addClass("player-bottom");
   $(".audioplayer").addClass("show");  
     playit()
    
});

$(".eject").on("click",function(){
   $("body").removeClass("player-bottom");
   $(".audioplayer").removeClass("show");    
    
});


