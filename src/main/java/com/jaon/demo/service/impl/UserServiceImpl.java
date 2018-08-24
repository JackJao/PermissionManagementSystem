package com.jaon.demo.service.impl;

import com.jaon.demo.domain.User;
import com.jaon.demo.mapper.UserMapper;
import com.jaon.demo.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * @author Administrator
 */
@Service("userService")
public class UserServiceImpl implements UserService {

	private static final Logger LOG = LoggerFactory.getLogger(UserServiceImpl.class);

	@Resource
	private UserMapper userMapper;


	@Override
	public List<User> getAll() {
		return userMapper.findAll();
	}

	@Override
	public User getUserByName(String name) {
		return userMapper.selectUserByName(name);
	}

	@Override
	public int saveUser(User user) {
		return userMapper.insert(user);
	}

}
