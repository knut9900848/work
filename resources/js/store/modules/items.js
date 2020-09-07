import Axios from 'axios'

const state = {
  items: [],
  item: {
    id: '',
    name: '',
    size: '',
    price: 0,
    discount: 0,
    tax: 0,
    quantity: 0,
    unit: '',
    description: '',
  },
  resetItem: {
    id: '',
    name: '',
    size: '',
    price: 0,
    discount: 0,
    tax: 0,
    quantity: 0,
    unit: '',
    description: '',
  },
}

const getters = {
  totalPrice(state) {
    return state.items.reduce((acc, item) => {
      return acc + parseFloat(item.price * item.quantity)
    }, 0);
  },

  totalDiscount(state) {
    return state.items.reduce((acc, item) => {
      return acc + parseFloat(item.discount + 0)
    }, 0);
  },

  totalTax(state) {
    return state.items.reduce((acc, item) => {
      return acc + parseFloat((item.price * item.quantity - item.discount) / 100 * item.tax)
    }, 0);
  },

  grandTotal(state, getters) {
    return parseFloat(getters.totalPrice - getters.totalDiscount + getters.totalTax)
  },
}

const mutations = {
  ADD_ITEM: (state) => {
    state.items.push({ ...state.item })
  },

  RESET_ITEM: (state) => {
    Object.assign(state.item, state.resetItem)
  },

  REMOVE_ITEM: (state, item) => {
    const index = state.items.indexOf(item)
    state.items.splice(index, 1)
  },

  EDIT_ITEM: (state, item) => {
    Object.assign(state.item, item)
  },

  UPDATE_ITEM: (state, index) => {
    Object.assign(state.items[index], state.item)
  },

  INIT_ITEM_LIST: (state, items) => {
    state.items = Object.assign([], items)
  },

  RESET_ITEM_LIST: (state) => {
    state.items = []
  },
}

const actions = {

  SAVE_ITEMS: ({ commit }, payload) => {
    Axios.post('/api/items', { items: payload.items, model: payload.model, model_id: payload.model_id })
      .then(response => {
      })
      .catch(error => {
      })
  },

  RESET_ITEM_LIST: ({ commit }) => {
    commit('RESET_ITEM_LIST')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}