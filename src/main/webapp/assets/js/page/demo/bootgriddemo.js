define('bootgriddemo', [
    'jquery',
    'zui',
    'bootbox',
    'doT',
    'tool',
    'bootgrid',
    'common'
], function ($, _, bootbox, doT, tool, bootgrid) {
    var bootgridPage = {
        tmpl_content: doT.template([
            '<div class="row">',
            '<div class="continer">',
            '<table id="grid-data" class="table table-condensed table-hover">',
            '<thead>',
            '<tr>',
            '<th data-column-id="Id" data-type="numeric" data-identifier="true" data-visible="false" data-visibleInSelection="false">ID</th>',
            '<th data-column-id="Name">菜单名称</th>',
            '<th data-column-id="Url">地址</th>',
            '<th data-column-id="ParentId">所属上级</th>',
            '<th data-column-id="Icon" data-formatter="fa">图标</th>',
            '<th data-column-id="Sort">排序号</th>',
            '<th data-column-id="Status" data-formatter="status">状态</th>',
            '</tr>',
            '</thead>',
            '</table>',
            '</div>',
            '</div>',
        ].join(''))(),
        tmpl_breadcrumb: doT.template([
            '<ul class="breadcrumb">',
            '<li><i class="icon-location-arrow icon-muted"></i></li>',
            '<li><a href="#">Grid</a></li>',
            '<li class="active">Bootgrid</li>',
            '</ul>'
        ].join(''))(),
        _init: function () {
            this._render();
            this._initEvent();
            if (madmin.IsMask) {
                madmin.tool.loadcomplete();
            }
        }, _render: function () {
            $('#site_breadcrumb').html(this.tmpl_breadcrumb);
            $('#main').html(this.tmpl_content).css('padding', '0px 13px');

            this.$grid = $("#grid-data");
            this.$grid.bootgrid({
                ajax: true,
                ajaxSettings: {
                    method: "GET",
                    cache: false
                },
                btns: [{
                    text: '添加',
                    style: 'btn btn-link',
                    icon: 'icon icon-plus',
                    // click: 'showEditWin(\'false\')'
                }, {
                        text: '修改',
                        style: 'btn btn-link',
                        icon: 'icon icon-edit',
                        // click: 'showEditWin(\'true\')'
                    }, {
                        text: '删除',
                        style: 'btn btn-link',
                        icon: 'icon icon-remove text-danger',
                        // click: 'del()'
                    }],
                url: tool.baseUrl + 'api/system_setting/get_menu_page',
                selection: true,
                multiSelect: true,
                formatters: {
                    "status": function (column, row) {
                        if (row.Status == "200") return "正常";
                        return "暂停";
                        // return "<a href=\"#\">" + column.id + ": " + row.id + "</a>";
                    },
                    "fa": function (column, row) {
                        return '<i class="icon ' + row.Icon + '"></i>'
                    }
                }
            })
        }, _initEvent: function () {

        }
    }
    madmin.bootgriddemo = bootgridPage;
    bootgridPage._init();
    return bootgridPage;
});