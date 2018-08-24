define('login', [
    'jquery',
    'zui',
    'iosOverlay',
    'toastr',
    'tool',
    'uniform'
], function ($, _, _loading, toastr, tool) {

    $(function () {
        var $user = $('#user');
        var $pwd = $('#pwd');
        if (localStorage.remember && eval(localStorage.remember)) {
            if (localStorage.user) {
                $user.val(localStorage.user)
            };
            if (localStorage.pwd) {
                $pwd.val(localStorage.pwd)
            };
            $('#remember').attr('checked', true)
        }

        $(".uniform").uniform();

        function login() {
            var user = $user.val();
            var pwd = $pwd.val();
            if (user== '') {
                madmin.tool.error('账号不能为空！')
                return false;
            }

            if (pwd == '') {
                madmin.tool.error('密码不能为空！')
                return false;
            }
            tool.loading();
            tool.get('api/account/login', { account: user, pwd:pwd }, function (rdata) {
                if (rdata.status != 0) {
                    debugger;
                    tool.error(rdata.message)
                    tool.loadcomplete();
                    return false;
                } else {
                    debugger;
                    tool.loadupdate('登录成功')
                }

                //加载用户信息
                /*tool.get('api/account/get_current_info', {}, function (e) {
                    sessionStorage.accountinfo=JSON.stringify(e.data);

                    setTimeout(function() {
                        window.location.href ='index.html';
                    }, 1000);
                });*/
                window.location.href ='index.html';
            })



            // webapi.getPasswordToken($user.val(), $pwd.val(), function (e) {
            //     tool.success('登录成功')
            //     sessionStorage.token = e.access_token;
            //     //remember
            //     delete localStorage.remember;;
            //     delete localStorage.user;
            //     delete localStorage.pwd;
            //     if ($('#remember')[0].checked) {
            //         localStorage.remember = true;
            //         localStorage.user = $user.val();
            //         localStorage.pwd = $pwd.val();
            //     }

            //     setTimeout(function () {
            //         window.location.href = '/';
            //     }, 2000)
            // })
            return true;
        }

        $user.on('keyup', function (e) {
            if (e.key === 'Enter' || e.keyCode === 13)
                login();
        })

        $pwd.on('keyup', function (e) {
            if (e.key === 'Enter' || e.keyCode === 13)
                login();
        })
        $('#submit-login').click(login)
    })
});