(function() {
	var myVideo = document.getElementById('myvideo');
	var bofang = document.getElementById('bofang');
	var zanting = document.getElementById('zanting');
	var big_bofang = document.getElementById('big_bofang');
	var control = document.getElementById('control');

	//视频全屏事件
	myVideo.ondblclick = function(){
		myVideo.webkitRequestFullscreen();
	}

	var allscreen = document.getElementById('allscreen');
	allscreen.onclick = function() {
		myVideo.webkitRequestFullscreen();
	}
	
	// 鼠标悬浮到视频上控制条出现
	var mouseover = document.getElementById('mouseover');
	mouseover.onmouseover = function(){
		control.style.display = "block";
	}
	mouseover.onmouseout = function () {
		control.style.display = "none";
	}
	
	// 播放暂停点击事件
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


	// 播放时间以及视频总时间的获取
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


	// 视频进度条的设置
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

 
	// 静音按键的点击事件
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


	// 加减声音按键以及声音控制条的设置
	var volume_add = document.getElementById('jiahao');
	var volume_minus = document.getElementById('jianhao');
	var volume_top = document.getElementById('volume_top');
	volume_add.onclick = function () {
		if(myVideo.volume < 1){
			myVideo.volume = myVideo.volume+ 0.1;
		}
		myVideo.onvolumechange=function(){
			volume_top.style.width = myVideo.volume*100 +"px";
		}
		volume_ball.style.left =740 + myVideo.volume*100 +"px";
	}	
	volume_minus.onclick = function () {
		if(myVideo.volume>=0.1){
			myVideo.volume=myVideo.volume-0.1
		}
		myVideo.onvolumechange=function(){
			volume_top.style.width = myVideo.volume*100 +"px";
		}
		volume_ball.style.left =740 + myVideo.volume*100 +"px";
	}
	var volume_bottom = document.getElementById('volume_bottom');
	var volume_ball = document.getElementById("volume_ball");
	var volume_top =document.getElementById('volume_top');
	volume_ball.ondragend = function(event) {
        var volume_length = event.clientX - volume_bottom.offsetLeft;
        var volume_percent = volume_length / volume_bottom.offsetWidth;
        if(volume_percent>0 && volume_percent<= 1){
        		volume_top.style.width = volume_percent * 100+ "px";
              	volume_ball.style.left = volume_percent * 100 +740+ "px";
                myVideo.volume = volume_percent;
            }
        
    }
    volume_ball.ondrag = function(event) {
            var volume_length = event.clientX - volume_bottom.offsetLeft;
            var volume_percent = volume_length / volume_bottom.offsetWidth;
            if(volume_percent>0 && volume_percent<= 1){
        		volume_top.style.width = volume_percent * 100+ "px";
              	volume_ball.style.left = volume_percent * 100 +740+ "px";
                myVideo.volume = volume_percent;
            }
	}
	volume_bottom.onmousedown = function(event) {
            var volume_length = event.clientX - volume_bottom.offsetLeft;
            var volume_percent = volume_length / volume_bottom.offsetWidth;
            volume_top.style.width = volume_percent * 100 + "px";
            var volume_length = event.clientX - volume_bottom.offsetLeft;
            var volume_percent = volume_length / volume_bottom.offsetWidth;
            volume_ball.style.left = volume_percent * 100+740+"px";
            myVideo.volume = volume_percent;
    }
    volume_top.onmousedown = function(event) {
            var volume_length = event.clientX - volume_bottom.offsetLeft;
            var volume_percent = volume_length / volume_bottom.offsetWidth;
            volume_top.style.width = volume_percent * 100 + "px";
            volume_ball.style.left =740 + myVideo.volume*100 +"px";
            var volume_length = event.clientX - volume_bottom.offsetLeft;
            var volume_percent = volume_length / volume_bottom.offsetWidth;
            volume_ball.style.left = volume_percent * 100+740+"px";
            myVideo.volume = volume_percent;
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