
require(["../../conf/config.js"], function(){
	require(["jquery","swiper","common"], function($, Swiper, com){
		console.log("加载页面");
		com.randomColor()
	})
})