import React from 'react'
import Validate from '../../common/Validate';
import ValidateErrorList from '../../pages/form/ValidateErrorList';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idErrors: [],
      passwordErrors: [],
      id: '',
      password: ''
    }
  }

  render(){
    return(
        <div>
            <h1>ログイン画面</h1>
            <form method="POST" action="http://example.com">
              <div class="container">
                <ValidateErrorList messages={this.state.idErrors} />
                <label for="uname"><b>ユーザ名またはメールアドレス</b></label>
                <input type="text" placeholder="Username or E-Mail" name="id" onChange={this.validateEmail}/>

                <ValidateErrorList messages={this.state.passwordErrors} />
                <label for="psw"><b>パスワード</b></label>
                <input type="password" placeholder="Enter Password" name="password" onChange={this.validatePassword}/>

                <button type="submit">ログイン</button>
                <label>
                  <input type="checkbox" checked="checked" name="remember"/> Remember me
                </label>
              </div>
            </form>
        </div>
    )
  }
}