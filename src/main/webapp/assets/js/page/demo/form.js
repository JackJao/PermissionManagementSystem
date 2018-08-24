define('form', [
    'jquery',
	'zui',
	'bootbox',
    'doT',
    'tool',
	'common'
], function($,_,bootbox,doT,tool) {
    var formPage = {
        tmpl_content:doT.template([
            '<div class="container">',
                '<div class="row">',
                    '<form id="fromDemo" class="form-horizontal" >',
                        '<legend>表单提交</legend>',
                        '<div class="form-group">',
                            '<label class="col-md-2 control-label required" for="categories[]">类目</label>',
                            '<div class="col-md-4">',
                                '<select name="categories" id="categories" multiple="multiple" class="select-3 form-control chosen required">',
                                '<option value="2">/蝉知动态</option>',
                                '<option value="51">/asd</option>',
                                '</select>',
                            '</div>',
                        '</div>',
                        '<div class="form-group">',
                            '<label class="col-md-2 control-label" for="author">作者</label>',
                            '<div class="col-md-4">',
                                '<input type="text" name="author" id="author" value="demo" class="form-control required">',
                            '</div>',
                        '</div>',
                        '<div class="form-group">',
                        '<label class="col-md-2 control-label">创建日期</label>',
                        '<div class="col-md-4">',
                            '<div class="input-group">',
                                '<input type="text" name="date" id="date" value="2013-2-13" class="form-control required">',
                                '<span class="input-group-btn"> <button class="btn btn-default" type="button">田</button> </span>',
                            '</div>',
                        '</div>',
                        '</div>',
                        '<div class="form-group">',
                        '<label class="col-md-2 control-label" for="original">来源</label>',
                        '<div class="col-md-4">',
                            '<select name="original" id="original" class="form-control required">',
                            '<option value="1" selected="selected">原创</option>',
                            '<option value="0">转贴</option>',
                            '</select>',
                        '</div>',
                        '<div id="copyBox">',
                            '<div class="col-md-2"><input type="text" name="copySite" id="copySite" value="" class="form-control required" placeholder="来源网站"></div>',
                            '<div class="col-md-4"><input type="text" name="copyURL" id="copyURL" value="" class="form-control required" placeholder="来源URL"></div>',
                        '</div>',
                        '</div>',
                        '<div class="form-group">',
                        '<label class="col-md-2 control-label" for="title">标题</label>',
                        '<div class="col-md-10">',
                            '<input type="text" name="title" id="title" value="" class="form-control required" placeholder="">',
                        '</div>',
                        '</div>',
                        '<div class="form-group">',
                        '<label class="col-md-2 control-label" for="alias">英文别名</label>',
                        '<div class="col-md-10">',
                            '<div class="input-group">',
                            '<span class="input-group-addon">http://ideawr.com@</span>',
                            '<input type="text" name="alias" id="alias" value="" class="form-control required">',
                            '<span class="input-group-addon">.html</span>',
                            '</div>',
                        '</div>',
                        '</div>',
                        '<div class="form-group">',
                        '<label class="col-md-2 control-label" for="keywords">关键字</label>',
                        '<div class="col-md-10">',
                            '<input type="text" name="keywords" id="keywords" value="" vtype="minLength:10" class="form-control required">',
                        '</div>',
                        '</div>',
                        '<div class="form-group">',
                        '<label class="col-md-2 control-label" for="summary">摘要</label>',
                        '<div class="col-md-10">',
                            '<textarea name="summary" id="summary" rows="2" class="form-control required"></textarea>',
                        '</div>',
                        '</div>',
                        '<div class="form-group">',
                        '<label class="col-md-2 control-label">内容</label>',
                        '<div class="col-md-10">',
                            '<textarea name="content" id="content" rows="10" class="form-control required"></textarea>',
                        '</div>',
                        '</div>',
                        '<div class="form-group">',
                            '<label class="col-md-2 control-label">保存为</label>',
                            '<div class="col-md-10">',
                                '<label class="radio-inline"> <input type="radio" name="optionsRadios" value="option1" checked="" > 草稿 </label>',
                                '<label class="radio-inline"> <input type="radio" name="optionsRadios" value="option2"> 私人 </label>',
                                '<label class="radio-inline"> <input type="radio" name="optionsRadios" value="option2" class="required"> 公开 </label>',
                            '</div>',
                        '</div>',
                        '<div class="form-group">',
                            '<div class="col-md-offset-2 col-md-10">',
                                '<input type="button" id="submit" class="btn btn-primary" value="保存" data-loading="稍候..."> <input type="hidden" name="type" id="type" value="article">',
                            '</div>',
                        '</div>',
                    '</form>',
                '</div>',
            '</div>'
        ].join(''))(),
         tmpl_breadcrumb:doT.template([
            '<ul class="breadcrumb">',
                '<li><i class="icon-location-arrow icon-muted"></i></li>',
                '<li><a href="#">From</a></li>',
                '<li class="active">From表单</li>',
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
            $('#submit').click(function(){
                tool.validForm($('#fromDemo'));
            })
        }
    }
    
    madmin.form=formPage;
    formPage._init();
    return formPage;
});