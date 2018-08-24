/**
 * file: config.js 模板
 * author : [" ybb@ideawr.com"]
 * date : 2016/9/1
 */
require.config({
	baseUrl:  'assets/js/',
	urlArgs: 'v=0.0.0.4', /*版本号*/
	waitSeconds: 15,
    shim:{
        zui:['jquery','bootbox','doT','toastr','iosOverlay','tool'],
        login:['zui']
    }
});
// 请不要删除下面一行分割线
/*--cut--*/
require.config({paths :{
    // common libs
    "jquery":"jquery",
    "less":"plugins/less/less.min",
    "zui":'zui/js/zui',
    "toast":'plugins/plugins/toast',
    "fgnass":'plugins/fgnass',
    "toastr":'plugins/toastr/toastr.min',
    "iosOverlay":'plugins/iosOverlay/iosOverlay',
    'bootbox':'zui/lib/bootbox/bootbox',
    'prettify':'plugins/prettify/prettify',
    'marked':'plugins/marked/marked.min',
    'doT':'plugins/doT/doT',
    'zuidatatable':'zui/lib/datatable/zui.datatable',
    'chart':'zui/lib/chart/zui.chart',
    'uniform':'jquery.uniform.min',
    'bootgrid':'plugins/bootgrid/jquery.bootgrid',
    'ztree':'plugins/jquery.ztree.all',
    'chosen':'zui/lib/chosen/chosen',
    'chosenicons':'zui/lib/chosenicons/zui.chosenicons',
    'treegrid':'plugins/treegrid/jquery.treegrid',
    // common page    
    'common':'page/common',
    'login':'page/login',
    'dashboard':'page/dashboard',
    // demo
    'form':'page/demo/form',
    'formvalidate':'page/demo/formvalidate',
    'datatable':'page/demo/datatable',
    'grid':'page/demo/grid',
    'pie':'page/demo/pie',
    'bar':'page/demo/bar',
    'element':'page/demo/element',
    'notify':'page/demo/notify',
    'loading':'page/demo/loading',
    'bootgriddemo':'page/demo/bootgriddemo',
    'ztreedemo':'page/demo/ztreedemo',
    'chosendemo':'page/demo/chosendemo',
    'treegriddemo':'page/demo/treegriddemo',

}})