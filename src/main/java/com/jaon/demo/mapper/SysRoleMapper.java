package com.jaon.demo.mapper;

import com.jaon.demo.domain.SysRole;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * 角色表
 * 
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-08-23 10:50:29
 */
@Mapper
@Repository
public interface SysRoleMapper {

    SysRole selectById(Long id);

    int deleteById(Long id);

    int insert(SysRole sysRole);

    int update(SysRole sysRole);

    SysRole selectOneByParams(Map params);

    List<SysRole> selectListByParams(Map params);

    int countByParams(Map params);

    List<SysRole> selectPageByParams(Map params);
}
