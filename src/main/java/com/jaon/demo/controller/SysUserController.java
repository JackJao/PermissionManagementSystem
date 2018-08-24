package com.jaon.demo.controller;

import com.jaon.demo.domain.SysUser;
import com.jaon.demo.mapper.SysUserMapper;
import com.jaon.demo.service.SysUserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;


/**
 * 用户表
 *
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-08-23 10:50:29
 */
@RestController
@RequestMapping("sys/sysuser")
public class SysUserController {
    @Resource
    private SysUserService sysUserService;
    @Resource
    private SysUserMapper sysUserMapper;


    @GetMapping("/all")
    public List<SysUser> getAllSysUser(){
        return sysUserMapper.selectListByParams(null);
    }
}
