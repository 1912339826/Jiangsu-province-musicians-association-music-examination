import Vue from 'vue'
import Router from 'vue-router'
import box from '../pages/box/index.vue'
// 主页
import home from '../pages/box/home/index.vue'
// 推荐
import recommend from '../pages/box/recommend/index.vue'
// 我的
import my from '../pages/box/my/index.vue'
// 教材详情
import defaults from '../pages/details/index.vue'
// 音乐资讯 
import information from '../pages/information/index.vue'
// 音乐资讯详情
import informationDetail from '../pages/information/informationDetail/index.vue'
// 考级简章
import TestInstructions from '../pages/TestInstructions/index.vue'
// 考试流程
import FlowPath from '../pages/FlowPath/index.vue'
// 考试流程详情
import FlowPathDetail from '../pages/FlowPath/FlowPathDetail/index.vue'
// 联系我们
import ContactUs from '../pages/ContactUs/index.vue'
// 隐私政策
import PrivacyPolicy from '../pages/PrivacyPolicy/index.vue'
Vue.use(Router)

export default new Router({
  routes: [{
      path: "/",
      redirect: '/box'
    },
    {
      path: '/box',
      name: 'box',
      component: box,
      meta: {
        title: ''
      },
      children: [{
          path: 'home',
          name: 'home',
          component: home,
          meta: {
  
            title: ''
          },
        },
        {
          path: 'recommend',
          name: 'recommend',
          component: recommend,
          meta: {
  
            title: '指定教材'
          },
        }, {
          path: 'my',
          name: 'my',
          component: my,
          meta: {
  
            title: ''
          },
        }
      ],
      redirect: '/box/home',
    },
    {
      path: "/defaults",
      name: 'defaults',
      component: defaults,
      meta: {
        title: '指定教材'
      },
    },
    {
      path: '/information',
      name: 'information',
      component: information,
      meta: {
        title: '音乐资讯'
      },
    }, {
      path: '/TestInstructions',
      name: 'TestInstructions',
      component: TestInstructions,
      meta: {
        title: '考级简章'
      },
    }, {
      path: '/FlowPath',
      name: 'FlowPath',
      component: FlowPath,
      meta: {
        title: '考级指南'
      },
    },
    {
      path: '/informationDetail',
      name: 'informationDetail',
      component: informationDetail,
      meta: {
        title: '音乐资讯'
      },
    },
    {
      path: '/FlowPathDetail',
      name: 'FlowPathDetail',
      component: FlowPathDetail,
      meta: {
        title: '考级指南'
      },
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component: ContactUs,
      meta: {
        title: '联系我们'
      },
    },
    {
      path: '/PrivacyPolicy',
      name: 'PrivacyPolicy',
      component: PrivacyPolicy,
      meta: {
        title: '隐私政策'
      },
    }
  ]
})
