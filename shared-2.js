//基本制御
/*font size*/
var fontsizeA='76%';var fontsizeB='x-small';var fontsizeC='small';
	var vNum = navigator.appVersion.charAt(0);
	var bName = navigator.appName.charAt(0);
	document.writeln('<STYLE TYPE="text/css"><!--');
	if(navigator.appVersion.indexOf('Mac') > -1){basefontsize = fontsizeA;}
	else if(navigator.userAgent.indexOf('MSIE 5')>-1){basefontsize = fontsizeB;}
	else if(navigator.userAgent.indexOf('MSIE 6')>-1){basefontsize = fontsizeB;}
	else if(navigator.userAgent.indexOf('MSIE 7')>-1){basefontsize = fontsizeC;}
	else if(navigator.userAgent.indexOf('MSIE 8')>-1){basefontsize = fontsizeA;}
	else if(navigator.userAgent.indexOf('MSIE 9')>-1){basefontsize = fontsizeA;}
	else if(navigator.userAgent.indexOf('MSIE 10')>-1){basefontsize = fontsizeA;}
	else{basefontsize = bName == "M" ? fontsizeB : fontsizeA ;}
	document.writeln('body,th,td{font-size:'+basefontsize+';}');
	document.writeln('--></STYLE>');



/*グローバルメニュー*/
var ddmenu = {
	over:function(id){
		document.getElementById("ddmenu"+id).style.display = "block";
		},
	out:function(id){
		document.getElementById("ddmenu"+id).style.display = "none";
		}
	}


/*スマホ版へリンク*/
$(function(){
	var agent = navigator.userAgent;
	if(agent.search(/iPhone/) != -1 || agent.search(/iPod/) != -1 || agent.search(/Android/) != -1){
		if(document.cookie.indexOf('ngzk_smph_sw')>-1){
			$('#container').before('<div id="backsmph"><a href="javascript:goSMPH();">Smart Phone版</a></div>');
			}
		}
	});
function goSMPH(){
	document.cookie='ngzk_smph_sw=1; expires=Sat, 1-Jan-2000 00:00:00 GMT; domain=nogizaka46.com; path=/;';
	window.location.href=window.location.href;
	}

/*google+1ボタン*/
  window.___gcfg = {lang: 'ja'};

  (function() {
	var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
	po.src = 'plusone.js'/*tpa=https://apis.google.com/js/plusone.js*/;
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();



/*PD jump*/
function jumpPD(url){if(url!=''){location.href=url;}}



/*モーダル*/
$(document).ready(function(){
	/*showmembersにメンバー一覧読込み*/
	if(document.getElementById('showmembers')){
		$("#dialog").load("../memberlist.php #mordalMemberList");
		}
	/*TOP大特集*/
	if(document.getElementById('idxspecial')){
		/*TOP大特集*/
		$.getScript("https://www.nogizaka46.com/js/imgslide.js",function(){topbanner.setup();});
		}
	/*twitter*/
	if(document.getElementById('recentTweets')){
		$("<script>").attr('type', 'text/javascript').attr('src', twitterapiurl).attr('charset', 'UTF-8').appendTo($("head"));
		}
	
	/*モーダルモジュール*/
	$('a[name=modal]').click(function(e){
		e.preventDefault();
		var id = $(this).attr('href');
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
		$('#mask').css({'width':maskWidth,'height':maskHeight});
		$('#mask').fadeIn(400);
		$('#mask').fadeTo("fast",0.8);
		var winH = $(window).height();
		var winW = $(window).width();
		$(id).css('top',  winH/2-$(id).height()/2);
		$(id).css('left', winW/2-$(id).width()/2);
		//transition effect
		$(id).fadeIn(1000);
		});
	$('.window .close').click(function(e){
		e.preventDefault();
		$('#mask, .window').hide();
		});
	//if mask is clicked
	$('#mask').click(function () {
		$(this).hide();
		$('.window').hide();
		});
	});


/*twitter*/
var twitterapiurl="http://api.twitter.com/1/statuses/user_timeline/sharer.php?u=http%3A%2F%2Fblog.nogizaka46.com%2Fsayuri.inoue%2F%3Fd%3D20150406&t=";
function twittercallback(json){
	maxli=3; //表示件数
	maxletter=65; //「…」処理する文字数
	tmpsrc='';
	for(var i=0;i<maxli;i++){
		if(json[i]!=undefined){
			tt=json[i]['created_at'].split(' ');
			tweettime=new Date(tt[1]+' '+tt[2]+','+tt[tt.length-1]);
			tweettxt=json[i]['text'].length>maxletter?json[i]['text'].substr(0,maxletter-1)+'…':json[i]['text'];
			tmpsrc+='<li'+(i==0?' class="noborder"':'')+'><a href="http://twitter.com/#!/nogizaka46" target="_blank"><span class="date">'+tweettime.getFullYear()+'.'+(tweettime.getMonth()+1)+'.'+tweettime.getDate()+'</span><span class="txt">'+tweettxt+'</span></a></li>';
		}
		}
	$('#recentTweets').html(tmpsrc);
	}
