package com.jaon.demo.mapper;

import com.jaon.demo.domain.SysUser;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * 用户表
 * 
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-08-23 10:50:29
 */
@Mapper
@Repository
public interface SysUserMapper {

    SysUser selectById(Long id);

    int deleteById(Long id);

    int insert(SysUser sysUser);

    int update(SysUser sysUser);

    SysUser selectOneByParams(Map params);

    SysUser selectOne(SysUser sysUser);

    List<SysUser> selectListByParams(Map params);

    int countByParams(Map params);

    List<SysUser> selectPageByParams(Map params);

    List<String> selectAllPerms(Long id);

    List<Integer> selectAllRoles(Long id);
}
