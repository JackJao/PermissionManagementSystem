/**
 * Copyright 2018 人人开源 http://www.renren.io
 * <p>
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * <p>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

package com.jaon.demo.component.shiro;


import com.jaon.demo.domain.SysUser;
import com.jaon.demo.mapper.SysUserMapper;
import com.jaon.demo.utils.ShiroUtils;
import org.apache.shiro.authc.*;
import org.apache.shiro.authc.credential.CredentialsMatcher;
import org.apache.shiro.authc.credential.HashedCredentialsMatcher;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.crypto.hash.Md5Hash;
import org.apache.shiro.crypto.hash.Sha256Hash;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.util.ByteSource;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * 认证
 */
@Component
public class UserRealm extends AuthorizingRealm {
    @Resource
    private SysUserMapper sysUserMapper;

    /**
     * 授权(验证权限时调用)
     */
	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
		SysUser user = (SysUser)principals.getPrimaryPrincipal();
		Long id = user.getId();
		//查询当前用户的所有权限
		List<String> permsList = sysUserMapper.selectAllPerms(id);
		//查询当前用户的所有角色
		List<Integer> roleList = sysUserMapper.selectAllRoles(id);
		//用户权限列表,去重复
		Set<String> permsSet = new HashSet<>();
		for(String perms : permsList){
			if(null == perms && perms.isEmpty()){
				continue;
			}
			permsSet.addAll(Arrays.asList(perms.trim().split(",")));
		}
		Set<String> roleSet = new HashSet<>();
		for (Integer role:roleList){
			if(null == role){
				continue;
			}
			roleSet.add(role.toString());
		}
		//告知shiro当前用用户的权限资源和角色信息
		SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();
		info.setStringPermissions(permsSet);
		info.setRoles(roleSet);
		return info;
	}

	/**
	 * 认证(登录时调用)
	 */
	@Override
	protected AuthenticationInfo doGetAuthenticationInfo(
			AuthenticationToken authcToken) throws AuthenticationException {
		UsernamePasswordToken token = (UsernamePasswordToken)authcToken;

		//查询用户信息
		SysUser user = new SysUser();
		user.setUsername(token.getUsername());
		user = sysUserMapper.selectOne(user);

		//账号不存在
		if(user == null) {
			throw new UnknownAccountException("账号或密码不正确");
		}

		//账号锁定
		if(user.getStatus()){
			throw new LockedAccountException("账号已被禁用,请联系管理员");
		}
		//sha256加密
		//ShiroUtils.sha256(user.getPassword(), user.getSalt())
		SimpleAuthenticationInfo info = new SimpleAuthenticationInfo(user,user.getPassword() , ByteSource.Util.bytes(user.getSalt()), this.getName());
		return info;
	}

	/**
	 * 让shiro凭证管理器
	 * 使用散列凭证匹配器对用户就行凭证认证
	 * @param credentialsMatcher
	 */
	@Override
	public void setCredentialsMatcher(CredentialsMatcher credentialsMatcher) {
		HashedCredentialsMatcher shaCredentialsMatcher = new HashedCredentialsMatcher();
		//设置hash算法名称
		shaCredentialsMatcher.setHashAlgorithmName(ShiroUtils.hashAlgorithmName);
		//设置hash迭代次数
		shaCredentialsMatcher.setHashIterations(ShiroUtils.hashIterations);
		super.setCredentialsMatcher(shaCredentialsMatcher);
	}
}
