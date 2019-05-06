import { setToken, getToken } from '@/libs/util'

export default {
  state: {
    userName: '',
    userId: '',
    avatorImgPath: '',
    token: getToken(),
    access: '',
    hasGetInfo: false
  },
  mutations: {
    setAvator (state, avatorPath) {
      state.avatorImgPath = avatorPath
    },
    setUserId (state, id) {
      state.userId = id
    },
    setUserName (state, name) {
      state.userName = name
    },
    setAccess (state, access) {
      state.access = access
    },
    setToken (state, token) {
      state.token = token;
      setToken(token)
    },
    setHasGetInfo (state, status) {
      state.hasGetInfo = status
    }
  },
  actions: {
    // 登录
    handleLogin ({ commit }, {id, userName, token}) {
      return new Promise((resolve, reject) => {
        commit('setAvator', 'https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png');
        commit('setUserId', id);
        commit('setUserName', userName);
        commit('setToken', token);
        commit('setAccess', [token]);
        resolve();
      })
    },
    
    // 退出登录
    handleLogOut ({ state, commit }) {
      return new Promise((resolve) => {
        commit('setToken', '');
        commit('setAccess', []);
        resolve();
      })
    },
    
    // 获取用户相关信息
    getUserInfo ({ state, commit }) {
      return new Promise((resolve, reject) => {
        resolve({
          name: state.userName,
          user_id: state.userId,
          access: state.access,
          token: getToken(),
          avator: state.avatorImgPath
        })
      })
    }
  }
}
