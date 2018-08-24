define('bar', [
    'jquery',
	'zui',
	'bootbox',
    'doT',
    'chart',
	'common'
], function($,_,bootbox,doT) {
    var barPage = {
        tmpl_content:doT.template([
            '<canvas id="charBar" style="width:680px; height:300px;"></canvas>',
            '<br/>',
            '<canvas id="charLine"  style="width:680px; height:300px;"></canvas>'
        ].join(''))(),
         tmpl_breadcrumb:doT.template([
            '<ul class="breadcrumb">',
                '<li><i class="icon-location-arrow icon-muted"></i></li>',
                '<li><a href="#">Charts</a></li>',
                '<li class="active">柱形图&折线图</li>',
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
           
           var data = {
                labels: ["一月", "二月", "三月", "四月", "五月", "六月", "七月"],
                datasets: 
                [        
                    {
                        label: "蓝队",
                        color: '#EA644A',
                        fillColor: "rgba(220,220,220,0.2)",
                        strokeColor: "rgba(220,220,220,1)",
                        pointColor: "rgba(220,220,220,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: [65, 59, 80, 81, 56, 55, 40]
                    },
                    {
                        label: "绿队",
                        color: '#38B03F',
                        data: [28, 48, 40, 19, 86, 27, 90]
                    }
                ]
            };


                // 图表配置项，可以留空来使用默认的配置
                var options = {
                    scaleShowLabels: true, // 展示标签
                };
                var options = {responsive: true}; // 图表配置项，可以留空来使用默认的配置
                var content =  $('#main').html(this.tmpl_content);
                content.find('#charBar').barChart(data, options);
                content.find('#charLine').lineChart(data, options);
        },_initEvent:function(){
            
        }
    }
    
    madmin.bar=barPage;
    barPage._init();
    return barPage;
});