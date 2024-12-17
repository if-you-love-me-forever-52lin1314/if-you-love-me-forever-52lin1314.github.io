/**
 * Functionality specific to Bushwick.
 *
 * Provides helper functions to enhance the theme experience.
 */


	//回顶部
	jQuery.noConflict();
	jQuery(function(){
        //首先将#back-to-top隐藏
        jQuery(".header-gotop").hide();
        //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
        jQuery(function () {
            jQuery(window).scroll(function(){
                if (jQuery(window).scrollTop()>100){
                    jQuery(".header-gotop").fadeIn();
                }
                else
                {
                    jQuery(".header-gotop").fadeOut();
                }
            });
            //当点击跳转链接后，回到页面顶部位置
            jQuery(".header-gotop").click(function(){
                jQuery('body,html').animate({scrollTop:0},500);
                return false;
            });
        });
    }); 

	//夜间模式
(function() {
    // 直接为body元素添加'night'类来应用夜间模式
    document.body.classList.add('night');
    // 可选：设置一个cookie来记住用户的偏好（如果需要的话）
    // document.cookie = "night=1;path=/";
    // 控制台输出日志信息（可选）
    console.log('夜间模式已开启（全天）');
})();

		}
	}
	//全屏切换
    (function () {
        //全屏 
        var viewFullScreen = document.getElementById("view-fullscreen");
        if (viewFullScreen) {
            viewFullScreen.addEventListener("click", function () {
                var docElm = document.documentElement;
                if (docElm.requestFullscreen) {//W3C
                    docElm.requestFullscreen();
                } else if (docElm.msRequestFullscreen) {//FireFox 
                    docElm = document.body; //overwrite the element (for IE)
                    docElm.msRequestFullscreen();
                } else if (docElm.mozRequestFullScreen) {//Chrome等
                    docElm.mozRequestFullScreen();
                } else if (docElm.webkitRequestFullScreen) {//IE11
                    docElm.webkitRequestFullScreen();
                }
            }, false);
        }
        //退出全屏 
        var cancelFullScreen = document.getElementById("cancel-fullscreen");
        if (cancelFullScreen) {
            cancelFullScreen.addEventListener("click", function () {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                }
            }, false);
        }
        // 事件监听
        var fullscreenState = document.getElementById("fullscreen-state");
        if (fullscreenState) {
            document.addEventListener("fullscreenchange", function () {
                fullscreenState.innerHTML = (document.fullscreenElement) ? "是" : "不是 ";
            }, false);
            document.addEventListener("msfullscreenchange", function () {
                fullscreenState.innerHTML = (document.msFullscreenElement) ? "是" : "不是 ";
            }, false);
            document.addEventListener("mozfullscreenchange", function () {
                fullscreenState.innerHTML = (document.mozFullScreen) ? "是" : "不是 ";
            }, false);
            document.addEventListener("webkitfullscreenchange", function () {
                fullscreenState.innerHTML = (document.webkitIsFullScreen) ? "是" : "不是 ";
            }, false);
        }
    })();

