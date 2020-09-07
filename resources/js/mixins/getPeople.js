import Axios from 'axios'
export const getPeople = {
  methods: {
    getEmployees: function (model, model_id) {
      // return the promise
      return axios.get('/api/employees/' + model + '/' + model_id)
        .then(response => {
          return response.data.employees
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
  },
}