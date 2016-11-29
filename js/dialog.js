;(function($){
	$.dialog=function(opt){
		new Dialog(opt);
	}

	function Dialog(opt){
		var opt = $.extend({},{
				title:"",
				contaier:"",
				btn:['确定']
			},opt);
		var html = '<div class="mark"></div>'
					+'<div class="dialog">'
						+'<div class="_top"><h3>'+opt.title+'</h3><span class="close">X</span></div>'
						+'<div class="_cen"><p>'+opt.contaier+'</p></div>'
						+'<div class="_bottom">'
						+'</div>'
					+'</div>';
		
		$('#box').prepend($(html));
		$.each(opt.btn,function(i,val){
			$('<span>'+val+'</span>').appendTo('._bottom');
		})
		$('.close').on('tap',function(){
			close()
		})
		$('._bottom').find('span:contains("确定")').on('tap',close);
		$('._bottom').find('span:contains("知道了")').on('tap',close);
		
	}
	function close(){
		$('.mark').remove();
		$('.dialog').remove();
	}
})(Zepto)