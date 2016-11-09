import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import UserForm from '../components/UserForm'
import signInUser from '../actions/sign-in-user'

class SignIn extends Component {
  render() {
    const { signInUser } = this.props
    return <UserForm onSubmit={ signInUser } />
  }
}

export default connect(null, { signInUser })(SignIn)
