import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', iserror: false}

  updateUsername = event => {
    this.setState({username: event.target.value})
  }

  updatePassword = event => {
    this.setState({password: event.target.value})
  }

  loginSuccessful = () => {
    const {history} = this.props
    history.replace('/')
  }

  loginUnsuccessful = () => {
    this.setState({iserror: true})
  }

  submitForm = async event => {
    event.preventDefault()
    console.log('hello')
    const {username, password} = this.state
    if (username !== '' || password !== '') {
      const details = {
        username,
        password,
      }
      const url = 'https://apis.ccbp.in/login'
      const options = {
        method: 'POST',
        body: JSON.stringify(details),
      }
      const response = await fetch(url, options)
      console.log(response)
      if (response.ok) {
        this.loginSuccessful()
      } else {
        this.loginUnsuccessful()
      }
    } else {
      this.loginUnsuccessful
    }
  }

  render() {
    const {username, password, iserror} = this.state
    return (
      <div className="main-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-image"
          />
        </div>
        <div className="form-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="logo-image"
          />
          <form onSubmit={this.submitForm}>
            <label htmlFor="username">USERNAME</label>
            <input
              type="text"
              onChange={this.updateUsername}
              value={username}
              id="username"
              placeholder="Username"
            />
            <label htmlFor="password">PASSWORD</label>
            <input
              id="password"
              type="password"
              onChange={this.updatePassword}
              value={password}
              placeholder="Password"
            />
            <br />
            <button type="submit" className="login-btn">
              Login
            </button>
            {iserror && <p>*Username and Password didn't match</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
