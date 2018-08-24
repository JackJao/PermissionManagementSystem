package com.jaon.demo.service;

import java.util.List;
import java.util.concurrent.TimeUnit;

/**
 * @author Gao
 * @date 2018/8/22 14:12
 */
public interface RedisService {

    /**
     * String 类型
     * @param key
     * @param value
     */
    void set(String key,Object value);

    /**
     * String 类型
     * @param key
     * @param value
     */
    void set(String key,String value);

    /**
     * String 类型
     * 使用value去替换指定key（已存在）的value值，从偏移量offset开始
     * @param key
     * @param value
     * @param offset
     */
    void set(String key,Object value,long offset);

    /**
     * String 类型
     * 使用value去替换指定key（已存在）的value值，从偏移量offset开始
     * @param key
     * @param value
     * @param offset
     */
    void set(String key,String value,long offset);

    /**
     * 储存key的value到指定单位时间后失效
     * @param key
     * @param value
     * @param timeout
     * @param unit
     */
    void set(String key,Object value,long timeout,TimeUnit unit);

    /**
     * 储存key的value到指定单位时间后失效
     * @param key
     * @param value
     * @param timeout
     * @param unit
     */
    void set(String key,String value,long timeout,TimeUnit unit);

    /**
     * 获取key值对应value的长度
     * @param key
     * @return
     */
    long size(String key);

    /**
     * 在已存在key的value后追加新的value值
     * @param key
     * @param value
     */
    void append(String key,String value);

    /**
     * 查询指定范围的list元素
     * @param key
     * @param start
     * @param end
     * @return
     */
    List<Object> range(String key,long start,long end);

    /**
     * 修减现有列表，从指定位置开始start，到指定位置结束end
     * @param key
     * @param start
     * @param end
     */
    void trim(String key,long start,long end);

    /**
     * 获取list类型元素的大小
     * @param key
     * @return
     */
    long listSize(String key);


    Boolean delete(String key);

    Object get(String key);
}
