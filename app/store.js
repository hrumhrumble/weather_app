import Vue from 'vue'
import Vuex from 'vuex'
import state from './store/state'
import mutations from './store/mutations'
import actions from './store/actions'
import plugins from './store/plugins'

Vue.use(Vuex);

export default new Vuex.Store({state, mutations, actions, plugins});
