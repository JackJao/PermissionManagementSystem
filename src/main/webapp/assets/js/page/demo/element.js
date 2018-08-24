define('element', [
    'jquery',
	'zui',
	'bootbox',
    'doT',
    'chart',
	'common'
], function($,_,bootbox,doT) {
    var elementPage = {
        tmpl_content:doT.template([
            '<h1>背景色辅助样式</h1>',
           '<p class="with-padding bg-default">bg-default</p>',
            '<p class="with-padding bg-primary">bg-primary</p>',
            '<p class="with-padding bg-danger">bg-danger</p>',
            '<p class="with-padding bg-success">bg-success</p>',
            '<p class="with-padding bg-warning">bg-warning</p>',
            '<p class="with-padding bg-info">bg-info</p>',
            '<p class="with-padding bg-important">bg-important</p>',
            '<p class="with-padding bg-special">bg-special</p>',
             '<h1>图标</h1>',
            '<table class="table table-icons-example">',
                '<tbody><tr>',
                '<td>正常大小</td>',
                '<td><i class="icon icon-star"></i></td>',
                '<td><pre class="prettyprint prettyprinted"><code><span class="tag">&lt;i</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"icon icon-star"</span><span class="tag">&gt;&lt;/i&gt;</span></code></pre></td>',
                '</tr>',
                '<tr>',
                '<td><code>.icon-2x</code></td>',
                '<td><i class="icon icon-star icon-2x"></i></td>',
                '<td><pre class="prettyprint prettyprinted"><code><span class="tag">&lt;i</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"icon icon-star </span><em><span class="atv">icon-2x</span></em><span class="atv">"</span><span class="tag">&gt;&lt;/i&gt;</span></code></pre></td>',
                '</tr>',
                '<tr>',
                '<td><code>.icon-3x</code></td>',
                '<td><i class="icon icon-star icon-3x"></i></td>',
                '<td><pre class="prettyprint prettyprinted"><code id="code-1473168060527008"><span class="tag">&lt;i</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"icon icon-star </span><em><span class="atv">icon-3x</span></em><span class="atv">"</span><span class="tag">&gt;&lt;/i&gt;</span></code></pre></td>',
                '</tr>',
                '<tr>',
                '<td><code>.icon-4x</code></td>',
                '<td><i class="icon icon-star icon-4x"></i></td>',
                '<td><pre class="prettyprint prettyprinted"><code id="code-1473168063020009"><span class="tag">&lt;i</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"icon icon-star </span><em><span class="atv">icon-4x</span></em><span class="atv">"</span><span class="tag">&gt;&lt;/i&gt;</span></code></pre></td>',
               '</tr>',
                '<tr>',
                '<td><code>.icon-5x</code></td>',
                '<td><i class="icon icon-star icon-5x"></i></td>',
                '<td><pre class="prettyprint prettyprinted"><code id="code-1473168065253010"><span class="tag">&lt;i</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"icon icon-star </span><em><span class="atv">icon-5x</span></em><span class="atv">"</span><span class="tag">&gt;&lt;/i&gt;</span></code></pre></td>',
             '   </tr>',
            '</tbody></table>',
             '<br/>',
             '<table class="table table-icons-example">',
                '<tbody><tr>',
                '<td>不旋转</td>',
                '<td><i class="icon icon-2x icon-flag"></i></td>',
                '<td><pre class="prettyprint prettyprinted"><code id="code-1473167759873005"><span class="tag">&lt;i</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"icon icon-flag"</span><span class="tag">&gt;&lt;/i&gt;','</span></code></pre></td>',
                '</tr><tr>',
                '<td><code>.icon-rotate-90</code></td>',
                '<td><i class="icon icon-2x icon-flag icon-rotate-90"></i></td>',
                '<td><pre class="prettyprint prettyprinted"><code><span class="tag">&lt;i</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"icon icon-flag </span><em><span class="atv">icon-rotate-90</span></em><span class="atv">"</span><span class="tag">&gt;&lt;/i&gt;</span></code></pre></td>',
                '</tr>',
                '<tr>',
                '<td><code>.icon-rotate-180</code></td>',
                '<td><i class="icon icon-2x icon-flag icon-rotate-180"></i></td>',
                '<td><pre class="prettyprint prettyprinted"><code id="code-1473167759684004"><span class="tag">&lt;i</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"icon icon-flag </span><em><span class="atv">icon-rotate-180</span></em><span class="atv">"</span><span class="tag">&gt;&lt;/i&gt;</span></code></pre></td>',
                '</tr>',
                '<tr>',
                '<td><code>.icon-rotate-270</code></td>',
                '<td><i class="icon icon-2x icon-flag icon-rotate-270"></i></td>',
                '<td><pre class="prettyprint prettyprinted"><code id="code-1473167759537003"><span class="tag">&lt;i</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"icon icon-flag </span><em><span class="atv">icon-rotate-270</span></em><span class="atv">"</span><span class="tag">&gt;&lt;/i&gt;</span></code></pre></td>',
                '</tr>',
                '<tr>',
                '<td><code>.icon-flip-horizontal</code></td>',
                '<td><i class="icon icon-2x icon-flag icon-flip-horizontal"></i></td>',
                '<td><pre class="prettyprint prettyprinted"><code id="code-1473167759104002"><span class="tag">&lt;i</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"icon icon-flag </span><em><span class="atv">icon-flip-horizontal</span></em><span class="atv">"</span><span class="tag">&gt;&lt;/i&gt;</span></code></pre></td>',
                '</tr>',
                '<tr>',
                '<td><code>.icon-flip-vertical</code></td>',
                '<td><i class="icon icon-2x icon-flag icon-flip-vertical"></i></td>',
                '<td><pre class="prettyprint prettyprinted"><code id="code-1473167758484001"><span class="tag">&lt;i</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"icon icon-flag </span><em><span class="atv">icon-flip-vertical</span></em><span class="atv">"</span><span class="tag">&gt;&lt;/i&gt;</span></code></pre></td>',
                '</tr>',
            '</tbody></table>',
              '<i class="icon icon-spin icon-spinner-snake"></i> &nbsp; ',
                '<i class="icon icon-spin icon-spinner-indicator"></i> &nbsp; ',
                '<i class="icon icon-spin icon-circle-o-notch"></i> &nbsp; ',
                '<i class="icon icon-spin icon-cog"></i> &nbsp; ',
                '<i class="icon icon-spin icon-refresh"></i> &nbsp; ',
                '<i class="icon icon-spin icon-spinner"></i>',
                '<pre class="prettyprint prettyprinted"><code id="code-1473167895610007"><span class="tag">&lt;i</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"icon icon-spin icon-spinner-snake"</span><span class="tag">&gt;&lt;/i&gt;</span></code></pre>',
                '<pre class="prettyprint prettyprinted"><code id="code-1473167895347006"><span class="tag">&lt;i</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"icon icon-spin icon-spinner-indicator"</span><span class="tag">&gt;&lt;/i&gt;</span></code></pre>',
                '<pre class="prettyprint prettyprinted"><code><span class="tag">&lt;i</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"icon icon-spin icon-circle-o-notch"</span><span class="tag">&gt;&lt;/i&gt;</span></code></pre>',
                '<pre class="prettyprint prettyprinted"><code id="code-1473168334482014"><span class="tag">&lt;i</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"icon icon-spin icon-cog"</span><span class="tag">&gt;&lt;/i&gt;</span></code></pre>',
                '<pre class="prettyprint prettyprinted"><code id="code-1473168208442012"><span class="tag">&lt;i</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"icon icon-spin icon-refresh"</span><span class="tag">&gt;&lt;/i&gt;</span></code></pre>',
                '<pre class="prettyprint prettyprinted"><code id="code-1473168208177011"><span class="tag">&lt;i</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"icon icon-spin icon-spinner"</span><span class="tag">&gt;&lt;/i&gt;</span></code></pre>'
        ].join(''))(),
         tmpl_breadcrumb:doT.template([
            '<ul class="breadcrumb">',
                '<li><i class="icon-location-arrow icon-muted"></i></li>',
                '<li><a href="#">UI元素</a></li>',
                '<li class="active">UI元素</li>',
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
            
        }
    }
    
    madmin.element=elementPage;
    elementPage._init();
    return elementPage;
});