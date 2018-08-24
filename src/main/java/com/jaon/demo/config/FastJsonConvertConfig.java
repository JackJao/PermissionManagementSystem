package com.jaon.demo.config;

import com.alibaba.fastjson.serializer.SerializerFeature;
import com.alibaba.fastjson.support.config.FastJsonConfig;
import com.alibaba.fastjson.support.spring.FastJsonHttpMessageConverter;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;

/**
 * 配置spring mvc restful接口返回的json数据的json格式
 *
 *
 SerializerFeature.PrettyFormat:格式化输出
 SerializerFeature.WriteMapNullValue:是否输出值为null的字段,默认为false
 SerializerFeature.DisableCircularReferenceDetect:消除循环引用
 SerializerFeature.WriteNullStringAsEmpty:将为null的字段值显示为""
 WriteNullListAsEmpty：List字段如果为null,输出为[],而非null
 WriteNullNumberAsZero：数值字段如果为null,输出为0,而非null
 WriteNullBooleanAsFalse：Boolean字段如果为null,输出为false,而非null
 SkipTransientField：如果是true，类中的Get方法对应的Field是transient，序列化时将会被忽略。默认为true
 SortField：按字段名称排序后输出。默认为false
 WriteDateUseDateFormat：全局修改日期格式,默认为false。JSON.DEFFAULT_DATE_FORMAT = “yyyy-MM-dd”;JSON.toJSONString(obj, SerializerFeature.WriteDateUseDateFormat);
 BeanToArray：将对象转为array输出
 QuoteFieldNames：输出key时是否使用双引号,默认为true
 UseSingleQuotes：输出key时使用单引号而不是双引号,默认为false（经测试，这里的key是指所有的输出结果，而非key/value的key,而是key,和value都使用单引号或双引号输出）
 */
@Configuration
public class FastJsonConvertConfig implements WebMvcConfigurer {

    /**
     * 利用fastjson替换掉jackson，且解决中文乱码问题
     * @param converters
     */
    @Override
    public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
        FastJsonHttpMessageConverter fastConverter = new FastJsonHttpMessageConverter();
        FastJsonConfig fastJsonConfig = new FastJsonConfig();
        //漂亮的格式，会处理null属性，返回结果不包含null属性
        fastJsonConfig.setSerializerFeatures(SerializerFeature.PrettyFormat,SerializerFeature.WriteDateUseDateFormat);
        //处理中文乱码问题
        List<MediaType> fastMediaTypes = new ArrayList<>();
        MediaType html = new MediaType(MediaType.TEXT_HTML, Charset.defaultCharset());
        fastMediaTypes.add(html);
        fastMediaTypes.add(MediaType.APPLICATION_JSON_UTF8);
        fastConverter.setSupportedMediaTypes(fastMediaTypes);
        //设置日期格式，配置了SerializerFeature.WriteDateUseDateFormat,默认"yyyy-MM-dd HH:mm:ss"
        //未配置的时候默认是时间戳
        //fastJsonConfig.setDateFormat("yyyy-MM-dd");
        fastConverter.setFastJsonConfig(fastJsonConfig);
        converters.add(fastConverter);
    }

}