package com.jaon.demo.domain;

import java.io.Serializable;
import java.util.Date;

/**
 * 部门/机构表
 */
public class SysDept implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 部门/机构id
	 */
	private Long id;
	/**
	 * 父级id
	 */
	private Long parentId;
	/**
	 * 名称
	 */
	private String name;
	/**
	 * 排序号
	 */
	private Integer orderNum;
	/**
	 * 删除标记：0未删除，1删除
	 */
	private Boolean delFlag = false;
	/**
	 * 创建者
	 */
	private Long creator;
	/**
	 * 创建时间
	 */
	private Date creationTime = new Date();
	/**
	 * 类型：0 false 部门，1 true 公司
	 */
	private Boolean orgType = false;

	/**
	 * 设置：部门/机构id
	 */
	public void setId(Long id) {
		this.id = id;
	}
	/**
	 * 获取：部门/机构id
	 */
	public Long getId() {
		return id;
	}
	/**
	 * 设置：父级id
	 */
	public void setParentId(Long parentId) {
		this.parentId = parentId;
	}
	/**
	 * 获取：父级id
	 */
	public Long getParentId() {
		return parentId;
	}
	/**
	 * 设置：名称
	 */
	public void setName(String name) {
		this.name = name;
	}
	/**
	 * 获取：名称
	 */
	public String getName() {
		return name;
	}
	/**
	 * 设置：排序号
	 */
	public void setOrderNum(Integer orderNum) {
		this.orderNum = orderNum;
	}
	/**
	 * 获取：排序号
	 */
	public Integer getOrderNum() {
		return orderNum;
	}
	/**
	 * 设置：删除标记：0未删除，1删除
	 */
	public void setDelFlag(Boolean delFlag) {
		this.delFlag = delFlag;
	}
	/**
	 * 获取：删除标记：0未删除，1删除
	 */
	public Boolean getDelFlag() {
		return delFlag;
	}
	/**
	 * 设置：创建者
	 */
	public void setCreator(Long creator) {
		this.creator = creator;
	}
	/**
	 * 获取：创建者
	 */
	public Long getCreator() {
		return creator;
	}
	/**
	 * 设置：创建时间
	 */
	public void setCreationTime(Date creationTime) {
		this.creationTime = creationTime;
	}
	/**
	 * 获取：创建时间
	 */
	public Date getCreationTime() {
		return creationTime;
	}
	/**
	 * 设置：类型：0部门，1公司
	 */
	public void setOrgType(Boolean orgType) {
		this.orgType = orgType;
	}
	/**
	 * 获取：类型：0部门，1公司
	 */
	public Boolean getOrgType() {
		return orgType;
	}
}
