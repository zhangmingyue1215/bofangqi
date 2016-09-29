(function() {
	var myVideo = document.getElementById('myvideo');
	var bofang = document.getElementById('bofang');
	var zanting = document.getElementById('zanting');
	var big_bofang = document.getElementById('big_bofang');
	var control = document.getElementById('control');
	var mouseover = document.getElementById('mouseover');
	mouseover.onmouseover = function(){
		control.style.display = "block";
	}
	mouseover.onmouseout = function () {
		control.style.display = "none";
	}
	
	bofang.onclick = function () {
		if(myVideo.paused){
			myVideo.play();
		}
		bofang.style.display = "none";
		zanting.style.display = "block";
		big_bofang.style.display = "none";

	}
	zanting.onclick = function () {
		if(myVideo.played){
			myVideo.pause();
		}
		bofang.style.display = "block";
		zanting.style.display = "none";
		big_bofang.style.display = "block";

	}
	big_bofang.onclick = function(){
		myVideo.play();
		bofang.style.display = "none";
		zanting.style.display = "block";
		big_bofang.style.display = "none";
	}

	var currentTime = document.getElementById('currentTime');
	var duration = document.getElementById("duration");
	var video_time = document.getElementById('video_time');
	myVideo.ontimeupdate = function () {
		
			currentTime = parseInt(myVideo.currentTime / 60) +":" +parseInt(myVideo.currentTime % 60);
			duration = parseInt(myVideo.duration / 60) +":" +parseInt(myVideo.duration % 60);
		
			video_time.innerHTML = currentTime + "/" + duration;

			var percent = myVideo.currentTime/myVideo.duration;
    		var pro_ball = document.getElementById("pro_ball"); 
       		pro_up.style.width = percent * 500 + "px";
        	pro_ball.style.left = percent *500 +150+ "px";
	}


	var pro_bottom = document.getElementById('pro_bottom');
	var pro_ball = document.getElementById("pro_ball");
	var pro_up =document.getElementById('pro_up');
	pro_ball.ondragend = function(event) {
        var pro_length = event.clientX - pro_bottom.offsetLeft;
        var pro_percent = pro_length / pro_bottom.offsetWidth;
        pro_up.style.width = pro_percent * 500+ "px";
        pro_ball.style.left = pro_percent * 500 +150+ "px";
        myVideo.currentTime = pro_percent * myVideo.duration;
        // console.log(pro_length);
        // console.log(pro_percent);
        
    }
    pro_ball.ondrag = function(event) {
            var pro_length = event.clientX - pro_bottom.offsetLeft;
            var pro_percent = pro_length / pro_bottom.offsetWidth;
            var pro_percent = myVideo.currentTime/myVideo.duration;
            pro_up.style.width = pro_percent * 500+ "px";
            pro_ball.style.left = pro_percent * 500+150+"px";
            myVideo.currentTime = pro_percent * myVideo.duration;
    }
	pro_bottom.onmousedown = function(event) {
            var pro_length = event.clientX - pro_bottom.offsetLeft;
            var pro_percent = pro_length / pro_bottom.offsetWidth;
            pro_up.style.width = pro_percent * 500 + "px";
            pro_ball.style.left = 150 + pro_percent * 500 + "px";
            myVideo.currentTime = pro_percent * myVideo.duration;
    }
    pro_up.onmousedown = function(event) {
            var pro_length = event.clientX - pro_bottom.offsetLeft;
            var pro_percent = pro_length / pro_bottom.offsetWidth;
            pro_up.style.width = pro_percent * 500 + "px";
            pro_ball.style.left = 150 + pro_percent * 500 + "px";
            myVideo.currentTime = pro_percent * myVideo.duration;
    }
	// function pro(){
 //                var cur=myVideo.currentTime;
 //                var dur=myVideo.duration;
 //                document.getElementById("progress").value=Math.round(cur/dur*100);
 //            }
	// myVideo.addEventListener("timeupdate",pro,false);

 

	var muted = document.getElementById('muted');
	muted.onclick = function () {
		
		myVideo.muted=true;	
		muted.style.display = "none";
		open.style.display = "block";
	}
	var open = document.getElementById('open');
	open.onclick = function () {
		myVideo.muted=false;
		muted.style.display = "block";
		open.style.display = "none";
	}

	var volume_up = document.getElementById('jiahao');
	var volume_down = document.getElementById('jianhao');
	var div_top = document.getElementById('div_top');
	volume_up.onclick = function () {
		if(myVideo.volume < 1){
			myVideo.volume = myVideo.volume+ 0.1;
		}
		myVideo.onvolumechange=function(){
			div_top.style.width = myVideo.volume*100 +"px";
		}
		div_ball.style.left =740 + myVideo.volume*100 +"px";
	}	
	volume_down.onclick = function () {
		if(myVideo.volume>=0.1){
			myVideo.volume=myVideo.volume-0.1
		}
		myVideo.onvolumechange=function(){
			div_top.style.width = myVideo.volume*100 +"px";
		}
		div_ball.style.left =740 + myVideo.volume*100 +"px";
	}
	var div_bottom = document.getElementById('div_bottom');
	var div_ball = document.getElementById("div_ball");
	var div_top =document.getElementById('div_top');
	div_ball.ondragend = function(event) {
        var div_length = event.clientX - div_bottom.offsetLeft;
        var div_percent = div_length / div_bottom.offsetWidth;
        if(div_percent>0 && div_percent<= 1){
        		div_top.style.width = div_percent * 100+ "px";
              	div_ball.style.left = div_percent * 100 +740+ "px";
                myVideo.volume = div_percent;
            }
        
    }
    div_ball.ondrag = function(event) {
            var div_length = event.clientX - div_bottom.offsetLeft;
            var div_percent = div_length / div_bottom.offsetWidth;
            if(div_percent>0 && div_percent<= 1){
        		div_top.style.width = div_percent * 100+ "px";
              	div_ball.style.left = div_percent * 100 +740+ "px";
                myVideo.volume = div_percent;
            }
	}
	div_bottom.onmousedown = function(event) {
            var div_length = event.clientX - div_bottom.offsetLeft;
            var div_percent = div_length / div_bottom.offsetWidth;
            div_top.style.width = div_percent * 100 + "px";
            var div_length = event.clientX - div_bottom.offsetLeft;
            var div_percent = div_length / div_bottom.offsetWidth;
            div_ball.style.left = div_percent * 100+740+"px";
            myVideo.volume = div_percent;
    }
    div_top.onmousedown = function(event) {
            var div_length = event.clientX - div_bottom.offsetLeft;
            var div_percent = div_length / div_bottom.offsetWidth;
            div_top.style.width = div_percent * 100 + "px";
            div_ball.style.left =740 + myVideo.volume*100 +"px";
            var div_length = event.clientX - div_bottom.offsetLeft;
            var div_percent = div_length / div_bottom.offsetWidth;
            div_ball.style.left = div_percent * 100+740+"px";
            myVideo.volume = div_percent;
    }


    //选择目录中视频观看
    var file_search = document.getElementById('file_search');
    var addlook = document.getElementById('addlook');
    addlook.onclick = function() {
    	var file = file_search.files[0];
    	var url = URL.createObjectURL(file);
    	myVideo.src = url;
    }
 
}(window))