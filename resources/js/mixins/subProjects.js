import Axios from 'axios'
export const getSubProjects = {
  methods: {
    getSubProjects: function (project) {
      // return the promise
      return axios.get('/api/projects/' + project + '/sub-projects')
        .then(response => {
          return response.data.subProjects
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
  },
}