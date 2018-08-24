package com.jaon.demo.mapper;

import com.jaon.demo.domain.SysMenu;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * 菜单表
 * 
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-08-23 10:50:29
 */
@Mapper
@Repository
public interface SysMenuMapper {

    SysMenu selectById(Long id);

    int deleteById(Long id);

    int insert(SysMenu sysMenu);

    int update(SysMenu sysMenu);

    SysMenu selectOneByParams(Map params);

    List<SysMenu> selectListByParams(Map params);

    int countByParams(Map params);

    List<SysMenu> selectPageByParams(Map params);
}
