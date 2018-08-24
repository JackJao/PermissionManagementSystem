define('treegriddemo', [
    'jquery',
    'zui',
    'bootbox',
    'doT',
    'iosOverlay',
    'common',
    'treegrid'
], function ($, _, bootbox, doT, _loading) {
    var treegridDemoPage = {
        tmpl_content: doT.template([
            // '<div id="treegrid">'
            '<table class="treegrid table"><thead><tbody>',
        ].join(''))(),
        tmpl_breadcrumb: doT.template([
            '<ul class="breadcrumb">',
            '<li><i class="icon-location-arrow icon-muted"></i></li>',
            '<li><a href="#">Tree</a></li>',
            '<li class="active">TreeGrid</li>',
            '</ul>'
        ].join(''))(),
        _init: function () {
            madmin.common.loadCss('assets/js/plugins/treegrid/jquery.treegrid.css');
            this._render();
            this._initEvent();
            if (madmin.IsMask) {
                madmin.tool.loadcomplete();
            }
        }, _render: function () {
            $('#site_breadcrumb').html(this.tmpl_breadcrumb);
            this.$ = $('#main').html(this.tmpl_content).css('padding', '20px 40px');

            var treedata = [
                {
                    "Id": 6510171270319201,
                    "Category": "",
                    "Text": "订单",
                    "Value": "",
                    "Sort": 99,
                    "Status": 200
                },
                {
                    "Id": 651017127031920,
                    "Category": "6510171270319201",
                    "Text": "ee",
                    "Value": "ee",
                    "Sort": 99,
                    "Status": 200
                },
                {
                    "Id": 665035295581920,
                    "Category": "6510171270319201",
                    "Text": "a",
                    "Value": "a",
                    "Sort": 99,
                    "Status": 200
                },
                {
                    "Id": 6770418177719202,
                    "Category": "",
                    "Text": "测试",
                    "Value": "",
                    "Sort": 99,
                    "Status": 200
                },
                {
                    "Id": 677041817771920,
                    "Category": "6770418177719202",
                    "Text": "ew",
                    "Value": "w",
                    "Sort": 99,
                    "Status": 200
                },
                {
                    "Id": 677042643521920,
                    "Category": "6770418177719202",
                    "Text": "ddd",
                    "Value": "dd",
                    "Sort": 99,
                    "Status": 200
                },
                {
                    "Id": 6770418177719203,
                    "Category": "",
                    "Text": "测试1",
                    "Value": "",
                    "Sort": 99,
                    "Status": 200
                },
            ];

            // var hl = '';
            // treedata.forEach(function (e) {
            //     hl += '<tr class="treegrid-' + e.Id + (e.Category.length == 0 ? '' : ' treegrid-parent-' + e.Category) + '"><td>' + e.Text + '</td><td>' + e.Value + '</td><td>' + e.Status + '</td></tr>';
            // }, this)

            // $('.treegrid tbody').html(hl);
            $('.treegrid').treegrid({
                parentField:'Category',
                idField:'Id',
                columns: [
                    { field: 'Id', dataable: true , ignore: true },
                    { field: 'Category', dataable: true, ignore: true },
                    { field: 'Text', text: '分类/字典', dataable: true },
                    { field: 'Value', text: '字典值', dataable: true },
                    { field: 'Status', text: '状态', dataable: true },
                    ],
                data: treedata
            });
        }, _initEvent: function () {

        }
    }

    madmin.treegriddemo = treegridDemoPage;
    treegridDemoPage._init();
    return treegridDemoPage;
});