package com.jaon.demo.domain;

import java.io.Serializable;

/**
 * 角色菜单关系表
 * 
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-08-23 10:50:29
 */
public class SysRoleMenu implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 角色id
	 */
	private Long rid;
	/**
	 * 菜单id
	 */
	private Long mid;

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
	/**
	 * 设置：菜单id
	 */
	public void setMid(Long mid) {
		this.mid = mid;
	}
	/**
	 * 获取：菜单id
	 */
	public Long getMid() {
		return mid;
	}
}
