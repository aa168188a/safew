document.write('<link rel="stylesheet" type="text/css" href="'+CopyRightcss+'">');

var _sdgCopyrightLink = 'http://www.shengqugames.com/cn/shulongzs';
var _sdgCopyrightHtml = '';
_sdgCopyrightHtml +=''

+'<div class="SDGCOPYRIGHT-wrap20130425">' 
+'	<div id="SDGCOPYRIGHT">'
//盛趣游戏LOGO和合作媒体LOGO
+'		<div class="SDGCOPYRIGHT-logo">'
+'			<a href="http://www.shengqugames.com/" target="_blank" class="SDGCOPYRIGHT-logo1" style="margin-left: 120px;">盛趣游戏</a>'
+'			<a href="http://dn.sdo.com" target="_blank">'
+'				<img src="" alt="">'
+'			</a>'
+'		</div>'
//版权主体信息
+'		<div class="SDGCOPYRIGHT-con">'

//每个项目组自己的版权号
+'			<p>'
+'				<span class="SDGCOPYRIGHT-pr3">新出审字[2010]104号</span>'
+'				文网进字[2009]011号'
+'			</p>'

//公司统一的版权号
+'      <div class="HJ-1" id ="containerDiv"></div>'
+'		</div>'
//右侧网络警察3个图标
+'		<div class="SDGCOPYRIGHT-priv">'
+'        <div class="HJ-2" id ="pxDiv"></div>'
+'		</div>'

+'	</div>'
+'</div>'

document.write(_sdgCopyrightHtml);

//统一官网标签
(function(d, s) {
   var js = d.createElement(s);
   var sc = d.getElementsByTagName(s)[0];
   js.src="https://static.web.sdo.com/copyright/js/copyrightcommon_new.js";
   sc.parentNode.appendChild(js);
}(document, "script"));

(function(d, s) {
   var js = d.createElement(s);
   var sc = d.getElementsByTagName(s)[0];
   js.src="https://static.web.sdo.com/copyright/js/pxcommon.js";
   sc.parentNode.appendChild(js);
}(document, "script"));
