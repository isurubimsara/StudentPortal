import React, { Component } from 'react'
import {register} from './UserFunction'

export default class Register extends Component {

    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault()
        
        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        }

        register(user).then(res => {
            if(res){
                this.props.history.push(`/login`)
            }
        })

    }


  render() {
    return (
      <div className="container">
        <h2>
            <div className="row">
                <div className="col-md-6 mt-5 mx-auto">
                 <form noValidate onSubmit={this.onSubmit}>
                    <h1 className='h3 mb-3 font-weight-normal' align='center'>Student Enrollment</h1>

                    <div className='form-group'>
                        <label htmlFor='firstName'>firstName</label>
                        <input
                        type="text"
                        className='form-control'
                        name='firstName'
                        placeholder='Enter First Name'
                        value = {this.state.firstName}
                        onChange={this.onChange}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='lastName'>Last Name</label>
                        <input
                        type="text"
                        className='form-control'
                        name='lastName'
                        placeholder='Enter Last Name'
                        value = {this.state.lastName}
                        onChange={this.onChange}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input
                        type="email"
                        className='form-control'
                        name='email'
                        placeholder='Enter email'
                        value = {this.state.email}
                        onChange={this.onChange}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='password'>password</label>
                        <input
                        type="password"
                        className='form-control'
                        name='password'
                        placeholder='Enter password'
                        value = {this.state.password}
                        onChange={this.onChange}
                        />
                    </div>

                    <button className=' btn btn-lg btn-primary btn-block'>Register</button>
                    </form>
                </div>
            </div>
        </h2>
        
      </div>
    )
  }
}
