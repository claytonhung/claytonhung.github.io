// (function(){
//   var $=document.querySelector.bind(document),
//     $time=$('[role=time]'),
//     $hex=$('[role=hex]'),
//     $body=$('body'),
//     $canvas=$('canvas'),
//     $favicon=$('link[rel="shortcut icon"]')
// $notice=$('#notice')
// $dismiss=$('.dismiss');
// $dismiss.addEventListener('click',function(event){
//   $notice.style.opacity=0;
//   localStorage.setItem('dismissed',new Date().getTime());
// });
// var dismissedAMonthAgo=(new Date()- localStorage.getItem('dismissed'))>604800000;
// if((window.chrome&&dismissedAMonthAgo)||location.search.indexOf('resume')>0){
//     $notice.style.opacity=1;
//   }
// var formatTime=function(date){
//   return[date.getHours(),date.getMinutes(),date.getSeconds()].map(function(t){return t<10?'0'+ t:t;});
// };
// var swapFavicon=function(color){context=$canvas.getContext('2d');context.fillStyle=color;context.fillRect(0,0,16,16);$favicon.href=$canvas.toDataURL();$favicon.type="image/x-icon";};var tick=function(){var now=formatTime(new Date()),colourNow='#'+ now.join(''),timeNow=now.join(':');$time.innerHTML=timeNow;$hex.innerHTML=colourNow;$body.style.background=colourNow;document.title='New Tab - '+ timeNow;swapFavicon(colourNow);setTimeout(tick,1000);};tick();})();

        function startTime() {
            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
            m = checkTime(m);
            s = checkTime(s);
            document.getElementById('clock').innerHTML =
            h + ":" + m + ":" + s;
            var t = setTimeout(startTime, 500);
        }

        function checkTime(i) {
            if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
            return i;
        }