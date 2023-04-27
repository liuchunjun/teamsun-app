import http from '@/utils/request'

export default {
    getToken: (params) => {
        return http.get('/shareApi/test/token', params)
    },
    login: (params) => {
        return http.post('/v1/rbac/api/login/', params)
    },
    getOpticalSwitchesV2: (type, params) => {
        return http.get('/v1/emc/api/switch/get_switches_v2', params)
    }
}
