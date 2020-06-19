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
// 考试须知
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
      meta:{
        KeepAlive:true
      },
      children: [{
          path: 'home',
          name: 'home',
          component: home,
          meta:{
            KeepAlive:true
          },
        },
        {
          path: 'recommend',
          name: 'recommend',
          component: recommend,
          meta:{
            KeepAlive:true
          },
        }, {
          path: 'my',
          name: 'my',
          component: my,
          meta:{
            KeepAlive:true
          },
        }
      ],
      redirect: '/box/home',
    },
    {
      path: "/defaults",
      name: 'defaults',
      component: defaults,
      meta:{
        KeepAlive:true
      },
    },
    {
      path: '/information',
      name: 'information',
      component: information,
      meta:{
        KeepAlive:true
      },
    }, {
      path: '/TestInstructions',
      name: 'TestInstructions',
      component: TestInstructions,
      meta:{
        KeepAlive:true
      },
    }, {
      path: '/FlowPath',
      name: 'FlowPath',
      component: FlowPath,
      meta:{
        KeepAlive:true
      },
    },
    {
      path: '/informationDetail',
      name: 'informationDetail',
      component: informationDetail,
      meta:{
        KeepAlive:false
      },
    },
    {
      path: '/FlowPathDetail',
      name: 'FlowPathDetail',
      component: FlowPathDetail,
      meta:{
        KeepAlive:true
      },
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component: ContactUs,
      meta:{
        KeepAlive:true
      },
    },
    {
      path: '/PrivacyPolicy',
      name: 'PrivacyPolicy',
      component: PrivacyPolicy,
      meta:{
        KeepAlive:false
      },
    }
  ]
})
