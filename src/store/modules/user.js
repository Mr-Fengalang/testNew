import storage from 'store'
import router from '@/router'
import { login, logout } from '@/api/login'
import { Menu } from '@/api/system'
import { ACCESS_TOKEN, USER_INFO, SET_LOCK_PASSWD, IS_LOCK, LOCK_PATH } from '@/store/mutation-types'   
import { welcome } from '@/utils/util'
const aa={
  'state': 1,
  'msg': '登录成功!',
  'result': {
      'UserID': 1,
      'username': 'admin',
      'password': 'd9dPYdz8+ZmsXaEXhJ3dSg==',
      'CnName': 'Fengalang',
      'Phone': '15920157932',
      'Email': '843348394@qq.com',
      'SEX': 0,
      'Status': 1,
      'CreateTime': '2020-09-09 10:28:58',
      'UpdateLastTime': '2021-01-22 13:57:30',
      'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJkOWRQWWR6OCtabXNYYUVYaEozZFNnPT0iLCJhbGl5dW5WZXJpZnkiOnRydWUsImlhdCI6MTYxODIyMDM3MywiZXhwIjoxNjE4NDc5NTczfQ.bgsVm-GaOQHFeKOkEJ1ddno93spqnak5Q5D-I6Z3BaQ',
      'LoginIP': '183.160.77.1',
      'avatar': 'https://pthome.net/bitbucket/83334020_p1.png',
      'LoginLastTime': '2021-04-12 17:30:18',
      'motto': '我曾踏足山巅，也曾进入低谷，二者都让我受益良多。',
      'label': '[]',
      'address': '["广东省","广州市","天河区"]',
      'SectorJobs': '["董事会","总经理","研发部经理","java工程师"]',
      'department': '["阿里巴巴","研发部","移动源","环检组"]',
      'roleList': '["超级管理员"]',
      'loginNum': 583,
      'expiresIn': 259200,
      'role': {
          'permissions': [{
              'permissionId': 'workbench',
              'permissionName': '工作台',
              'actionList': ['view'],
              'roleId': 'admin',
              'actions': []
          }, {
              'permissionId': 'integrated',
              'permissionName': '综合组件',
              'actionList': [],
              'roleId': 'admin',
              'actions': []
          }, {
            'permissionId': 'admin',
            'permissionName': '管理员权限列表',
            'actionList': [],
            'roleId': 'admin',
            'actions': []
        },{
              'permissionId': 'advancedForm',
              'permissionName': '高级表单',
              'actionList': ['view', 'edit', 'delete', 'add'],
              'roleId': 'admin',
              'actions': []
          }, {
              'permissionId': 'announcement',
              'permissionName': '通知公告',
              'actionList': ['view', 'query', 'delete', 'edit'],
              'roleId': 'admin',
              'actions': []
          }, {
              'permissionId': 'organizational',
              'permissionName': '组织架构',
              'actionList': ['view', 'delete', 'edit', 'query', 'add'],
              'roleId': 'admin',
              'actions': []
          }, {
              'permissionId': 'advancedTable',
              'permissionName': '高级表格',
              'actionList': ['view', 'query', 'edit', 'delete', 'add', 'import', 'export'],
              'roleId': 'admin',
              'actions': []
          }, {
              'permissionId': 'advancedDetails',
              'permissionName': '高级详情',
              'actionList': ['view'],
              'roleId': 'admin',
              'actions': []
          }, {
              'permissionId': 'personal',
              'permissionName': '个人中心',
              'actionList': ['add', 'edit', 'password', 'view'],
              'roleId': 'admin',
              'actions': []
          }, {
              'permissionId': 'system',
              'permissionName': '系统设置',
              'actionList': [],
              'roleId': 'admin',
              'actions': []
          }, {
              'permissionId': 'user',
              'permissionName': '用户列表',
              'actionList': ['add', 'delete', 'edit', 'query', 'view'],
              'roleId': 'admin',
              'actions': []
          }, {
              'permissionId': 'menu',
              'permissionName': '菜单管理',
              'actionList': ['add', 'delete', 'edit', 'query', 'view'],
              'roleId': 'admin',
              'actions': []
          }, {
              'permissionId': 'role',
              'permissionName': '角色管理',
              'actionList': ['add', 'delete', 'edit', 'query', 'view'],
              'roleId': 'admin',
              'actions': []
          }, {
              'permissionId': 'permission',
              'permissionName': '权限管理',
              'actionList': ['edit', 'query', 'view'],
              'roleId': 'admin',
              'actions': []
          }, {
              'permissionId': 'logs',
              'permissionName': '操作日志',
              'actionList': ['query', 'view'],
              'roleId': 'admin',
              'actions': []
          }, {
              'permissionId': 'dictionary',
              'permissionName': '字典管理',
              'actionList': ['view', 'add', 'delete', 'query', 'edit'],
              'roleId': 'admin',
              'actions': []
          }, {
              'permissionId': 'features',
              'permissionName': '功能页',
              'actionList': [],
              'roleId': 'admin',
              'actions': []
          }, {
              'permissionId': 'qrcode',
              'permissionName': '生成二维码',
              'actionList': ['view', 'delete', 'edit', 'add'],
              'roleId': 'admin',
              'actions': []
          }, {
              'permissionId': 'quillEditor',
              'permissionName': '富文本编辑器',
              'actionList': ['view'],
              'roleId': 'admin',
              'actions': []
          }, {
              'permissionId': 'customDirective',
              'permissionName': '自定义Vue指令',
              'actionList': ['view'],
              'roleId': 'admin',
              'actions': []
          }, {
              'permissionId': 'imageRecognition',
              'permissionName': '图像识别',
              'actionList': ['view'],
              'roleId': 'admin',
              'actions': []
          }, {
              'permissionId': 'chatRoom',
              'permissionName': '聊天室',
              'actionList': ['view'],
              'roleId': 'admin',
              'actions': []
          }, {
              'permissionId': 'waterfall',
              'permissionName': '瀑布流',
              'actionList': ['view'],
              'roleId': 'admin',
              'actions': []
          }, {
              'permissionId': 'musicPlayer',
              'permissionName': '音乐播放器',
              'actionList': ['view'],
              'roleId': 'admin',
              'actions': []
          }, {
              'permissionId': 'videoPlayer',
              'permissionName': '视频播放器',
              'actionList': ['view'],
              'roleId': 'admin',
              'actions': []
          }, {
              'permissionId': 'lazyLoad',
              'permissionName': '懒加载',
              'actionList': ['view'],
              'roleId': 'admin',
              'actions': []
          }, {
              'permissionId': 'toolpage',
              'permissionName': '工具页',
              'actionList': [],
              'roleId': 'admin',
              'actions': []
          }, {
              'permissionId': 'pictureEffect',
              'permissionName': '图片效果',
              'actionList': ['view'],
              'roleId': 'admin',
              'actions': []
          }, {
              'permissionId': 'multistage',
              'permissionName': '嵌套路由',
              'actionList': [],
              'roleId': 'admin',
              'actions': []
          }, {
              'permissionId': 'menu1',
              'permissionName': '菜单1',
              'actionList': [],
              'roleId': 'admin',
              'actions': []
          }, {
              'permissionId': 'menu11',
              'permissionName': '菜单1-1',
              'actionList': ['view'],
              'roleId': 'admin',
              'actions': []
          }, {
              'permissionId': 'menu2',
              'permissionName': '菜单2',
              'actionList': ['view'],
              'roleId': 'admin',
              'actions': []
          }, {
              'permissionId': 'verify',
              'permissionName': '验证码',
              'actionList': ['view'],
              'roleId': 'admin',
              'actions': []
          }, {
              'permissionId': 'guide',
              'permissionName': '引导页',
              'actionList': ['view'],
              'roleId': 'admin',
              'actions': []
          }, {
              'permissionId': 'outerChain',
              'permissionName': '外链',
              'actionList': ['view'],
              'roleId': 'admin',
              'actions': []
          }, {
              'permissionId': 'cardFrom',
              'permissionName': '信用卡表单',
              'actionList': ['view'],
              'roleId': 'admin',
              'actions': []
          }, {
              'roleId': 'admin',
              'permissionId': 'index',
              'permissionName': '主页',
              'actionList': []
          }, {
            'roleId': 'admin',
            'permissionId': 'permission',
            'permissionName': '权限管理',
            'actionList': []
        }]
      }
  }
}

function deepCopy(obj) {
  let objClone = Array.isArray(obj) ? [] : {};
  if (obj && typeof obj === "object") {
    for (let key in obj) {
      if (obj[key] && typeof obj[key] === "object") {
        objClone[key] = deepCopy(obj[key]);
      } else {
        objClone[key] = obj[key];
      }
    }
  }
  return objClone;
}

var role = {
  'permissions':[{
    'permissionId': 'workbench',
    'permissionName': '工作台',
    'actionList': ['view'],
    'roleId': 'admin',
    'actions': []
},]
};
function ffff(routerMaps) {
  let routerMap = deepCopy(routerMaps);
  routerMap.map((a) => {
    if (a.resourceType=="MENU") {
        if (a.childs) {
            ffff(a.childs);
        }
        var pushList={}
        pushList.permissionId=a.resourceCode.split(':').pop()
        pushList.permissionName=a.resourceName
        pushList.actionList=[]
        pushList.roleId="admin"
        pushList.actions=[]
        role.permissions.push(pushList)
    } 
  });
}
const user = {
    state: {
        token: '123123',
        name: '',
        welcome: '',
        avatar: '',
        roles: [],
        info: {},
        lockPasswd: storage.get(SET_LOCK_PASSWD) || '',
        isLock: storage.get(IS_LOCK) || false,
        lockPath: ''
    },

    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_NAME: (state, { name, welcome }) => {
            state.name = name
            state.welcome = welcome
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles
        },
        SET_INFO: (state, info) => {
            state.info = info
        },
        SET_LOCK_PASSWD: (state, lockPasswd) => {
            state.lockPasswd = lockPasswd
            state.lockPath = router.app._route.path
            storage.set(SET_LOCK_PASSWD, lockPasswd)
            storage.set(LOCK_PATH, router.app._route.path)
        },
        SET_LOCK: (state) => {
            state.isLock = true
            storage.set(IS_LOCK, true)
        },
        CLEAR_LOCK: (state) => {
            state.isLock = false;
            state.lockPasswd = '';
            state.lockPath = ''
            storage.set(IS_LOCK, false)
            storage.set(SET_LOCK_PASSWD, '')
            storage.set(LOCK_PATH, '')
        }
    },

    actions: {
        // 登录
        Login({ commit }, userInfo) {
            return new Promise((resolve, reject) => {
                login(userInfo).then(response => {
                    if (response.success) {
                      console.log(response);
                      var result = response
                      storage.set(ACCESS_TOKEN, result.data)
                      commit('SET_TOKEN', result.data)
                      result.label = JSON.parse(aa.result.label)
                      result.department = JSON.parse(aa.result.department)
                      result.SectorJobs = JSON.parse(aa.result.SectorJobs)
                      result.address = JSON.parse(aa.result.address)
                      Menu().then(res=>{
                        ffff(res.data)
                        aa.result.role=role
                      })
                      storage.set(USER_INFO, aa.result)
                      commit('SET_INFO', aa.result)
                    }
                    resolve(response)
                }).catch(error => {
                    reject(error)
                }).then(()=>{
                  // Menu().then(res=>{
                  //   ffff(res.data)
                  //   aa.result.role=role
                  //   console.log(aa.result.role,111111111111111111111);
                  //   storage.remove(USER_INFO)
                  //   storage.set(USER_INFO, aa.result)
                  //   commit('SET_INFO', aa.result)
                  // })
                  // console.log(123123123);
                })
            })
        },

        // 获取用户信息
        GetInfo({ commit }) {
            return new Promise((resolve, reject) => {
              
                const result = user.state.info
                if (result.role && result.role.permissions.length > 0) {
                    const role = result.role
                    role.permissions = result.role.permissions
                    role.permissions.map(per => {
                        if (per.actionEntitySet != null && per.actionEntitySet.length > 0) {
                            const action = per.actionEntitySet.map(action => { return action.action })
                            per.actionList = action
                        }
                    })
                    role.permissionList = role.permissions.map(permission => { return permission.permissionId })
                    commit('SET_ROLES', result.role)
                } else {
                    reject(new Error('没有路由权限 !'))
                }

                commit('SET_NAME', { name: result.CnName, welcome: welcome() })
                commit('SET_AVATAR', result.avatar)

                resolve(result)
            })
        },

        // 登出
        Logout({ commit, state }) {
          storage.remove(ACCESS_TOKEN)
                    storage.remove(USER_INFO)
            // return new Promise((resolve, reject) => {
            //     logout().then(() => {
            //         commit('SET_TOKEN', '')
            //         commit('SET_ROLES', [])
            //         storage.remove(ACCESS_TOKEN)
            //         storage.remove(USER_INFO)
            //         storage.remove(SET_LOCK_PASSWD)
            //         storage.remove(IS_LOCK)
            //         storage.remove(LOCK_PATH)
            //         resolve()
            //     }).catch(error => {
            //         reject(error)
            //     })
            // })
        }

    }
}

export default user
