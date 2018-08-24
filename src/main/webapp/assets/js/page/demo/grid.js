define('grid', [
    'jquery',
    'zui',
    'bootbox',
    'doT',
    'tool',
    'common',
    'zuidatatable'
], function ($, _, bootbox, doT, tool) {
    var gridPage = {
        tmpl_content: doT.template([
            '<div class="grid"></div>',
        ].join(''))(),
        tmpl_breadcrumb: doT.template([
            '<ul class="breadcrumb">',
            '<li><i class="icon-location-arrow icon-muted"></i></li>',
            '<li><a href="#">Grid</a></li>',
            '<li class="active">DataGrid</li>',
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
            };

            var $grid = $('.grid').grid({
                  cols:[
                    { field: 'id',width: 150, text: 'id',  type: 'number', flex: false, sort: false, colClass: 'text-center',dataable:true },
                    { field: 'code', width: 160, text: 'code', type: 'date', flex: false, colClass: '',dataable:true },
                    { field: 'pname',width: 180, text: 'pname', type: 'string', flex: false, colClass: '' },
                    { field: 'unit',width: 100, text: 'unit', type: 'string', flex: true, colClass: '' },
                    { field: 'price',width: 'auto', text: 'price', type: 'string', flex: true, colClass: '' },
                    { field: 'amount',width: 100, text: 'amount', type: 'string', flex: true, colClass: 'text-center' },
                    { field: 'dealprice',sort: false, width: 200, text: 'dealprice', type: 'string', flex: true, colClass: '' },
                    { field: 'operation', sort: false, width: 'auto', text: '操作', type: 'string', flex: false, colClass: '' },
                ],
                //  datatype:'list',
                url:'http://wx.ideawr.com/api/settings/get_orderpager',
                ajaxtype:'post',
                
                //  data: data.rows, 
                 afterLoad:function(e){
                     $.each(e.data,function(index,row){
                        row["operation"]="<a href='#'><i class='icon-ok-sign'></i></a> &nbsp; <a href='###' class='text-danger'><i class='icon-trash'></i></a> "
                     })
                }
            });

            // $grid.grid('load', data.rows)
        }
    }
    madmin.grid = gridPage;
    gridPage._init();
    return gridPage;
});