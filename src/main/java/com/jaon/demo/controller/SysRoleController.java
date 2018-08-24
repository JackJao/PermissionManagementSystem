package com.jaon.demo.controller;

import com.jaon.demo.service.SysRoleService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;


/**
 * 角色表
 *
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-08-23 10:50:29
 */
@RestController
@RequestMapping("sys/sysrole")
public class SysRoleController {
    @Resource
    private SysRoleService sysRoleService;

}
