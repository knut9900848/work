import Axios from 'axios'
export const checkAccessPermission = {
  methods: {
    checkPermission: function(userPermissions, accessPermission) {
      userPermissions.infludes(accessPermission) ? "Granted" : "Denied"
    },
  }
}