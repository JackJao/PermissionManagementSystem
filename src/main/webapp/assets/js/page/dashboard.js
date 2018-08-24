define('dashboard', [
    'jquery',
	'zui',
	'bootbox',
    'doT',
	'common'
], function($,_,bootbox,doT) {
    var dashboard = {
        tmpl_content:doT.template([
            '<div>',
                '<h1>MINI后台管理</h1>',
                '<h2>版本：Beta V0.1.0</h2>',
                '<hr/>',
                '<h2>项目说明</h2>',
            '</div>'
        ].join(''))(),
        tmpl_breadcrumb:doT.template([
            '<ul class="breadcrumb">',
                '<li><i class="icon-location-arrow icon-muted"></i></li>',
                '<li class="active">控制台</li>',
            '</ul>'
        ].join(''))(),
        _init:function(){
            this._render();
            this._initEvent();
             if(madmin.IsMask){
                madmin.tool.loadcomplete();
            }
        },_render:function(){
            $('#main').html(this.tmpl_content).css('padding','20px 40px');
            $('#site_breadcrumb').html(this.tmpl_breadcrumb);
        },_initEvent:function(){
            
        }
    }
    madmin.dashboard=dashboard;
    dashboard._init();
    return dashboard;
});