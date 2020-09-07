import Axios from 'axios'
export const getSelectedItemData = {
  methods: {
    // getEmployees: function(company) {
    //   // return the promise
    //   return axios.get('/api/selected-item-data/'+company+'/employees')
    //     .then(response => {
    //       return response.data.data
    //     })
    //     .catch(e => {
    //       this.errors.push(e)
    //     })
    // },

    // getEmployeeEmail: function(employee) {
    //   return axios.get('/api/selected-item-data/' + employee + '/getEmail')
    //     .then(response => {
    //       return response.data.data
    //     })
    //     .catch(e => {
    //       this.errors.push(e)
    //     })
    // },

    getDepartments: function (branch) {
      return axios.get('/api/selected-item-data/departments/' + branch)
        .then(response => {
          return response.data.departments
        })
        .catch(e => {
          this.errors.push(e)
        })
    },

    getPositions: function (position) {
      return axios.get('/api/selected-item-data/positions/' + position)
        .then(response => {
          return response.data.positions
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  },
}

// export default getPeople;