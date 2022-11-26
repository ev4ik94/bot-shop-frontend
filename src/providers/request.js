import axios from 'axios'

export const clientInstance = axios.create({
    baseURL: process.env.REACT_APP_URL
})

export const adminInstance = axios.create({
    baseURL: process.env.REACT_APP_URL
})



adminInstance.interceptors.request.use(

    (config) => {

        if (!config.headers['Content-Type']) {
            config.headers['Content-Type'] = 'application/json'
        }

        //const token = getCookie('admin-token')

        // if (token) {
        //     config.headers.Authorization = `Bearer ${token}`
        // }
        return config
    },
    (error) => {
        Promise.reject(error)
    }
)
adminInstance.interceptors.response.use(
    (response) => {
        return response
    },
    function(error) {

        const originalRequest = error.config
        let status = (error.response && error.response.status) || 0
        if (status === 401 && !originalRequest._retry) {
            //deleteCookie('admin-token')
            window.location.reload()
            alert('401 error')

        } else {

            if (error.response) {
                let message = error.response.data && error.response.data.message ? error.response.data.message : ''
                let status = error.response.status ? error.response.status : ''
                let requestURL = error.response.request && error.response.request.responseURL ? error.response.request.responseURL : ''
                alert(`Status: ${status} \n ${requestURL} \n ${message}`)
            }
            throw error
        }
    }
)