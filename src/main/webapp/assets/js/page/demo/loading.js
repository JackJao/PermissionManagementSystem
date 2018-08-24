define('loading', [
    'jquery',
	'zui',
	'bootbox',
    'doT',
    'iosOverlay',
	'common'
], function($,_,bootbox,doT,_loading) {
    var loadingPage = {
        tmpl_content:doT.template([
            '<h1>Loading使用 <a href="http://taitems.github.io/iOS-Overlay/"> iosOverlay.js</a></h1>',
            '<button class="btn">loading</button> &nbsp; ',
            '<button class="btn">loading & update</button> &nbsp; ',
        ].join(''))(),
         tmpl_breadcrumb:doT.template([
            '<ul class="breadcrumb">',
                '<li><i class="icon-location-arrow icon-muted"></i></li>',
                '<li><a href="#">Notify&Loading</a></li>',
                '<li class="active">Loading</li>',
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
            this.$= $('#main').html(this.tmpl_content).css('padding','20px 40px');
        },_initEvent:function(){
           this.$.find('.btn:first').on('click',function(){
                madmin.tool.loading();
                window.setTimeout(function(){madmin.tool.loadcomplete()},3000); 
           })
           this.$.find('.btn:last').on('click',function(){
                madmin.tool.loading();
                window.setTimeout(function(){
                    madmin.tool.loadupdate();
                    window.setTimeout(function(){madmin.tool.loadcomplete()},1000); 
                },2000); 
           });
        }
    }
    
    madmin.loading=loadingPage;
    loadingPage._init();
    return loadingPage;
});