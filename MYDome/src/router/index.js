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
      children: [{
          path: 'home',
          name: 'home',
          component: home
        },
        {
          path: 'recommend',
          name: 'recommend',
          component: recommend
        }, {
          path: 'my',
          name: 'my',
          component: my
        }
      ],
      redirect: '/box/home',
    },
    {
      path: "/defaults",
      name: 'defaults',
      component: defaults
    },
    {
      path: '/information',
      name: 'information',
      component: information
    }, {
      path: '/TestInstructions',
      name: 'TestInstructions',
      component: TestInstructions
    }, {
      path: '/FlowPath',
      name: 'FlowPath',
      component: FlowPath
    },
    {
      path: '/informationDetail',
      name: 'informationDetail',
      component: informationDetail
    },
    {
      path: '/FlowPathDetail',
      name: 'FlowPathDetail',
      component: FlowPathDetail
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component: ContactUs
    }
  ]
})
