requirejs.config({
	baseUrl:"./js",//配置基础路径
	//urlArgs:"v=1.2.0",//对所有的js文件加版本信息
	paths:{
		jquery:"lib/jquery.min",//起别名
		my97:"My97DatePicker/WdatePicker"
	},/*,
    shim:{ //如果js文件不支持AMD
        'iscrollProbe': {
             exports: 'iscrollProbe'
         }
    }*/
    shim:{ //如果js文件不支持AMD;//exports//输出
        'my97': {
             exports: 'WdatePicker'
         }
    }
});


//requirejs.config({
//	baseUrl:"./js",//配置基础路径
//	//urlArgs:"v=1.2.0",//对所有的js文件加版本信息
//	paths:{
//		jquery:"lib/jquery.min",//起别名
//		my97:"My97DatePicker/WdatePicker"
//	},
//  shim:{ //如果js文件不支持AMD;//exports//输出
//      'my97': {
//           exports: 'WdatePicker'
//       }
//  }
//});


requirejs(["jquery"],function($){
	
$.ajax({
			type:"get",
			url:"json/bg.json",
			success:function(json){
				 $('.imgtop').css('background-image',"url(img/images/bz"+json.result+".jpg)");
			},
		   error:function(a,b,c){
				alert("系统繁忙，请稍后重试!");
			}
		});
	
$.ajax({
			type:"get",
			url:"json/notel.json",
			success:function(json){
				for(var i in json)
				{
						var str="<li><a href=\"##\">"+json[i].content+"<span>"+json[i].dat+"</span></a></li>";
						$('.ul-left li:first').before(str);
				}
			},
						error:function(a,b,c){
				alert("系统繁忙，请稍后重试!");
			
		}
});
$.ajax({
			type:"get",
			url:"json/noter.json",
			success:function(json){
				for(var i in json)
				{
						var str="<li><a href=\"##\">"+json[i].content+"<span>"+json[i].dat+"</span></a></li>";
						$('.ul-right li:first').before(str);
				}
			},
			error:function(a,b,c){
				alert("系统繁忙，请稍后重试!");
		}
});
});



//导航
requirejs(["jquery"],function($){
	var lisNode=$('.nav li');
	var navLine=$('.current');
	var navNode=$('.nav');
	var currentNode=$('.nav .index')
	lisNode.mouseenter(function(){
		var liX=$(this).position().left;
		navLine.stop().animate({left:liX+"px"},200);
	});
	navNode.mouseleave(function(){
		var liX=currentNode.position().left;
		navLine.stop().animate({left:liX+"px"},200);
	});
});

//图片选择
requirejs(['jquery'],function($){
	var lisNode=$('.imgtopul li');
	$('.imgselect').click(function(){
		$('.imglist').fadeIn();
	});
	$('.del').click(function(){
		$('.imglist').fadeOut();
	});
	$('.imgselect-right').click(function(){
//		var oldpos;
//	for(var i=0;i<lisNode.length;i++)
//	{
//		if(lisNode.eq(i).hasClass('toucur'))
//		{
//			oldpos=i;
//			break;
//		}
//	}
         var oldpos=$('.imgtop .toucur').index();
     	var nowpos;
     	nowpos=oldpos==lisNode.length-1?0:oldpos+1;
     	lisNode.eq(nowpos).addClass('toucur');
     	lisNode.eq(oldpos).removeClass('toucur');
     	getimg(oldpos,nowpos);
	})
	$('.imgselect-left').click(function(){
//		var oldpos;
//	for(var i=0;i<lisNode.length;i++)
//	{
//		if(lisNode.eq(i).hasClass('toucur'))
//		{
//			oldpos=i;
//			break;
//		}
//	}
        var oldpos=$('.imgtop .toucur').index();
     	var nowpos;
     	nowpos=oldpos==0?lisNode.length-1:oldpos-1;
     	lisNode.eq(nowpos).addClass('toucur');
     	lisNode.eq(oldpos).removeClass('toucur');
     	getimg(oldpos,nowpos);

	})
     lisNode.click(function(){
     	var nowpos=$(this).index();
     	var oldpos=$('.imgtop .toucur').index();
     	lisNode.eq(nowpos).addClass('toucur');
     	lisNode.eq(oldpos).removeClass('toucur');
     	getimg(oldpos,nowpos);
     })
     	function getimg(oldpos,nowpos){
     	var src=lisNode.eq(oldpos).find("img").attr('src');//获取旧图的img
     	var src2=lisNode.eq(nowpos).find("img").attr('src');//获取新图的img
     	var bsrc=src.substring(src.lastIndexOf('/')+1,src.lastIndexOf('.'));//截取旧图的文件名
        var bsrc2=src2.substring(src.lastIndexOf('/')+1,src2.lastIndexOf('.'));//截取新图的文件名
        var bImgSrc= bsrc.replace(/s/g,'');//将小图替换成大图
        var bImgSrc2= bsrc2.replace('s','');//将小图替换成大图
        var sd= $('.imgtop').css('background-image').replace(bImgSrc,bImgSrc2);//替换旧图
        $('.imgtop').css('background-image',sd);//赋值新图
          
     	}
     
     	
})

//下拉
requirejs(['jquery'],function($){
	
     	$('.head').mouseenter(function(){
     			$('.head-list').show();
     	})
     	$('.head').mouseleave(function(){
     			$('.head-list').hide();
     	})
})
//var lisNode=$('.nav li');
//var nowpos,oldpos;
//for(var i=0;i<lisNode.length;i++){
//	if(lisNode.eq(i).hasClass('index')){
//		oldpos=i;
//		break;
//	}
//}
//lisNode.mouseenter(function(){
////	$(this).addClass('currer');
////	$(this).siblings('.currer').removeClass('currer');
//
////nowpos=$(this).index();
////var movewidth=nowpos*82;
////$('.current').stop().animate({"left":movewidth+"px"},200);
//
//var movewidth=$(this).position().left;
//$('.current').stop().animate({"left":movewidth+"px"},200);
//
//
//})
//$('.nav').mouseleave(function(){
////	lisNode.eq(nowpos).addClass('currer');
////	lisNode.eq(nowpos).siblings('.currer').removeClass('currer');
////var oldmove=oldpos*82;
////	$('.current').stop().stop().animate({"left":oldmove+"px"},200);
//
//var movewidth=$('.nav .index').position().left;
//$('.current').stop().animate({"left":movewidth+"px"},200);
//})

/*公司公告*/
requirejs(['jquery'],function($){

		var upNode=$('.up');
		for(var i=0;i<upNode.length;i++)
	{
		upNode[i].onclick=(function(){
			var k=i;
            return function(){
            $('.content').eq(k).find('.table').slideDown();
            $('.content').eq(k).find('.main-tit dd:first').removeClass("ddcur");
            $('.content').eq(k).find('.up').hide();
            $('.content').eq(k).find('.down').show();
            }
		})(i);
	}
/*收起*/
var downNode=$('.down');
		for(var i=0;i<downNode.length;i++)
	{
		downNode[i].onclick=(function(){
			var k=i;
            return function(){
            $('.content').eq(k).find('.table').slideUp();
            $('.content').eq(k).find('.main-tit dd:first').addClass("ddcur");
            $('.content').eq(k).find('.up').show();
            $('.content').eq(k).find('.down').hide();
            }
		})(i);
	}
})

/*通讯录*/
requirejs(['jquery'],function($){

		$('.delph').click(function(){
			$('.main-phone').children('input:first').val('');
			
		})

})
/*报销日期插件*/
requirejs(['jquery','my97'],function($,WdatePicker){
	$('.con-bg').click(function(){
		
		WdatePicker({
			el:this,//指定一个控件节点或控件的ID,必须具有value或innerHTML属性
			skin:"twoer",//皮肤
			dateFmt:'yyyy-MM-dd',//日期显示格式
			//minDate:'1900-01-01 00:00:00',//最小日期
			//maxDate:'2099-12-31 23:59:59',//最大日期
		})
	});
	$('.r-date').click(function(){
		
		WdatePicker({
			el:this,//指定一个控件节点或控件的ID,必须具有value或innerHTML属性
			skin:"twoer",//皮肤
			dateFmt:'yyyy-MM-dd',//日期显示格式
			//minDate:'1900-01-01 00:00:00',//最小日期
			//maxDate:'2099-12-31 23:59:59',//最大日期
		})
	});
});