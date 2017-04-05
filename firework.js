/*
* @Author: SGQ
* @Date:   2017-04-03 16:58:36
* @Last Modified by:   SGQ
* @Last Modified time: 2017-04-03 17:20:53
*/

function(win,el){
	var canvas = document.querySelector(el);
	ctx = canvas.getContext('2d');
	canvas.width = win.innerWidth;
	canvas.height = win.innerHeight;

	var config = {//基础设置
		circleArr:[],//鼠标圆圈
		lineArr:[],//烟花射线
		boomArr:[],//烟花散射点
		curHue: 170,//基础颜色值
		curBrightness:rand(50,80)
	};
	var mouse={
		x:canvas.width/2,
		y:canvas.height/2,
		status:3 //鼠标状态1(mousedown) 2(mousemove) 3(mousup)
	}

	function rand(min,max){//获取随机数
		if (arguments.length<2) {
			var max = min;
			return Math.random()*max;
		}else{
			return Math.random()*(max-min)+min;
		}
	}
	//鼠标圆圈
	function Circle(x,y){
		this.x=x;
		this.y=y;
		this.r=5;
		this.vr=0.5;
		this.hue=config.curHue;
		this.brightness=rand(40,60);
	}
	Circle.prototype.draw = function() {
			// body...
		ctx.beginPath();
		ctx.lineWidth = 1;
		ctx.strokeStyle = 'hsla('+this.hue+',100%,'+this.brightness+'%,1)';
		ctx.shadowBlur = 1;
		ctx.shadowColor = 'white';
		ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
		ctx.stroke();
	}
	function
}
