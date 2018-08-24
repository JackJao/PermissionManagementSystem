define('datatable', [
    'jquery',
    'zui',
    'bootbox',
    'doT',
    'tool',
    'common',
    'zuidatatable'
], function ($, _, bootbox, doT, tool) {
    var datatablePage = {
        tmpl_content: doT.template([
            '<div class="grid">',
            '<div class="toolbox">',
            '<div class="pull-left">',
            // '<div class="btn-group">',
            '<button class="btn btn-link"><i class="icon icon-plus"></i>添加</button>',
            '<button class="btn btn-link"><i class="icon icon-edit"></i>修改</button>',
            // '</div>',
            // '<i class="icon icon-ellipsis-v"></i>',
            '<button class="btn btn-link"><i class="icon icon-remove text-danger"></i>删除</button>',
            '</div>',
            '<div class="pull-right">',
            '<div class="input-group" style="width:200px;">',
            '<input type="text" class="form-control pull-right" placeholder="搜索条件">',
            '<span class="input-group-btn">',
            '<button class="btn btn-default" type="button">搜索</button>',
            '</span>',
            '</div>',
            '</div>',
            '</div>',
            '<div class="grid-content grid-content-fit"><div class="datatable" data-checkable="true" data-sortable="true"></div></div>',
            '<div class="grid-footer grid-border-top">',
            '<ul class="pager pull-left">',
            '<li><a title="首页"><i class="icon icon-step-backward"></i></a></li>',
            '<li><a title="上一页"><i class="icon icon-play icon-flip-horizontal"></i></a></li>',
            '<li><a title="当前页码" class="currentPage"><input type="text" value="1" /> / <lable>5</label></a></li>',
            '<li><a title="下一页"><i class="icon icon-play"></i></a></li>',
            '<li><a title="尾页"><i class="icon icon-step-forward"></i></a></li>',
            '</ul>',
            '<label class="pager pull-right" style="margin-top:7px;">每页 ',
            '<select>',
            '<option value="10">10</option>',
            '<option value="20">30</option>',
            '<option value="50">50</option>',
            '<option value="100">50</option>',
            '</select>',
            ' 条,共 21 条</lable>',
            '</div>',
            '</div>',
        ].join(''))(),
        tmpl_breadcrumb: doT.template([
            '<ul class="breadcrumb">',
            '<li><i class="icon-location-arrow icon-muted"></i></li>',
            '<li><a href="#">Grid</a></li>',
            '<li class="active">ZUI DataTable</li>',
            '</ul>'
        ].join(''))(),
        _init: function () {
            this._render();
            this._initEvent();
             if(madmin.IsMask){
                madmin.tool.loadcomplete();
            }
        }, _render: function () {
            $('#site_breadcrumb').html(this.tmpl_breadcrumb);
            $('#main').html(this.tmpl_content).css('padding', '0px');
        }, _initEvent: function () {
            var now = new Date();
            var start = now.getSeconds(),
                calendars = ['success', 'danger', 'important', 'warning', 'info', 'specail', 'primary'],
                rooms = ['A003', 'A004', 'A010', 'A143', 'B008', 'B098', 'B487', 'B340', 'Z000', 'Z431', 'Z018', 'Z864'],
                peoples = ['奥特曼', '行者孙', '地卜师', '绿巨人', 'Catouse', '路人丙'],
                events = ['进食', '喝水', '交谈', '睡觉', '捶打墙壁', '自言自语', '搬动椅子', '唱歌', '上网', '梦游', '观望天花板'],
                eventsTypes = ['happy', 'sad', ':]'],
                tools = ['桌子', '椅子', '水杯', '枪', '随从'],
                descs = ['没有完成', '这次失败了', '徒劳', '很满意', '禁止再次发生', '也行', '情况不明', '发现未知征兆'];

            var data = {
                cols: [
                    { field: 'uid',width: 100, text: 'uid',  type: 'number', flex: false, sort: false, colClass: 'text-center',dataable:true },
                    { field: 'time',sort: 'down', width: 160, text: '时间', type: 'date', flex: false, colClass: '',dataable:true },
                    { field: 'room',width: 80, text: '房间', type: 'string', flex: false, colClass: '' },
                    { field: 'man',width: 100, text: '人物', type: 'string', flex: false, colClass: '' },
                    { field: 'pro',width: 'auto', text: '事件', type: 'string', flex: false, colClass: '' },
                    { field: 'ptype',width: 100, text: '事件类型', type: 'string', flex: true, colClass: 'text-center' },
                    { field: 'descs',sort: false, width: 200, text: '描述', type: 'string', flex: true, colClass: '' },
                    { field: 'about',width: 100, text: '相关人物', type: 'string', flex: true, colClass: '' },
                    { field: 'aboutthing',width: 100, text: '相关物品', type: 'string', flex: true, colClass: '' },
                    { field: 'sock',width: 60, text: '评分', type: 'number', flex: true, colClass: 'text-center text-important' },
                    { field: 'operation', sort: false, width: 'auto', text: '操作', type: 'string', flex: false, colClass: '' },
                ],
                rows: []
            };

            for (var i = 0; i < 10; i++) {
                // var row = {
                //     checked: Math.random() > 0.9, data: [
                //         start + i + 101000,
                //         now.format('yyyy-MM-dd hh:mm:ss'),
                //         rooms[Math.floor(Math.random() * rooms.length)],
                //         peoples[Math.floor(Math.random() * peoples.length)],
                //         events[Math.floor(Math.random() * events.length)],
                //         eventsTypes[Math.floor(Math.random() * eventsTypes.length)],
                //         descs[Math.floor(Math.random() * descs.length)],
                //         peoples[Math.floor(Math.random() * peoples.length)],
                //         tools[Math.floor(Math.random() * tools.length)],
                //         Math.floor(Math.random() * 100) / 10,
                //         // "<a href='#'><i class='icon-ok-sign'></i></a> &nbsp; <a href='###' class='text-danger'><i class='icon-trash'></i></a> "
                //     ]
                // };

               var row= {
                        uid:start + i + 101000,
                       time: now.format('yyyy-MM-dd hh:mm:ss'),
                       room: rooms[Math.floor(Math.random() * rooms.length)],
                        man:peoples[Math.floor(Math.random() * peoples.length)],
                       pro: events[Math.floor(Math.random() * events.length)],
                       ptype: eventsTypes[Math.floor(Math.random() * eventsTypes.length)],
                       descs: descs[Math.floor(Math.random() * descs.length)],
                       about: peoples[Math.floor(Math.random() * peoples.length)],
                      aboutthing:  tools[Math.floor(Math.random() * tools.length)],
                      sock:  Math.floor(Math.random() * 100) / 10,
                    //   '':  "<a href='#'><i class='icon-ok-sign'></i></a> &nbsp; <a href='###' class='text-danger'><i class='icon-trash'></i></a> "
                   }

                data.rows.push(row);
                now = new Date(now.getTime() - (Math.random() * 1000 * 60 * 60));
            };


            console.log(data);
            var dt = $('.datatable').datatable({
                fixedLeftWidth: '50%', 
                fixedRightWidth: '100px', 
                data: data, 
                fixedHeaderOffset: 60, 
                checkable: true, 
                sortable: true,
                indexable:true,
                afterLoad:function(e){
                    $.each(e.data.rows,function(index,row){
                        row["operation"]="<a href='#'><i class='icon-ok-sign'></i></a> &nbsp; <a href='###' class='text-danger'><i class='icon-trash'></i></a> "
                        // row["uid"]="<a href='#'>"+row.uid+"</a> "
                    })
                }
            });

        }
    }
    madmin.datatable = datatablePage;
    datatablePage._init();
    return datatablePage;
});