define('notify', [
    'jquery',
	'zui',
	'bootbox',
    'doT',
    'toastr',
	'common'
], function($,_,bootbox,doT,toastr) {
    var notifyPage = {
        tmpl_content:doT.template([
            '<h1><a href="http://codeseven.github.io/toastr/demo.html" target="_blank"> Toastr.js</a></h1>',
            '<input id="btnSuccess" type="button" class="btn btn-success" value="Success"/> &nbsp; ',
            '<input id="btnInfo" type="button" class="btn btn-info" value="Info"/> &nbsp; ',
            '<input id="btnWaring" type="button" class="btn btn-warning" value="Warning"/> &nbsp; ',
            '<input id="btnError" type="button" class="btn btn-danger" value="Error"/>',
            '<br/><h1><a href="http://zui.sexy/#javascript/messager" target="_blank"> ZUI Messager</a></h1>',
            '<input id="btnSuccess1" type="button" class="btn btn-success" value="Success"/> &nbsp; ',
            '<input id="btnInfo1" type="button" class="btn btn-info" value="Info"/> &nbsp; ',
            '<input id="btnWaring1" type="button" class="btn btn-warning" value="Warning"/> &nbsp; ',
            '<input id="btnError1" type="button" class="btn btn-danger" value="Error"/> &nbsp; ',
            '<input id="btnSuccessEmail" type="button" class="btn btn-success" value="自定义回调"/> &nbsp; ',
        ].join(''))(),
         tmpl_breadcrumb:doT.template([
            '<ul class="breadcrumb">',
                '<li><i class="icon-location-arrow icon-muted"></i></li>',
                '<li><a href="#">Notify&Loading</a></li>',
                '<li class="active">Notify</li>',
            '</ul>'
        ].join(''))(),
        _init:function(){
            this._render();
            this._initEvent();
             if(madmin.IsMask){
                madmin.tool.loadcomplete();
            }
        },_render:function(){
            $('#site_breadcrumb').html(this.tmpl_breadcrumb);
             $('#main').html(this.tmpl_content).css('padding','20px 40px');
        },_initEvent:function(){
            toastr.options={"progressBar": true,"closeButton": true};
            $('#btnSuccess').bind('click',function(e){
                toastr.success('Success！');
            })
             $('#btnInfo').bind('click',function(e){
                toastr.info('Info!');
            })
             $('#btnWaring').bind('click',function(e){
                toastr.warning('Warning!');
            })
             $('#btnError').bind('click',function(e){
                toastr.error('Error!');
            })

              $('#btnSuccess1').bind('click',function(e){
                new $.zui.Messager('这是一个浮动消息。', {
                    icon: 'check-circle',
                    type: 'success',
                    placement: 'top-right'
                }).show();
            })
             $('#btnInfo1').bind('click',function(e){
               new $.zui.Messager('这是一个浮动消息。', {
                    icon: 'info-sign',
                    type: 'info',
                    placement: 'top-right'
                }).show();
            })
             $('#btnWaring1').bind('click',function(e){
               new $.zui.Messager('这是一个浮动消息。', {
                   icon: 'exclamation-sign',
                    type: 'warning',
                    placement: 'top-right'
                }).show();
            })
             $('#btnError1').bind('click',function(e){
                new $.zui.Messager('这是一个浮动消息。', {
                  icon: 'warning-sign',
                    type: 'danger',
                    placement: 'top-right'
                }).show();
            })
             $('#btnSuccessEmail').bind('click',function(e){
              new $.zui.Messager('你的邮件已成功发送。', {
                    type: 'success',
                    close: true,  icon: 'check-circle',
                     placement: 'top-right',
                    actions: [{
                        name: 'undo',
                        icon: 'undo',
                        text: '撤销',
                        action: function() {  // 点击该操作按钮的回调函数
                             new $.zui.Messager('你点击了撤销按钮。', {
                                icon: 'info-sign',
                                type: 'info',
                                placement: 'top-right'
                            }).show();
                        }
                    }]
                }).show();
            })
        }
    }
    
    madmin.notify=notifyPage;
    notifyPage._init();
    return notifyPage;
});