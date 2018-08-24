package com.jaon.demo.mapper;

import com.jaon.demo.domain.SysDept;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * 部门/机构表
 * 
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-08-23 10:50:29
 */
@Mapper
@Repository
public interface SysDeptMapper {

    SysDept selectById(Long id);

    int deleteById(Long id);

    int deleteLogicalById(Long id);

    int insert(SysDept sysDept);

    int update(SysDept sysDept);

    SysDept selectOneByParams(Map params);

    List<SysDept> selectListByParams(Map params);

    int countByParams(Map params);

    List<SysDept> selectPageByParams(Map params);
}
