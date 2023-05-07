import axios from 'axios'

export const register = newUser => {
    return axios
        .post('users/register', {
            firstName : newUser.firstName,
            lastName : newUser.lastName,
            email : newUser.email,
            password : newUser.password
        })
        .then(res => {
            console.log("registered")
            alert("Registered")
        })
        .catch((err) => {
            console.log(`error: ${err}`)
            alert("error :"+err)
        })

 }

export const login = user => {
    return axios
         .post('user/login', {
             email: user.email,
             password: user.password
         })
         .then(res => {
             localStorage.setItem('usertoken',res.data)
             return res.data
         })
         .catch(err => {
            console.log(err)
         })

            
}
