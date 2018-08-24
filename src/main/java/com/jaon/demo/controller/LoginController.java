package com.jaon.demo.controller;

import com.jaon.demo.utils.ShiroUtils;
import org.apache.shiro.authc.*;
import org.apache.shiro.subject.Subject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

/**
 * @author Gao
 * @date 2018/8/16 16:46
 */
@RestController
@RequestMapping("/api/account")
public class LoginController {
    private static final Logger LOG = LoggerFactory.getLogger(LoginController.class);

    @GetMapping("/login")
    public Map<String,Object> login(String account, String pwd){
        Map<String,Object> map = new HashMap<>(2);
        try{
            Subject subject = ShiroUtils.getSubject();
            UsernamePasswordToken token = new UsernamePasswordToken(account,pwd);
            subject.login(token);
        }catch (UnknownAccountException e) {
            map.put("status",9999);
            map.put("message",e.getMessage());
            return map;
        }catch (IncorrectCredentialsException e) {
            map.put("status",9999);
            map.put("message","账号或密码不正确");
            return map;
        }catch (LockedAccountException e) {
            map.put("status",9999);
            map.put("message","账号已被锁定,请联系管理员");
            return map;
        }catch (AuthenticationException e) {
            map.put("status",9999);
            map.put("message","账户验证失败");
            return map;
        }
        map.put("status",0);
        map.put("message","登录成功");
        return map;
    }
}
