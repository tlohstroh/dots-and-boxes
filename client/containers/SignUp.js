import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import UserForm from '../components/UserForm'
import signUpUser from '../actions/sign-up-user'

class SignUp extends Component {
  render() {
    const { signUpUser } = this.props
    return <UserForm signUp={true} onSubmit={ signUpUser } />
  }
}

export default connect(null, { signUpUser })(SignUp)
