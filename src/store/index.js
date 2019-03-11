import Vue from 'vue'
import Vuex from 'vuex'

import user from "./user"
Vue.use(Vuex)

// 创建仓库对象
export default new Vuex.Store({
	// 导入模块到参考对象生成数据
    modules: {
        user
    }
})