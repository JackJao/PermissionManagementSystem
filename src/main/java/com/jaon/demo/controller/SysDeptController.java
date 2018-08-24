package com.jaon.demo.controller;

import com.jaon.demo.service.SysDeptService;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.Arrays;
import java.util.Map;



/**
 * 部门/机构表
 *
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-08-23 10:50:29
 */
@RestController
@RequestMapping("sys/sysdept")
public class SysDeptController {
    @Resource
    private SysDeptService sysDeptService;


}
