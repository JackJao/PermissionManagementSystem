define('formvalidate', [
    'jquery',
	'zui',
	'bootbox',
    'doT',
    'tool',
	'common'
], function($,_,bootbox,doT,tool) {
    var formValidatePage = {
        tmpl_content:doT.template([
            '<div class="container">',
                '<div class="row">',
                    '<form id="fromDemo" class="form-horizontal" >',
                        '<legend>表单验证</legend>',
                        '<div class="form-group">',
                            '<label class="col-md-2 control-label" for="notnull">非空</label>',
                            '<div class="col-md-4">',
                                '<input type="text" name="notnull" value="" class="form-control required"> ',
                            '</div><code>class="required"</code>',
                        '</div>',
                         '<div class="form-group">',
                            '<label class="col-md-2 control-label" for="maxLength">字符串长度（<= 6）</label>',
                            '<div class="col-md-4">',
                                '<input type="text" name="maxLength" value="" vtype="maxLength:6" class="form-control required"> ',
                            '</div><code>class="required" vtype="maxLength:6"</code>',
                        '</div>',
                         '<div class="form-group">',
                            '<label class="col-md-2 control-label" for="minLength">字符串长度（>= 2）</label>',
                            '<div class="col-md-4">',
                                '<input type="text" name="minLength" value="" vtype="minLength:2" class="form-control required"> ',
                            '</div><code>class="required" vtype="minLength:2"</code>',
                        '</div>',
                         '<div class="form-group">',
                            '<label class="col-md-2 control-label" for="rangeLength">字符串长度（2-6）</label>',
                            '<div class="col-md-4">',
                                '<input type="text" name="rangeLength" value="" vtype="rangeLength:2,6" class="form-control required"> ',
                            '</div><code>class="required" vtype="rangeLength:2,6"</code>',
                        '</div>',
                       '<div class="form-group">',
                            '<label class="col-md-2 control-label" for="email">Email</label>',
                            '<div class="col-md-4">',
                                '<input type="text" name="email" value="" vtype="email" class="form-control required"> ',
                            '</div><code>class="required" vtype="email"</code>',
                        '</div>',
                          '<div class="form-group">',
                            '<label class="col-md-2 control-label" for="URL">URL</label>',
                            '<div class="col-md-4">',
                                '<input type="text" name="URL" value="" vtype="url" class="form-control required"> ',
                            '</div><code>class="required" vtype="url"</code>',
                        '</div>',
                          '<div class="form-group">',
                            '<label class="col-md-2 control-label" for="int">数字(int)</label>',
                            '<div class="col-md-4">',
                                '<input type="text" name="int" value="" vtype="int" class="form-control required"> ',
                            '</div><code>class="required" vtype="int"</code>',
                        '</div>',
                          '<div class="form-group">',
                            '<label class="col-md-2 control-label" for="float">数字(float)</label>',
                            '<div class="col-md-4">',
                                '<input type="text" name="float" value="" vtype="float" class="form-control required"> ',
                            '</div><code>class="required" vtype="float"</code>',
                        '</div>', 
                         '<div class="form-group">',
                            '<label class="col-md-2 control-label" for="range">数字范围（0-100）</label>',
                            '<div class="col-md-4">',
                                '<input type="text" name="range" value="" vtype="range:0,100" class="form-control required"> ',
                            '</div><code>class="required" vtype="range:0,100"</code>',
                        '</div>',
                           '<div class="form-group">',
                            '<label class="col-md-2 control-label" for="regex">中文（自定义正则）</label>',
                            '<div class="col-md-4">',
                                '<input type="text" name="regex" value="" vtype="regex:^[\\u4e00-\\u9fa5]+$" class="form-control required"> ',
                            '</div><code>class="required" vtype="regex:^[\\u4e00-\\u9fa5]+$"</code>',
                        '</div>',
                        '<div class="form-group">',
                            '<div class="col-md-offset-2 col-md-10">',
                                '<input type="button" id="submit" class="btn btn-primary" value="提交" data-loading="稍候..."> <input type="hidden" name="type" id="type" value="article">',
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
    
    madmin.formvalidate=formValidatePage;
    formValidatePage._init();
    return formValidatePage;
});