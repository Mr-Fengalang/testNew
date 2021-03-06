import antd from 'ant-design-vue/es/locale-provider/zh_CN'
import momentCN from 'moment/locale/zh-cn'

const components = {
    antLocale: antd,
    momentName: 'zh-cn',
    momentLocale: momentCN
}

const locale = {
    'message': '-',
    'menu.home': '主页',
    'menu.workbench': '工作台',
    'menu.integrated': '综合组件',
    'menu.permission': '权限管理',
    'menu.permission.admin': '管理员权限列表',
    'menu.permission.user': '用户权限列表',
    'menu.permission.role': '角色列表',
    'menu.integrated.advancedForm': '高级表单',
    'menu.integrated.organizational': '组织架构',
    'menu.integrated.advancedTable': '高级表格',
    'menu.integrated.Announcement': '通知公告',
    'menu.integrated.advancedDetails': '高级详情',
    'menu.features': '功能页',
    'menu.features.qrcode': '生成二维码',
    'menu.features.quillEditor': '富文本编辑器',
    'menu.features.customDirective': '自定义Vue指令',
    'menu.features.imageRecognition': '图像识别',
    'menu.features.chatRoom': '聊天室',
    'menu.features.waterfall': '瀑布流',
    'menu.features.musicPlayer': '音乐播放器',
    'menu.features.videoPlayer': '视频播放器',
    'menu.features.lazyLoad': '懒加载',
    'menu.toolpage': '工具页',
    'menu.toolpage.multistage': '嵌套路由',
    'menu.toolpage.multistage.menu1': '菜单1',
    'menu.toolpage.multistage.menu1.menu1-1': '菜单1-1',
    'menu.toolpage.multistage.menu2': '菜单2',
    'menu.toolpage.pictureEffect': '图片效果',
    'menu.toolpage.verify': '验证码',
    'menu.toolpage.guide': '引导页',
    'menu.toolpage.outerChain': '外链',
    'menu.toolpage.cardFrom': '信用卡表单',
    'menu.personal.center': '个人中心',
    'menu.system': '系统设置',
    'menu.system.logs': '操作日志',
    'menu.system.menu': '菜单管理',
    'menu.system.user': '用户列表',
    'menu.system.role': '角色管理',
    'menu.system.permission': '权限管理',
    'menu.system.dictionary': '字典管理',
    'menu.system.subDictionary': '字典子页',
    'layouts.usermenu.dialog.title': '确认操作',
    'layouts.usermenu.dialog.content': '你真的要退出吗?',
    'app.setting.pagestyle': '页面样式',
    'app.setting.pagestyle.light': '明亮模式',
    'app.setting.pagestyle.dark': '暗黑模式',
    'app.setting.pagestyle.realdark': '全黑模式',
    'app.setting.themecolor': '主体颜色',
    'app.setting.navigationmode': '导航模式',
    'app.setting.content-width': '内容宽度',
    'app.setting.fixedheader': '头部固定',
    'app.setting.fixedsidebar': '侧边栏固定',
    'app.setting.sidemenu': '侧边栏布局',
    'app.setting.topmenu': '顶部菜单布局',
    'app.setting.content-width.fixed': '固定',
    'app.setting.content-width.fluid': '流体',
    'app.setting.othersettings': '其他设置',
    'app.setting.weakmode': '弱模式',
    'app.setting.copy': '复制设置',
    'app.setting.loading': '主题加载',
    'app.setting.copyinfo': '复制成功，请替换默认设置 src/models/setting.js',
    'app.setting.production.hint': '设置面板只在开发环境中显示，请手动修改'
}

export default {
    ...components,
    ...locale
}
