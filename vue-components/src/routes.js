import Home from './components/Home.vue';
import Header from './components/header.vue';

//loading routes lazily by creating new bundles and load them when need it 3rd param grouping by 'user'
const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue')) //like a promise that resolve the path that should be really used
    })
}
const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue')) //like a promise that resolve the path that should be really used
    })
}
const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue')) //like a promise that resolve the path that should be really used
    })
}
const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue')) //like a promise that resolve the path that should be really used
    })
}



export const routes = [
    { path: '', name: 'home', components: {
        default: Home,
        'header-top': Header
    }},
    { path: '/user', components: {
        default: User,
        'header-bottom': Header
    }, children: [
        { path: '', component: UserStart, name: 'userStart' },
        { path: ':id', component: UserDetail, name: 'userDetail', beforeEnter: (to, from, next) => {
            next();
        } },
        { path: ':id/edit', component: UserEdit, name: 'userEdit' }
    ]},
    { path: '/redirect', redirect: {name: 'home' } },  //redirect
    { path: '*', redirect: '/' }
]