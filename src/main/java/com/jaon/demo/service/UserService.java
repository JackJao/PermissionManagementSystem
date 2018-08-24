package com.jaon.demo.service;

import java.util.List;

import com.jaon.demo.domain.User;

/**
 *
 * @author Administrator
 */
public interface UserService {

	/**
	 * 获取所有用户
	 * @return allUserInfo
	 */
	List<User> getAll();

	/**
	 * 根据用户名获取用户信息
	 * @param name
	 * @return
	 */
	User getUserByName(String name);

	/**
	 * 保存用户
	 * @return
	 */
	int saveUser(User user);
}
