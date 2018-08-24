package com.jaon.demo.service.impl;

import com.jaon.demo.service.RedisService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.concurrent.TimeUnit;

/**
 * @author Gao
 * @date 2018/8/22 14:12
 */
@Service("redisService")
public class RedisServiceImpl implements RedisService {

    private static final Logger LOG = LoggerFactory.getLogger(RedisServiceImpl.class);

    @Resource
    private StringRedisTemplate stringRedisTemplate;
    @Resource
    private RedisTemplate redisTemplate;

    @Override
    public void set(String key, Object value) {
        redisTemplate.opsForValue().set(key,value);
    }

    @Override
    public void set(String key, String value) {
        stringRedisTemplate.opsForValue().set(key,value);
    }

    @Override
    public void set(String key, Object value, long offset) {
        redisTemplate.opsForValue().set(key,value,offset);
    }

    @Override
    public void set(String key, String value, long offset) {
        stringRedisTemplate.opsForValue().set(key,value,offset);
    }

    @Override
    public void set(String key, Object value, long timeout, TimeUnit unit) {
        redisTemplate.opsForValue().set(key,value,timeout,unit);
    }

    @Override
    public void set(String key, String value, long timeout, TimeUnit unit) {
        stringRedisTemplate.opsForValue().set(key,value,timeout,unit);
    }

    @Override
    public long size(String key) {
        return stringRedisTemplate.opsForValue().size(key);
    }

    @Override
    public void append(String key, String value) {
        stringRedisTemplate.opsForValue().append(key,value);
    }

    @Override
    public List<Object> range(String key, long start, long end) {
        return  redisTemplate.opsForList().range(key,start,end);
    }

    @Override
    public void trim(String key, long start, long end) {
        stringRedisTemplate.opsForList().trim(key,start,end);
    }

    @Override
    public long listSize(String key) {
        return stringRedisTemplate.opsForList().size(key);
    }

    @Override
    public Boolean delete(String key) {
        return redisTemplate.delete(key);
    }

    @Override
    public Object get(String key) {
       return  redisTemplate.opsForValue().get(key);
    }


}
