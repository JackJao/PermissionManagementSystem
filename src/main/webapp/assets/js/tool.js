define('tool', [
    'toastr',
    'bootbox',
], function (toastr, bootbox) {
    var tool = {
        serverUrl: 'http://localhost:8080/',
        staticUrl: 'http://localhost:8080/',
        mask: function () {
            if (!madmin._mask) {
                $('body').append('<div id="mask-layout" class="modal fade"></div>');
                madmin._mask = $('#mask-layout');
                madmin.IsMask = true;
            }

            madmin._mask = $(madmin._mask).modal({
                backdrop: 'static', keyboard: false
            });
            madmin.IsMask = true;
        },
        unmask: function () {
            madmin._mask.modal('hide');
            madmin.IsMask = false;
        },
        loading: function (text) {
            if (!text) text = "加载中...";
            madmin._loading = loading({
                text: text,
                duration: 2e3,
                icon: 'icon icon-spin icon-spinner-snake icon-5x',
                onbeforeshow: function () {
                    tool.mask();
                },
                onbeforehide: function () {
                    tool.unmask();
                }
            });
        },
        loadcomplete: function () {
            madmin._loading.hide();
        },
        loadupdate: function (text) {
            if (!text) text = "操作成功！";
            madmin._loading.update({
                text: text,
                icon: "icon icon-check icon-5x"
            });
        },
        success: function (msg) {
            if (!msg) msg = '操作成功！';
            toastr.success(msg);
        },
        error: function (msg) {
            if (!msg) msg = '操作失败！';
            toastr.error(msg);
        },
        info: function (msg) {
            toastr.info(msg);
        },
        warning: function (msg) {
            toastr.warning(msg);
        },
        confirm: function (callback, msg, title) {
            title = title ? title : '<span class="text-danger">确认窗口</span>';
            msg = msg ? msg : "<b>确认删除当前选中的记录?</b>";
            bootbox.confirm({
                title: title,
                message: msg,
                buttons: {
                    confirm: {
                        className: 'btn-danger'
                    }
                },
                callback: function (e) {
                    if (e)
                        callback();
                }
            });
        },
        dialog: function (title, dialogconent, confirmcallback, errorcallback, size, init,data) {
            title = title == "add" ? 
                     "<i class='icon icon-plus'></i> 添加" : 
                      (title == "edit" ? "<i class='icon icon-edit'></i> 编辑":title)
            size = size ? size : 'large';
            var _dialog = bootbox.confirm({
                title: title,
                size: size,
                message: dialogconent,
                callback: function (result) {
                    if (result) {
                        if (confirmcallback)
                            return confirmcallback();
                    }

                    if (errorcallback)
                        errorcallback();
                }
            })
            if(init)
                _dialog.init(init(data));
        },
        swapScreen: function (id) {
            $('.visible').removeClass('visible animated fadeInUp');
            $('#' + id).addClass('visible animated fadeInUp');
        },
        //ajax
        get: function (url, data, callback) {
            $.ajax({
                url: this.serverUrl + url,
                data: data,
                type: 'get',
                contentType: "application/json;charset=UTF-8",
                success: function (e) {
                    callback(e);
                },
                error: function (xhr) {
                    tool.error(xhr.responseText);
                }
            })
        },
        post: function (url, data, callback) {
            tool.loading();
            $.ajax({
                url: this.serverUrl + url,
                data: JSON.stringify(data),
                type: 'post',
                contentType: "application/json;charset=UTF-8",
                success: function (e) {
                    if (e.status != 0) {
                        tool.error(e.message)
                        tool.loadcomplete();
                        return;
                    }
                    callback(e);
                    tool.loadcomplete();
                },
                error: function (xhr) {
                    tool.error(xhr.responseText);
                    tool.loadcomplete();
                }
            })
        },
        //form validate
        ///*
        //* 设置Form 表单数据
        //* @param {form 对象} form
        //*/
        setData: function (e, data) {
            for (var p in data) {
                if (typeof (data[p]) != "function") {
                    var $tmp =e.find('[name=' + p + ']');
                    if($tmp.attr('type') == "radio"){
                        $tmp.filter('[value='+data[p]+']').attr("checked","checked");
                        continue;
                    }
                    
                    $tmp.val(data[p]);
                }
            }
        },
        ///*
        //* 获取Form 表单数据
        //* @param {form 对象} form
        //*/
        getData: function (e) {
            var _controls = e.find('[name]');
            var data = {};
            var row;
            for (var i = 0; i < _controls.length; i++) {
                row = _controls[i];
                data[row.name] = '';
            }

            for (var p in data) {
                if (typeof (data[p]) != "function") {
                    var $tmp = e.find('[name=' + p + ']');
                    var _tmp = '';
                    if ($tmp.attr('type') == "radio") {
                        _tmp = $tmp.filter(':checked').val();
                    } else {
                        _tmp = $tmp.val();
                    }

                    data[p] = _tmp ? _tmp.trim() : _tmp;
                }
            }

            return data;
        },
        /*
        * 验证Form 表单数据填写
        * @param {form 对象} form
        */
        validForm: function (e) {
            /* 移除上次错误信息 */
            var fiter = e.find('.has-error');
            // fiter.next().remove();
            fiter.removeClass('has-error');
            e.find('.has-success').removeClass('has-success');
            e.find('i[data-toggle=tooltip]').tooltip('hide').remove();
            var $controls = e.find('[name]').filter('.required');
            var msg;
            var flag = true;
            var currentFlag = true;
            var $field;
            var vtype;
            var val;

            var regex = function (pattern) {
                var re = new RegExp(pattern);
                if (re.test(val)) return true;
                return false;
            }

            for (var i = 0; i < $controls.length; i++) {
                currentFlag = true;
                $field = $($controls[i]);
                val = $field.val();
                if (!val) {
                    currentFlag = false;
                    msg = "不能为空！";
                }

                vtype = $field.attr('vtype');
                if (vtype && currentFlag) {
                    /* 最大值 */
                    if (vtype.startsWith('maxLength') && val.length > parseInt(vtype.substr(10))) {
                        currentFlag = false;
                        msg = "不能超过 " + vtype.substr(10) + " 个字符！";
                    }
                    /* 最小值 */
                    else if (vtype.startsWith('minLength') && val.length < parseInt(vtype.substr(10))) {
                        currentFlag = false;
                        msg = "不能少于 " + vtype.substr(10) + " 个字符！";
                    }
                    /* 字符长度范围 */
                    else if (vtype.startsWith('rangeLength')) {
                        var tmp = vtype.indexOf(',');
                        if (val.length < parseInt(vtype.substr(12, tmp - 12)) || val.length > parseInt(vtype.substr(tmp + 1))) {
                            currentFlag = false;
                            msg = "字符长度必须在 " + vtype.substr(12, tmp - 12) + "与 " + vtype.substr(tmp + 1) + " 个之间！";
                        }
                    }
                    /* 必须为整形数字类型 */
                    else if (vtype === 'int' && !regex(/^^([+-]?)[0-9]+$/)) {
                        currentFlag = false;
                        msg = "必须填写数字！";
                    }
                    /* 必须为带小数的数字类型 */
                    else if (vtype === 'float' && !regex(/^([+-]?)[0-9]*\.[0-9]+$/)) {
                        currentFlag = false;
                        msg = "必须填写带小数的数字！";
                    }
                    /* 数字范围 */
                    else if (vtype.startsWith('range:')) {
                        var tmp = vtype.indexOf(',');
                        if (parseFloat(val) < parseFloat(vtype.substr(6, tmp - 6)) || parseFloat(val) > parseFloat(vtype.substr(tmp + 1))) {
                            currentFlag = false;
                            msg = "数字范围必须在 " + vtype.substr(6, tmp - 6) + "与 " + vtype.substr(tmp + 1) + " 之间！";
                        }
                    }
                    /* 日期 */
                    else if (vtype === 'date' && !regex(/^(\d{4})(-)(\d{2})\2(\d{2})$/)) {
                        currentFlag = false;
                        msg = "日期 格式错误！";
                    }
                    /* 邮箱 */
                    else if (vtype === 'email' && !regex(/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g)) {
                        currentFlag = false;
                        msg = "email 格式错误！";
                    } /* URL */
                    else if (vtype === 'url') {
                        var strRegex = "^((https|http|ftp|rtsp|mms)?://)"
                            + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?"
                            + "(([0-9]{1,3}.){3}[0-9]{1,3}"
                            + "|"
                            + "([0-9a-z_!~*'()-]+.)*"
                            + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]."
                            + "[a-z]{2,6})"
                            + "(:[0-9]{1,4})?"
                            + "((/?)|"
                            + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
                        if (!regex(strRegex)) {
                            currentFlag = false;
                            msg = "URL 格式错误！";
                        }
                    } else if (vtype.startsWith('regex') && !regex(vtype.substr(6, vtype.length - 6))) {
                        currentFlag = false;
                        msg = "格式错误！";
                    }
                }

                if (currentFlag) {
                    $field.closest('.form-group').addClass('has-success');
                    $field.parent().append('<i class="icon icon-check-circle text-success validate-info" data-toggle="tooltip" title="验证通过"></i>');
                    continue;
                }
                else flag = false;

                $field.closest('.form-group').addClass('has-error');
                var fieldName = $('label[for=' + $field.attr('name') + ']').text();
                $field.parent().append('<i class="icon icon-exclamation-sign text-danger validate-info" data-toggle="tooltip" title="' + fieldName + ' ' + msg + '" ></i>');
            }
            // $('[data-toggle="tooltip"]').tooltip({ placement: 'auto', template: '<div class="tooltip tooltip-danger"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>' });
            if (!eval(flag)) {
                e.find('i[data-toggle=tooltip].text-danger').tooltip({ placement: 'left', template: '<div class="tooltip tooltip-danger"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>' }).tooltip('show');
                e.find('i[data-toggle=tooltip].text-success').tooltip({ placement: 'left', template: '<div class="tooltip tooltip-success"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>' });
            };
            return flag;
        },
        /*
        * 清理Form 表单数据
        * @param {form 对象} form
        */
        clearForm: function (e) {
            var fiter = e.find('.has-error');
            fiter.next().remove();
            fiter.removeClass('has-error');
            var _controls = e.find('[name]');
            for (var i = 0; i < _controls.length; i++) {
                _controls[i].value = '';
            }
        },
        /*
        * 生成UUID
        */
        UUID: function () {
            var s = [];
            var hexDigits = "0123456789abcdef";
            for (var i = 0; i < 36; i++) {
                s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
            }
            s[14] = "4";
            s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);

            s[8] = s[13] = s[18] = s[23] = "-";

            var uuid = s.join("");
            return uuid;
        }
    };

    madmin.tool = tool;
    return tool;
});