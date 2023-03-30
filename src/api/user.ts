import request from './request'

export function login(data) {
    console.log('VUE_APP_BASE_API', import.meta.env.VUE_APP_BASE_API)

    return request({
        url: '/sys/user/login',
        method: 'post',
        data
    })
}

export function getInfo() {
    return request({
        url: '/sys/user/getUserInfo',
        method: 'get'
    })
}


export function logout() {
    return request({
        url: '/sys/user/logout',
        method: 'post'
    })
}
