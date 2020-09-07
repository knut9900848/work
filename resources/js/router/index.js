import Vue from 'vue';
import store from '../store/index'
import Router from 'vue-router';

Vue.use(Router)

const Welcome = () => import(/* webpackChunkName: "Welcome" */ "../views/Welcome.vue")
const AccessDenied = () => import(/* webpackChunkName: "AccessDenied" */ "../views/AccessDenied.vue")
const Login = () => import(/* webpackChunkName: "Login" */ "../views/auth/Login.vue")
const AccountSetting = () => import(/* webpackChunkName: "AccountSetting" */ "../views/auth/AccountSetting.vue")
const MyPage = () => import(/* webpackChunkName: "MyPage" */ "../views/MyPage.vue")
const Dashboard = () => import(/* webpackChunkName: "Dashboard" */ "../views/Dashboard.vue")
const Work = () => import(/* webpackChunkName: "Work" */ "../views/Work.vue")
const DefaultData = () => import(/* webpackChunkName: "DefaultData" */ "../views/admin/DefaultData.vue")
const AdminMember = () => import(/* webpackChunkName: "AdminMember" */ "../views/admin/Member.vue")
const Role = () => import(/* webpackChunkName: "Role" */ "../views/admin/Role.vue")
const Permission = () => import(/* webpackChunkName: "Permission" */ "../views/admin/Permission.vue")
const Supplier = () => import(/* webpackChunkName: "Supplier" */ "../views/Supplier.vue")
const Company = () => import(/* webpackChunkName: "Company" */ "../views/Company.vue")
const Project = () => import(/* webpackChunkName: "Project" */ "../views/Project.vue")
const PurchaseOrder = () => import(/* webpackChunkName: "PurchaseOrder" */ "../views/PurchaseOrder.vue")
const Quotation = () => import(/* webpackChunkName: "Quotation" */ "../views/Quotation.vue")
const DeliveryNote = () => import(/* webpackChunkName: "DeliveryNote" */ "../views/DeliveryNote.vue")
const AccountTransaction = () => import(/* webpackChunkName: "AccountTransaction" */ "../views/AccountTransaction.vue")
const DailyReport = () => import(/* webpackChunkName: "DailyReport" */ "../components/report/DailyReport.vue")
const WeeklyReport = () => import(/* webpackChunkName: "WeeklyReport" */ "../components/report/WeeklyReport.vue")
const MonthlyReport = () => import(/* webpackChunkName: "MonthlyReport" */ "../components/report/MonthlyReport.vue")
const Ppe = () => import(/* webpackChunkName: "Ppe" */ "../views/Ppe.vue")

const rejectAuthUser = (to, from, next) => {
  const storageUserInfo = localStorage.getItem('storageUserInfo')
  if (!storageUserInfo) {
    next()
  } else {
    alert('You are already LoggedIn.')
    next("/")
  }
}

const dashboardAccessPermission = (to, from, next) => {
  const permissions = localStorage.getItem('storageUserPermissions')
  if (!permissions.includes('access-dashboard')) {
    next('/access-denied')
  } else {
    next()
  }
}

const workAccessPermission = (to, from, next) => {
  const permissions = localStorage.getItem('storageUserPermissions')
  if (!permissions.includes('access-work')) {
    next('/access-denied')
  } else {
    next()
  }
}

const quotationAccessPermission = (to, from, next) => {
  const permissions = localStorage.getItem('storageUserPermissions')
  if (!permissions.includes('access-quotation')) {
    next('/access-denied')
  } else {
    next()
  }
}

const purchaseOrderAccessPermission = (to, from, next) => {
  const permissions = localStorage.getItem('storageUserPermissions')
  if (!permissions.includes('access-purchase-order')) {
    next('/access-denied')
  } else {
    next()
  }
}

const deliveryNoteAccessPermission = (to, from, next) => {
  const permissions = localStorage.getItem('storageUserPermissions')
  if (!permissions.includes('access-delivery-note')) {
    next('/access-denied')
  } else {
    next()
  }
}

const companyAccessPermission = (to, from, next) => {
  const permissions = localStorage.getItem('storageUserPermissions')
  if (!permissions.includes('access-company')) {
    next('/access-denied')
  } else {
    next()
  }
}

const projectAccessPermission = (to, from, next) => {
  const permissions = localStorage.getItem('storageUserPermissions')
  if (!permissions.includes('access-project')) {
    next('/access-denied')
  } else {
    next()
  }
}

const supplierAccessPermission = (to, from, next) => {
  const permissions = localStorage.getItem('storageUserPermissions')
  if (!permissions.includes('access-supplier')) {
    next('/access-denied')
  } else {
    next()
  }
}

const adminMemberAccessPermission = (to, from, next) => {
  const permissions = localStorage.getItem('storageUserPermissions')
  if (!permissions.includes('access-member')) {
    next('/access-denied')
  } else {
    next()
  }
}

const roleAccessPermission = (to, from, next) => {
  const permissions = localStorage.getItem('storageUserPermissions')
  if (!permissions.includes('access-role')) {
    next('/access-denied')
  } else {
    next()
  }
}

const permissionAccessPermission = (to, from, next) => {
  const permissions = localStorage.getItem('storageUserPermissions')
  if (!permissions.includes('access-permission')) {
    next('/access-denied')
  } else {
    next()
  }
}

const AccountTransactionAccessPermission = (to, from, next) => {
  const permissions = localStorage.getItem('storageUserPermissions')
  if (!permissions.includes('access-account-transaction')) {
    next('/access-denied')
  } else {
    next()
  }
}

const defaultDataAccessPermission = (to, from, next) => {
  const permissions = localStorage.getItem('storageUserPermissions')
  if (!permissions.includes('access-default-data')) {
    next('/access-denied')
  } else {
    next()
  }
}

const routes = [
  {
    path: '/welcome',
    name: 'welcome',
    component: Welcome,
  },

  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
    beforeEnter: dashboardAccessPermission
  },

  {
    path: '/access-denied',
    name: 'access-denied',
    component: AccessDenied,
    meta: { requiresAuth: true }
  },

  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: rejectAuthUser,
  },

  {
    path: '/account-setting',
    name: 'account-setting',
    component: AccountSetting,
    meta: { requiresAuth: true }
  },

  {
    path: '/works',
    name: 'works',
    component: Work,
    meta: { requiresAuth: true },
    // beforeEnter: workAccessPermission,
  },

  {
    path: '/quotations',
    name: 'quotations',
    component: Quotation,
    meta: { requiresAuth: true },
    beforeEnter: quotationAccessPermission
  },

  {
    path: '/quotations/:id',
    component: Quotation,
    meta: { requiresAuth: true },
  },

  {
    path: '/purchase-orders',
    name: 'purchase-orders',
    component: PurchaseOrder,
    meta: { requiresAuth: true },
    beforeEnter: purchaseOrderAccessPermission
  },

  {
    path: '/purchase-orders/:id',
    name: 'purchase-orders',
    component: PurchaseOrder,
    meta: { requiresAuth: true },
    beforeEnter: purchaseOrderAccessPermission
  },

  {
    path: '/delivery-notes',
    name: 'delivery-notes',
    component: DeliveryNote,
    meta: { requiresAuth: true },
    beforeEnter: deliveryNoteAccessPermission
  },

  {
    path: '/account-transactions',
    name: 'account-transactions',
    component: AccountTransaction,
    meta: { requiresAuth: true },
    beforeEnter: AccountTransactionAccessPermission
  },

  {
    path: '/companies',
    name: 'companies',
    component: Company,
    meta: { requiresAuth: true },
    beforeEnter: companyAccessPermission
  },

  {
    path: '/projects',
    name: 'projects',
    component: Project,
    meta: { requiresAuth: true },
    beforeEnter: projectAccessPermission
  },

  {
    path: '/suppliers',
    name: 'suppliers',
    component: Supplier,
    meta: { requiresAuth: true },
    beforeEnter: supplierAccessPermission
  },

  {
    path: '/admin/members',
    name: 'admin-members',
    component: AdminMember,
    meta: { requiresAuth: true },
    // beforeEnter: adminMemberAccessPermission
  },

  {
    path: '/admin/roles',
    name: 'roles',
    component: Role,
    meta: { requiresAuth: true },
    beforeEnter: roleAccessPermission
  },

  {
    path: '/admin/permissions',
    name: 'permissions',
    component: Permission,
    meta: { requiresAuth: true },
    // beforeEnter: permissionAccessPermission
  },

  {
    path: '/admin/default-data',
    name: 'default-data',
    component: DefaultData,
    meta: { requiresAuth: true },
    // beforeEnter: defaultDataAccessPermission
  },

  {
    path: '/daily-reports',
    name: 'daily-reports',
    component: DailyReport,
    // meta: { requiresAuth: true },
    // beforeEnter: AccountTransactionAccessPermission
  },

  {
    path: '/weekly-reports',
    name: 'weekly-reports',
    component: WeeklyReport,
    // meta: { requiresAuth: true },
    // beforeEnter: AccountTransactionAccessPermission
  },

  {
    path: '/monthly-reports',
    name: 'monthly-reports',
    component: MonthlyReport,
    // meta: { requiresAuth: true },
    // beforeEnter: AccountTransactionAccessPermission
  },

  {
    path: '/ppes',
    name: 'ppes',
    component: Ppe,
    // meta: { requiresAuth: true },
    // beforeEnter: AccountTransactionAccessPermission
  },

  {
    path: '/*',
    redirect: { name: 'welcome' }
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('storageUserInfo')
  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
    return
  }
  next()
})

export default router;
