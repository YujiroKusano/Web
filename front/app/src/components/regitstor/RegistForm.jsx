import React from 'react'
import Validate from '../../common/Validate';
import ValidateErrorList from '../../pages/form/ValidateErrorList';

export default class RegistForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userNameErrors: [],
            emailErrors: [],
            passwordErrors: [],
            passwordCheckErrors: [],
            userName: '',
            email: '',
            password: '',
            passwordCheck: ''
        }

        this.validateUserNmae = this.validateUserNmae.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
        this.validatePasswordCheck = this.validatePasswordCheck.bind(this);
        this.validate = new Validate;
    }
    validateUserNmae(e) {
        this.setState({userName: e.target.value});
        this.setState({userNameErrors: this.validate.username(e.target.value)});
    }

    validateEmail(e) {    
        this.setState({email: e.target.value});
        this.setState({emailErrors: this.validate.email(e.target.value)});
    }

    validatePassword(e) {
        this.setState({password: e.target.value});
        this.setState({passwordErrors: this.validate.password(e.target.value)});
    }

  validatePasswordCheck(e) {
    this.setState({passwordCheck: e.target.value});
    this.setState({passwordCheckErrors: this.validate.passwordCheck(e.target.value, this.state.password)});
  }

  render(){
    return(
        <div>
            <h1>登録画面</h1>
            <form method="POST" action="http://example.com">
              <div class="container">
                <ValidateErrorList messages={this.state.userNameErrors} />
                <label><b>ユーザ名</b></label>
                <input type="text" placeholder="Username" name="username" onChange={this.validateUserNmae}/>

                <ValidateErrorList messages={this.state.emailErrors} />
                <label><b>メールアドレス</b></label>
                <input type="text" placeholder="E-mail" name="username" onChange={this.validateEmail}/>
                
                <ValidateErrorList messages={this.state.passwordErrors} />
                <label><b>パスワード</b></label>
                <input type="password" placeholder="Enter Password" name="password" onChange={this.validatePassword}/>
                
                <ValidateErrorList messages={this.state.passwordCheckErrors} />
                <label><b>確認パスワード</b></label>
                <input type="password" placeholder="Enter Password" name="passwordCheck" onChange={this.validatePasswordCheck}/>

                <button type="submit">登録</button>
              </div>

            </form>
        </div>
    )
  }
}