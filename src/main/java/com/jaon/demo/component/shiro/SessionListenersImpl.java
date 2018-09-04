package com.jaon.demo.component.shiro;

import org.apache.shiro.session.Session;
import org.apache.shiro.session.SessionListenerAdapter;
import org.springframework.stereotype.Component;

/**
 * @author Gao
 * @date 2018/9/4 11:10
 * 该类可以记录session会话的状态，特殊场景使用
 * 实现SessionListener或者
 * 继承SessionListenerAdapter重写其中的方法
 */
@Component
public class SessionListenersImpl extends SessionListenerAdapter {


    @Override
    public void onStart(Session session) {
        super.onStart(session);
        System.out.println("session on start");
    }

    @Override
    public void onStop(Session session) {
        super.onStop(session);
        System.out.println("session on stop");
    }

    @Override
    public void onExpiration(Session session) {
        super.onExpiration(session);
        System.out.println("session on ecpiration");
    }
}
