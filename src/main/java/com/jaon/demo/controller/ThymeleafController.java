package com.jaon.demo.controller;

import com.jaon.demo.domain.User;
import com.jaon.demo.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;


/**
 * @author Administrator
 */
@Api("用户管理")
@Controller
@RequestMapping("/user")
public class ThymeleafController {
	
	@Resource
	private UserService userService;

	@ApiOperation(value = "获取用户列表",notes = "获取用户列表")
	@GetMapping("/getAll")
	public String getAll(Map<String,Object> model){
		List<User> all = userService.getAll();
		model.put("contacts",all);
		return "home";
	}

	@PostMapping("/save")
	@ApiOperation(value = "保存新用户",notes = "保存用户后，获取所有用户信息")
	public String save(User user){
		int ret = userService.saveUser(user);
		return "redirect:/user/getAll";
	}
}
