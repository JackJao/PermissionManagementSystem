define('pie', [
    'jquery',
	'zui',
	'bootbox',
    'doT',
    'chart',
	'common'
], function($,_,bootbox,doT) {
    var piePage = {
        tmpl_content:doT.template([
            '<div style="width:450px; float:left;"><h2>饼图</h2> <canvas id="chartPie" width="400" height="400"></canvas></div>',
            '<div style="width:450px;float:left;"><h2>环状图</h2> <canvas id="chartDoughnut" width="400" height="400"></canvas></div>'
        ].join(''))(),
         tmpl_breadcrumb:doT.template([
            '<ul class="breadcrumb">',
                '<li><i class="icon-location-arrow icon-muted"></i></li>',
                '<li><a href="#">Charts</a></li>',
                '<li class="active">饼状图</li>',
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
            
            var data = [
                {
                    value: 150,
                    color: "blue", // 使用颜色名称
                    label: "蓝队"
                },
                {
                    value: 250,
                    color:"#F7464A", // 自定义颜色
                    // highlight: "#FF5A5E", // 自定义高亮颜色
                    label: "红队"
                },
                {
                    value: 50,
                    color: 'green',
                    label: "绿队"
                },
                {
                    // 不指定color值，使用随机颜色
                    // 
                    value: 100,
                    // color: 'green',
                    label: "随机颜色队"
                }];

                // 图表配置项，可以留空来使用默认的配置
                var options = {
                    scaleShowLabels: true, // 展示标签
                };

                var content =  $('#main').html(this.tmpl_content).css('padding','20px 40px');
                // 创建饼图
                content.find('#chartPie').pieChart(data, options);

                // 创建环形饼图
               content.find("#chartDoughnut").doughnutChart(data, {segmentShowStroke: false});
        },_initEvent:function(){
            
        }
    }
    
    madmin.pie=piePage;
    piePage._init();
    return piePage;
});