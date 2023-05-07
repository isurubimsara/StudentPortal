import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

export default class Profile extends Component {

    constructor(){
    super()
    this.state = {
        firstName : '',
        lastName : '',
        email : ''
    }
}

componentDidMount(){
    const token = localStorage.usertoken
    const decode = jwt_decode(token)
    this.setState({
        firstName: decode.firstName,
        lastName : decode.lastName,
        email: decode.email
    })
}
  render() {
    return (
      <div className='container'>
        <div className='jumbotron mt-5'>
            <div className='col-sm8 mx-auto'>
                <h1 className='text-center'>Profile</h1>
            </div>

            <table className='table col-md-6 mx-auto'>
                <h2>
                    <tbody>
                        <tr>
                            <td>First Name</td>
                            <td>{this.setState.firstName}</td>
                        </tr>

                        <tr>
                            <td>Last Name</td>
                            <td>{this.setState.lastName}</td>
                        </tr>

                        <tr>
                            <td>Email</td>
                            <td>{this.setState.email}</td>
                        </tr>
                    </tbody>
                </h2>
            </table>
        </div>
      </div>
    )
  }
}
