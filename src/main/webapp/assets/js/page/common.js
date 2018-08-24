define('common', [
	'jquery',
	'zui',
	'bootbox',
    'doT',
    'tool'
], function($,_,bootbox,dot,tool) {
    var common={
        demodata:[
            {
                id: 1,
                text: '控制台',
                url: '#dashboard',
                icon: 'icon-dashboard',
                active:true,
                children: []
            },
            {
                id: 1,
                text: 'UI元素',
                url: '#',
                icon: 'icon-list',
                children: [
                    {
                        id: 1,
                        text: '基本元素',
                        icon: 'icon-circle-blank',
                        url: '#element'
                    }
                ]
            }, {
                id: 1,
                text: 'Grid',
                url: '#',
                icon: 'icon-table',
                children: [
                    {
                        id: 1,
                        text: 'ZUI Datatable',
                        icon: 'icon-table',
                        url: '#datatable'
                    },
                        {
                        id: 1,
                        text: 'DataGrid',
                        icon: 'icon-table',
                        url: '#grid'
                    },
                        {
                        id: 1,
                        text: 'Bootgrid',
                        icon: 'icon-table',
                        url: '#bootgriddemo'
                    }
                ]
            }, {
                id: 'form',
                text: 'Form',
                url: '#',
                icon: 'icon-list-alt',
                children: [
                    {
                        id: 'form_1',
                        text: 'Form表单',
                        icon: 'icon-edit',
                        url: '#form'
                    },
                      {
                        id: 'form_validatea',
                        text: 'Form表单验证',
                        icon: 'icon-exclamation-sign',
                        url: '#formvalidate'
                    },
                      {
                        id: 'form_validatea',
                        text: 'Chosen',
                        icon: 'icon-exclamation-sign',
                        url: '#chosendemo'
                    }
                ]
            }  ,  {
                id: 1,
                text: 'Charts',
                url: '#',
                icon: 'icon-bar-chart',
                children: [
                    {
                        id: 1,
                        text: '柱形图&曲线',
                        icon: 'icon-line-chart',
                        url: '#bar'
                    },
                    {
                        id: 1,
                        text: '饼状图',
                        icon: 'icon-pie-chart',
                        url: '#pie'
                    }
                ]
            }  ,  {
                id: 1,
                text: 'Notify&Loading',
                url: '#',
                icon: 'icon-comment-alt',
                children: [
                    {
                        id: 1,
                        text: 'Notify',
                        icon: 'icon-comment',
                        url: '#notify'
                    },
                    {
                        id: 1,
                        text: 'Loading',
                        icon: 'icon-spin icon-spinner-snake',
                        url: '#loading'
                    }
                ]
            },  {
                id: 1,
                text: 'Tree',
                url: '#',
                icon: 'icon-branch',
                children: [
                    {
                        id: 1,
                        text: 'ZTree',
                        icon: 'icon-branch',
                        url: '#ztreedemo'
                    }, {
                        id: 1,
                        text: 'TreeGrid',
                        icon: 'icon-branch',
                        url: '#treegriddemo'
                    }
                ]
            },
        ],
        tmpl_header:dot.template([
            '<header class="header-navbar">',
                '<div class="navbar navbar-inverse navbar-fixed-top bg-primary">',
                    '<div class="container-fluid">',
                        '<div class="navbar-header">',
                            '<button type="button" id="btnNavbarCollapse" class="navbar-toggle" data-toggle="collapse" onclick="javascript:$(\'.leftcontent\').toggle();">',
                            '<span class="icon-bar"></span>',
                            '<span class="icon-bar"></span>',
                            '<span class="icon-bar"></span>',
                        '</button>',
                            '<a id="headerlogo" class="navbar-brand" href="#">Mini-Admin</a>',
                        '</div>',
                        '<div class="navbar-collapse collapse">',
                            '<ul class="nav navbar-nav navbar-right navbar-toolmenu" style="margin-top: 29px; ">',
                                '<li class="dropdown"><a role="button" data-toggle="dropdown" data-target="#"><i class="icon-leaf"></i> &nbsp;换肤<span class="caret"></span></a>',
                                    '<ul id="sys-theme" class="dropdown-menu" role="menu">',
                                        '<li><a href="#" data-theme="dark">亮黑色(默认推荐)</a></li>',
                                        '<li><a href="#" data-theme="black">深灰色</a></li>',
                                        '<li><a href="#" data-theme="bluegrey">蓝灰色</a></li>',
                                        '<li><a href="#" data-theme="brown">棕色</a></li>',
                                    '</ul>',
                                '</li>',
                                '<li><a href="#"><i class="icon-bell"></i> <code>0</code></a></li>',
                                '<li class="dropdown"><a href="#" lass="dropdown-toggle" data-toggle="dropdown"><i class="icon-user"></i><span> 管理员</span><b class="caret"></b></a>',
                                    '<ul class="dropdown-menu" role="menu">',
                                        '<li><a id="loginuserinfo" href="#"><i class="icon-user"></i> &nbsp; 用户资料</a></li>',
                                        '<li><a id="pwdchange" href="#"><i class="icon-edit"></i>&nbsp; 密码修改</a></li>',
                                        '<li class="divider"></li>',
                                        '<li><a id="logout" href="#"><i class="icon-off"></i> &nbsp; 退出</a></li>',
                                    '</ul>',
                                '</li>',
                                '<li class=""><a href="index.html#" id="sidebar-menu"><i class="fa fa-navicon"></i></a></li>',
                            '</ul>',
                        '</div>',
                    '</div>',
                '</div>',
            '</header>'
            ].join(''))(),
        tmpl_content: dot.template([
            '<div id="content">',
                '<div id="col-left" class="leftcontent bg-primary">',
                    '<div id="menu" class="menunav"></div>',
                    '<footer id="footer" class="bg-primary">',
                        '<div class="sidebar-brand">MINI后台管理</div>',
                        '<ul class="sidebar-terms">',
                            '<li><a href="#">帮助</a></li>',
                            '<li><a href="#">关于</a></li>',
                        '</ul>',
                        '<div class="copyright"><small><a href="#" title="静执工作室" target="_blank">静执工作室</a> <iclass="icon-coffee"></i> <i class="icon icon-coffee"></i> <a href="#" title="fcode" target="_blank">link.me.com</a></small></div>',
                    '</footer>',
                '</div>',
                '<div class="maincontent">',
                    '<div id="site_breadcrumb" style="font-size: 16px;"></div>',
                    '<div id="main"></div>',
                '</div>',
            '</div>'
        ].join(''))(),
        _init:function(){
              this._render();
              this._initMenu();
              this._initTheme();
              this._initEvent();
              this._initNav();
            if(window.location.hash.length==0)return;
            $('[href='+window.location.hash+']').trigger('click');
        },_render:function(){
            var body =document.getElementsByTagName('body')[0];
            body.innerHTML= this.tmpl_header+this.tmpl_content+  body.innerHTML;
        }
        ,_initMenu:function(){
             var menu = $('#menu').navmenu();
            menu.SetData(this.demodata);
        },_initEvent:function(){
            $('#preview-loading').remove();
            $('#logout').click(function () {
                 bootbox.confirm("确定要退出当前登录？", function(e) {
                    //logout request
                    // tool.post('api/account/logout',{},function(){
                        window.location.href='login.html';
                    // })
                });
            })
            
            $('#loginuserinfo').click(function () {
                bootbox.dialog({
                    title:'用户资料',
                    message:'用户资料',
                    onEscape:true,
                    buttons:[
                        {label:'确认',callback:function(){
                            alert('确认')
                        }}
                    ]
                });
            })
            
            $('#pwdchange').click(function () {
                 bootbox.dialog({
                    title:'密码修改',
                    message:'密码修改',
                    onEscape:true,
                    buttons:[
                        {label:'提交',className: "btn-primary",  callback:function(){
                            alert('确认')
                        }},
                        {label:'取消',callback:function(){
                       
                        }}
                    ]
                });
            })
        },_initTheme:function(){
            $("#sys-theme a").on("click",function(e){
                var theme = $(e.currentTarget).data('theme');
                //验证是否当前皮肤
                var themeUrl = tool.staticUrl+'assets/js/zui/css/theme/zui-theme';
                if(theme!='dark')
                    themeUrl+='-'+theme;
                themeUrl+='.css';
                $('#link-theme').attr('href',themeUrl)
            }) ;
        },_initNav:function(){
            $(menu).find('a').click(function(e){
                var pagejs = $(e.currentTarget).attr('href').substr(1);
                if(pagejs.length<=0)
                    return;
                if(!madmin[pagejs]){
                    madmin.tool.loading();
                }                    
                require([pagejs]);
                
                eval('if(madmin.'+pagejs+'){madmin.'+pagejs+'._init()}');
            })
        },loadCss:function( url ){ 
            var link = document.createElement( "link" ); 
            link.type = "text/css"; 
            link.rel = "stylesheet"; 
            link.href = tool.staticUrl+url; 
            document.getElementsByTagName( "head" )[0].appendChild(link); 
        },_initZTreeCSS:function(){
            this.loadCss('assets/css/ztree/metro.css');
        },initTreeSetting:function(id,url,asyncSuccess){
            $.tree = $.fn.zTree.getZTreeObj(id);
            var setting = {
                async:{
                    enable:true,
                    type:'get',
                    url: tool.serverUrl +url
                },
                check: {
                    enable: true
                },
                view: {
                    dblClickExpand: false,
                    showLine: true,
                    selectedMulti: false
                },
                data: {
                    simpleData: {
                        enable:true,
                        idKey: 'id',
                        pIdKey:'pid',
                        rootPId: ""
                    }
                },
                callback: {
                    beforeAsync:function(){
                        tool.loading();
                    },
                    onAsyncSuccess:function(){
                        if(asyncSuccess)asyncSuccess();
                        tool.loadcomplete();
                    },
                    beforeClick: function(treeId, treeNode) {
                        if (treeNode.isParent) {
                            $.tree.expandNode(treeNode);
                            return false;
                        } else {
                            // demoIframe.attr("src",treeNode.file + ".html");
                            return true;
                        }
                    }
                }
            };     
            return setting;
        },
        _remove:function($grid,url){
             var selected = $grid.find('tr.active');
            if (selected.length == 0) {
                tool.warning('请至少选择一项进行操作！');
                return;
            }
            var ids = [];
            tool.confirm(function () {//确认
                for (var i = 0; i < selected.length; i++) {
                    var element = selected[i];
                    ids.push($(element).data('field-id'));
                }
                tool.post(url+'?ids=' + ids.join(','), {}, function () {
                    $grid.grid('load');
                });
            }, "确认删除当前选中的 " + selected.length + " 条记录?");
        }
    }
    madmin.common=common;
    common._init();
    return common;
});