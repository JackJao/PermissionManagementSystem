package com.jaon.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.connection.RedisPassword;
import org.springframework.data.redis.connection.RedisStandaloneConfiguration;
import org.springframework.data.redis.connection.jedis.JedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.serializer.JdkSerializationRedisSerializer;
import org.springframework.data.redis.serializer.RedisSerializer;
import org.springframework.data.redis.serializer.StringRedisSerializer;

/**
 * @author Gao
 * @date 2018/7/17 16:54
 */
@Configuration
public class RedisConfig {
    @Bean
    public RedisConnectionFactory redisConnectionFactory(){
        //如果什么参数都不设置，默认连接本地6379端口
        RedisStandaloneConfiguration cfg = new RedisStandaloneConfiguration("192.168.0.244",6379);
        cfg.setDatabase(4);
        cfg.setPassword(RedisPassword.none());
        JedisConnectionFactory factory = new JedisConnectionFactory(cfg);
        return factory;
    }

    @Bean
    public RedisTemplate<String,Object> redisTemplate(RedisConnectionFactory redisConnectionFactory){
        //创建一个模板类
        RedisTemplate<String, Object> template = new RedisTemplate<String, Object>();
        //将刚才的redis连接工厂设置到模板类中
        template.setConnectionFactory(redisConnectionFactory);
        //设置默认使用String的序列化储存key-value
        RedisSerializer<String> stringSerializer = new StringRedisSerializer();
        //默认值修改
        //template.setDefaultSerializer(stringSerializer);
        //设置key采用String的序列化
        template.setKeySerializer(stringSerializer);
        template.setHashKeySerializer(stringSerializer);
        RedisSerializer<Object> JdkSerializer = new JdkSerializationRedisSerializer();
        //设置value采用jdk的序列化
        template.setValueSerializer(JdkSerializer);
        template.setHashValueSerializer(JdkSerializer);
        return template;
    }

    @Bean
    public StringRedisTemplate stringRedisTemplate(RedisConnectionFactory redisConnectionFactory){
        return new StringRedisTemplate(redisConnectionFactory);
    }
}
