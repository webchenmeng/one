;(function($){
	var mainIscroll = new IScroll('#main');
	init()
	function init(){
		bindSub();
	}

	function bindSub(){
		$('#sub').on('tap',function(){
			//判断页面中有没有选择   没选提示不能提交  选中就提交
			if($('input:checked').length!=0){
				//提交
				//调用弹出框插件
				$.dialog({
					title:"提示",
					contaier:"病退的退款申请为14天，建议您耐心等待,如果您仍有问题，请点击发送问题给客服，我们将会有客服与您联系",
					btn:['发送问题给客服','知道了']
				});
			}else{
				$.dialog({
					contaier:"请选择原因"
					
				});
				
			}
			
		})
	}
})(Zepto)