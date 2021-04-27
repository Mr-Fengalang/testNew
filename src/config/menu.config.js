export const menuI = {
  state: 1,
  msg: '请求成功!',
  result: [
    {
      ID: 1,
      name: 'index',
      path: '/',
      component: 'BasicLayout',
      title: 'menu.home',
      icon: 'home',
      keepAlive: true,
      permission: 'index',
      parentId: 0,
      hidden: false,
      redirect: '/workbench',
      subTitle: '主页'
    },
    {
      ID: 2,
      name: 'workbench',
      path: '/workbench',
      component: 'workbench/WorkBench',
      title: 'menu.workbench',
      icon: 'workbenchIcon',
      keepAlive: true,
      permission: 'workbench',
      parentId: 1,
      hidden: false,
      redirect: null,
      subTitle: '工作台'
    },
    {
      ID: 3,
      name: 'permission',
      path: '/permission',
      component: 'RouteView',
      title: 'menu.permission',
      icon: 'integratedIcon',
      keepAlive: true,
      permission: 'permission',
      parentId: 1,
      hidden: false,
      redirect: '/permission/admin',
      subTitle: '权限管理'
    },
    {
      ID: 4,
      name: 'admin',
      path: '/permission/admin',
      component: 'permission/admin',
      title: 'menu.permission.admin',
      icon: 'formIcon',
      keepAlive: true,
      permission: 'admin',
      parentId: 3,
      hidden: false,
      redirect: null,
      subTitle: '管理员权限列表'
    },
    {
      ID: 5,
      name: 'user',
      path: '/permission/user',
      component: 'permission/user',
      title: 'menu.permission.user',
      icon: 'formIcon',
      keepAlive: true,
      permission: 'user',
      parentId: 3,
      hidden: false,
      redirect: null,
      subTitle: '用户权限列表'
    },
    {
      ID: 6,
      name: 'role',
      path: '/permission/role',
      component: 'permission/role',
      title: 'menu.permission.role',
      icon: 'formIcon',
      keepAlive: true,
      permission: 'role',
      parentId: 3,
      hidden: false,
      redirect: null,
      subTitle: '角色列表'
    },
    // {
    //   ID: 5,
    //   name: 'personal',
    //   path: '/personal/center',
    //   component: 'personal/center',
    //   title: 'menu.personal.center',
    //   icon: 'idcard',
    //   keepAlive: true,
    //   permission: 'personal',
    //   parentId: 1,
    //   hidden: false,
    //   redirect: null,
    //   subTitle: '个人中心'
    // },
    // {
    //   ID: 6,
    //   name: 'system',
    //   path: '/system',
    //   component: 'RouteView',
    //   title: 'menu.system',
    //   icon: 'setting',
    //   keepAlive: true,
    //   permission: 'system',
    //   parentId: 1,
    //   hidden: false,
    //   redirect: '/system/userList',
    //   subTitle: '系统设置'
    // },
    // {
    //   ID: 7,
    //   name: 'user',
    //   path: '/system/user',
    //   component: 'system/user',
    //   title: 'menu.system.user',
    //   icon: 'team',
    //   keepAlive: true,
    //   permission: 'user',
    //   parentId: 6,
    //   hidden: false,
    //   redirect: null,
    //   subTitle: '用户列表'
    // },
    // {
    //   ID: 8,
    //   name: 'menu',
    //   path: '/system/menu',
    //   component: 'system/menu',
    //   title: 'menu.system.menu',
    //   icon: 'unordered-list',
    //   keepAlive: false,
    //   permission: 'menu',
    //   parentId: 6,
    //   hidden: false,
    //   redirect: null,
    //   subTitle: '菜单管理'
    // },
    // {
    //   ID: 9,
    //   name: 'role',
    //   path: '/system/role',
    //   component: 'system/role',
    //   title: 'menu.system.role',
    //   icon: 'solution',
    //   keepAlive: true,
    //   permission: 'role',
    //   parentId: 6,
    //   hidden: false,
    //   redirect: null,
    //   subTitle: '角色管理'
    // },
    // {
    //   ID: 10,
    //   name: 'permission',
    //   path: '/system/permission',
    //   component: 'system/permission',
    //   title: 'menu.system.permission',
    //   icon: 'key',
    //   keepAlive: true,
    //   permission: 'permission',
    //   parentId: 6,
    //   hidden: false,
    //   redirect: null,
    //   subTitle: '权限管理'
    // },
    // {
    //   ID: 11,
    //   name: 'logs',
    //   path: '/system/logs',
    //   component: 'system/logs',
    //   title: 'menu.system.logs',
    //   icon: 'profile',
    //   keepAlive: true,
    //   permission: 'logs',
    //   parentId: 6,
    //   hidden: false,
    //   redirect: null,
    //   subTitle: '操作日志'
    // },
    // {
    //   ID: 12,
    //   name: 'announcement',
    //   path: '/integrated/announcement',
    //   component: 'integrated/announcement',
    //   title: 'menu.integrated.Announcement',
    //   icon: 'notificationIcon',
    //   keepAlive: true,
    //   permission: 'announcement',
    //   parentId: 3,
    //   hidden: false,
    //   redirect: null,
    //   subTitle: '通知公告'
    // },
    // {
    //   ID: 13,
    //   name: 'organizational',
    //   path: '/integrated/organizational',
    //   component: 'integrated/organizational',
    //   title: 'menu.integrated.organizational',
    //   icon: 'apartmentIcon',
    //   keepAlive: true,
    //   permission: 'organizational',
    //   parentId: 3,
    //   hidden: false,
    //   redirect: null,
    //   subTitle: '组织架构'
    // },
    // {
    //   ID: 14,
    //   name: 'advancedTable',
    //   path: '/integrated/advancedTable',
    //   component: 'integrated/advancedTable',
    //   title: 'menu.integrated.advancedTable',
    //   icon: 'table',
    //   keepAlive: true,
    //   permission: 'advancedTable',
    //   parentId: 3,
    //   hidden: false,
    //   redirect: null,
    //   subTitle: '高级表格'
    // },
    // {
    //   ID: 15,
    //   name: 'features',
    //   path: '/features',
    //   component: 'RouteView',
    //   title: 'menu.features',
    //   icon: 'bars',
    //   keepAlive: true,
    //   permission: 'features',
    //   parentId: 1,
    //   hidden: false,
    //   redirect: '/features/qrcode',
    //   subTitle: '功能页'
    // },
    // {
    //   ID: 16,
    //   name: 'qrcode',
    //   path: '/features/qrcode',
    //   component: 'features/qrcode',
    //   title: 'menu.features.qrcode',
    //   icon: 'qrcode',
    //   keepAlive: true,
    //   permission: 'qrcode',
    //   parentId: 15,
    //   hidden: false,
    //   redirect: null,
    //   subTitle: '生成二维码'
    // },
    // {
    //   ID: 17,
    //   name: 'pictureEffect',
    //   path: '/toolpage/pictureEffect',
    //   component: 'toolpage/pictureEffect',
    //   title: 'menu.toolpage.pictureEffect',
    //   icon: 'pictureEffectIcon',
    //   keepAlive: true,
    //   permission: 'pictureEffect',
    //   parentId: 24,
    //   hidden: false,
    //   redirect: null,
    //   subTitle: '图片效果'
    // },
    // {
    //   ID: 18,
    //   name: 'multistage',
    //   path: '/toolpage/multistage',
    //   component: 'RouteView',
    //   title: 'menu.toolpage.multistage',
    //   icon: 'multistageIcon',
    //   keepAlive: true,
    //   permission: 'multistage',
    //   parentId: 24,
    //   hidden: false,
    //   redirect: '/toolpage/multistage/menu1/menu1-1',
    //   subTitle: '嵌套路由'
    // },
    // {
    //   ID: 19,
    //   name: 'quillEditor',
    //   path: '/features/quillEditor',
    //   component: 'features/quillEditor',
    //   title: 'menu.features.quillEditor',
    //   icon: 'quillEditorIcon',
    //   keepAlive: true,
    //   permission: 'quillEditor',
    //   parentId: 15,
    //   hidden: false,
    //   redirect: null,
    //   subTitle: '富文本编辑器'
    // },
    // {
    //   ID: 20,
    //   name: 'customDirective',
    //   path: '/features/customDirective',
    //   component: 'features/customDirective',
    //   title: 'menu.features.customDirective',
    //   icon: 'customDirectiveIcon',
    //   keepAlive: true,
    //   permission: 'customDirective',
    //   parentId: 15,
    //   hidden: false,
    //   redirect: null,
    //   subTitle: '自定义Vue指令'
    // },
    // {
    //   ID: 21,
    //   name: 'imageRecognition',
    //   path: '/features/imageRecognition',
    //   component: 'features/imageRecognition',
    //   title: 'menu.features.imageRecognition',
    //   icon: 'imageRecognitionIcon',
    //   keepAlive: true,
    //   permission: 'imageRecognition',
    //   parentId: 15,
    //   hidden: false,
    //   redirect: null,
    //   subTitle: '图像识别'
    // },
    // {
    //   ID: 22,
    //   name: 'chatRoom',
    //   path: '/features/chatRoom',
    //   component: 'features/chatRoom',
    //   title: 'menu.features.chatRoom',
    //   icon: 'chatRoomIcon',
    //   keepAlive: true,
    //   permission: 'chatRoom',
    //   parentId: 15,
    //   hidden: false,
    //   redirect: null,
    //   subTitle: '聊天室'
    // },
    // {
    //   ID: 23,
    //   name: 'advancedDetails',
    //   path: '/integrated/advancedDetails',
    //   component: 'integrated/advancedDetails',
    //   title: 'menu.integrated.advancedDetails',
    //   icon: 'detailsIcon',
    //   keepAlive: true,
    //   permission: 'advancedDetails',
    //   parentId: 3,
    //   hidden: false,
    //   redirect: null,
    //   subTitle: '高级详情'
    // },
    // {
    //   ID: 24,
    //   name: 'toolpage',
    //   path: '/toolpage',
    //   component: 'RouteView',
    //   title: 'menu.toolpage',
    //   icon: 'tool',
    //   keepAlive: true,
    //   permission: 'toolpage',
    //   parentId: 1,
    //   hidden: false,
    //   redirect: '/toolpage/pictureEffect',
    //   subTitle: '工具页'
    // },
    // {
    //   ID: 25,
    //   name: 'waterfall',
    //   path: '/features/waterfall',
    //   component: 'features/waterfall',
    //   title: 'menu.features.waterfall',
    //   icon: 'waterfallIcon',
    //   keepAlive: true,
    //   permission: 'waterfall',
    //   parentId: 15,
    //   hidden: false,
    //   redirect: null,
    //   subTitle: '瀑布流'
    // },
    // {
    //   ID: 26,
    //   name: 'musicPlayer',
    //   path: '/features/musicPlayer',
    //   component: 'features/musicPlayer',
    //   title: 'menu.features.musicPlayer',
    //   icon: 'musicPlayerIcon',
    //   keepAlive: true,
    //   permission: 'musicPlayer',
    //   parentId: 15,
    //   hidden: false,
    //   redirect: null,
    //   subTitle: '音乐播放器'
    // },
    // {
    //   ID: 27,
    //   name: 'videoPlayer',
    //   path: '/features/videoPlayer',
    //   component: 'features/videoPlayer',
    //   title: 'menu.features.videoPlayer',
    //   icon: 'videoPlayerIcon',
    //   keepAlive: true,
    //   permission: 'videoPlayer',
    //   parentId: 15,
    //   hidden: false,
    //   redirect: null,
    //   subTitle: '视频播放器'
    // },
    // {
    //   ID: 28,
    //   name: 'verify',
    //   path: '/toolpage/verify',
    //   component: 'toolpage/verify',
    //   title: 'menu.toolpage.verify',
    //   icon: 'block',
    //   keepAlive: true,
    //   permission: 'verify',
    //   parentId: 24,
    //   hidden: false,
    //   redirect: null,
    //   subTitle: '验证码'
    // },
    // {
    //   ID: 29,
    //   name: 'guide',
    //   path: '/toolpage/guide',
    //   component: 'toolpage/guide',
    //   title: 'menu.toolpage.guide',
    //   icon: 'guideIcon',
    //   keepAlive: true,
    //   permission: 'guide',
    //   parentId: 24,
    //   hidden: false,
    //   redirect: null,
    //   subTitle: '引导页'
    // },
    // {
    //   ID: 30,
    //   name: 'outerChain',
    //   path: 'https://gitee.com/xmwjackey/vue-admin-xmw-pro',
    //   component: 'toolpage/outerChain',
    //   title: 'menu.toolpage.outerChain',
    //   icon: 'link',
    //   keepAlive: true,
    //   permission: 'outerChain',
    //   parentId: 24,
    //   hidden: false,
    //   redirect: null,
    //   subTitle: '外链'
    // },
    // {
    //   ID: 31,
    //   name: 'cardFrom',
    //   path: '/toolpage/cardFrom',
    //   component: 'toolpage/cardFrom',
    //   title: 'menu.toolpage.cardFrom',
    //   icon: 'cardFromIcon',
    //   keepAlive: true,
    //   permission: 'cardFrom',
    //   parentId: 24,
    //   hidden: false,
    //   redirect: null,
    //   subTitle: '信用卡表单'
    // },
    // {
    //   ID: 32,
    //   name: 'menu1',
    //   path: '/toolpage/multistage/menu1',
    //   component: 'toolpage/multistage/menu1/menu1-1/index',
    //   title: 'menu.toolpage.multistage.menu1',
    //   icon: 'menu',
    //   keepAlive: true,
    //   permission: 'menu1',
    //   parentId: 18,
    //   hidden: false,
    //   redirect: '/toolpage/multistage/menu1/menu1-1',
    //   subTitle: '菜单1'
    // },
    // {
    //   ID: 33,
    //   name: 'menu2',
    //   path: '/toolpage/multistage/menu2',
    //   component: 'toolpage/multistage/menu2/index',
    //   title: 'menu.toolpage.multistage.menu2',
    //   icon: 'menu',
    //   keepAlive: true,
    //   permission: 'menu2',
    //   parentId: 18,
    //   hidden: false,
    //   redirect: null,
    //   subTitle: '菜单2'
    // },
    // {
    //   ID: 34,
    //   name: 'menu11',
    //   path: '/toolpage/multistage/menu1/menu1-1',
    //   component: 'toolpage/multistage/menu1/menu1-1/index',
    //   title: 'menu.toolpage.multistage.menu1.menu1-1',
    //   icon: 'menu',
    //   keepAlive: true,
    //   permission: 'menu11',
    //   parentId: 32,
    //   hidden: false,
    //   redirect: null,
    //   subTitle: '菜单1-1'
    // },
    // {
    //   ID: 35,
    //   name: 'dictionary',
    //   path: '/system/dictionary',
    //   component: 'system/dictionary',
    //   title: 'menu.system.dictionary',
    //   icon: 'dictionaryIcon',
    //   keepAlive: true,
    //   permission: 'dictionary',
    //   parentId: 6,
    //   hidden: false,
    //   redirect: null,
    //   subTitle: '字典管理'
    // },
    // {
    //   ID: 36,
    //   name: 'permission',
    //   path: '/permission',
    //   component: 'RouteView',
    //   title: 'menu.system.permission',
    //   icon: 'dictionaryIcon',
    //   keepAlive: true,
    //   permission: 'permission',
    //   parentId: 6,
    //   hidden: false,
    //   redirect: null,
    //   subTitle: '权限管理'
    // },
    // {
    //   ID: 38,
    //   name: 'permission',
    //   path: '/permission',
    //   component: 'RouteView',
    //   title: 'menu.permission',
    //   icon: 'integratedIcon',
    //   keepAlive: true,
    //   permission: 'permission',
    //   parentId: 1,
    //   hidden: false,
    //   redirect: '/integrated/advancedForm',
    //   subTitle: '综合组件'
    // },
    
  ]
}