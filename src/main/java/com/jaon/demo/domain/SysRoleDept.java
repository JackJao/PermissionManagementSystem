package com.jaon.demo.domain;

import java.io.Serializable;
import java.util.Date;

/**
 * 角色部门关系表
 * 
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-08-23 10:50:29
 */
public class SysRoleDept implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 角色id
	 */
	private Long rid;
	/**
	 * 部门id
	 */
	private Long did;

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
	 * 设置：部门id
	 */
	public void setDid(Long did) {
		this.did = did;
	}
	/**
	 * 获取：部门id
	 */
	public Long getDid() {
		return did;
	}
}
