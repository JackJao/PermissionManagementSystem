package com.jaon.demo.domain;

import java.io.Serializable;

/**
 * 用户角色关系表
 * 
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-08-23 10:50:29
 */
public class SysUserRole implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 用户id
	 */
	private Long uid;
	/**
	 * 角色id
	 */
	private Long rid;

	/**
	 * 设置：用户id
	 */
	public void setUid(Long uid) {
		this.uid = uid;
	}
	/**
	 * 获取：用户id
	 */
	public Long getUid() {
		return uid;
	}
	/**
	 * 设置：角色id
	 */
	public void setRid(Long rid) {
		this.rid = rid;
	}
	/**
	 * 获取：角色id
	 */
	public Long getRid() {
		return rid;
	}
}
