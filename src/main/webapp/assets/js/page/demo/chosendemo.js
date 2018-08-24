define('chosendemo', [
    'jquery',
	'zui',
	'bootbox',
    'doT',
    'chosen',
    'chosenicons',
	'common'
], function($,_,bootbox,doT) {
    var chosendemoPage = {
        tmpl_content:doT.template([
            '<br>',
            '<div class="example">',
                '<div class="row">',
                    '<div class="col-md-6">',
                    '<select data-placeholder="选择一个宠物..." class="chosen-select form-control" tabindex="2">',
                        '<option value=""></option>',
                        '<option value="cat">小猫</option>',
                        '<option value="fish">金鱼</option>',
                        '<option value="dragon">龙</option>',
                        '<option value="mammoth">猛犸</option>',
                        '<option value="gollum">咕噜</option>',
                    '</select>',
                    '</div>',
                    '<div class="col-md-6">',
                    '<select data-placeholder="选择一些爱吃的水果..." class="chosen-select form-control" tabindex="2" multiple="">',
                        '<option value="strawberries">草莓</option>',
                        '<option value="apple">苹果</option>',
                        '<option value="orange">橙子</option>',
                        '<option value="cherry">樱桃</option>',
                        '<option value="banana">香蕉</option>',
                        '<option value="figs">无花果</option>',
                    '</select>',
                    '</div>',
                '</div>',
                '</div>',
                '<br>',
                '<div class="example">',
                '<form>',
                    '<select class="chosen-icons form-control" name="chosenIcons" id="chosenIcons" data-value=""></select>',
                '</form>',
                '</div>'
        ].join(''))(),
         tmpl_breadcrumb:doT.template([
            '<ul class="breadcrumb">',
                '<li><i class="icon-location-arrow icon-muted"></i></li>',
                '<li><a href="#">Form</a></li>',
                '<li class="active">Chosen</li>',
            '</ul>'
        ].join(''))(),
        _init:function(){
             madmin.common.loadCss('assets/js/zui/lib/chosen/chosen.css');
             madmin.common.loadCss('assets/js/zui/lib/chosenicons/zui.chosenicons.css');
            this._render();
            this._initEvent();
             if(madmin.IsMask){
                madmin.tool.loadcomplete();
            }
        },_render:function(){
            $('#site_breadcrumb').html(this.tmpl_breadcrumb);
            this.$ = $('#main').html(this.tmpl_content).css('padding', '0px');
         
            if($.fn.chosen) $('.chosen-select').chosen({
                allow_single_deselect: true,
                search_contains: true
            });

            if($.fn.chosenIcons) $('#chosenIcons').chosenIcons();
                
        },_initEvent:function(){
            
        }
    }
    
    madmin.chosendemo=chosendemoPage;
    chosendemoPage._init();
    return chosendemoPage;
});