package com.jaon.demo.domain;


import java.io.Serializable;
import java.util.Date;

/**
 * 菜单表
 * 
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-08-23 10:50:29
 */
public class SysMenu implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 菜单id
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
	 * 菜单URL
	 */
	private String url;
	/**
	 * 授权（多个逗号分隔，如：user:list,user:create）
	 */
	private String perm;
	/**
	 * 图标
	 */
	private String icon;
	/**
	 * 排序
	 */
	private Integer orderNum;
	/**
	 * 创建者
	 */
	private Long creator;
	/**
	 * 创建时间
	 */
	private Date creationTime;
	/**
	 * 类型：0目录，1菜单，2按钮
	 */
	private Integer menuType;

	/**
	 * 设置：菜单id
	 */
	public void setId(Long id) {
		this.id = id;
	}
	/**
	 * 获取：菜单id
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
	 * 设置：菜单URL
	 */
	public void setUrl(String url) {
		this.url = url;
	}
	/**
	 * 获取：菜单URL
	 */
	public String getUrl() {
		return url;
	}
	/**
	 * 设置：授权（多个逗号分隔，如：user:list,user:create）
	 */
	public void setPerm(String perm) {
		this.perm = perm;
	}
	/**
	 * 获取：授权（多个逗号分隔，如：user:list,user:create）
	 */
	public String getPerm() {
		return perm;
	}
	/**
	 * 设置：图标
	 */
	public void setIcon(String icon) {
		this.icon = icon;
	}
	/**
	 * 获取：图标
	 */
	public String getIcon() {
		return icon;
	}
	/**
	 * 设置：排序
	 */
	public void setOrderNum(Integer orderNum) {
		this.orderNum = orderNum;
	}
	/**
	 * 获取：排序
	 */
	public Integer getOrderNum() {
		return orderNum;
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
	 * 设置：类型：0目录，1菜单，2按钮
	 */
	public void setMenuType(Integer menuType) {
		this.menuType = menuType;
	}
	/**
	 * 获取：类型：0目录，1菜单，2按钮
	 */
	public Integer getMenuType() {
		return menuType;
	}
}
