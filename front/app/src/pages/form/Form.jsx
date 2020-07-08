import React from 'react'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import RegistForm from './RegistForm';
import LoginForm from './LoginForm'
const _regist = 0;
const _login = 1;
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: <RegistForm />,
            display: _regist
        }
        this.viewRegistForm = this.viewRegistForm.bind(this);
        this.viewLoginForm = this.viewLoginForm.bind(this);
    }
    viewRegistForm() {
        this.setState({
            form: <RegistForm />,
            display: _regist
        });
    }
    viewLoginForm() {
        this.setState({
            form: <LoginForm />,
            display: _login
        });
    }
  render(){
    return(
        <div>
            <Header />
            <div>
                {this.state.form}
                <div class="container">
                    <button onClick={this.viewLoginForm} hidden={this.state.display === _login} >アカウントをお持ちの方はこちら</button>
                </div>
                <div class="container">
                    <button hidden={this.state.display === _login}>パスワードを忘れた方はコチラ</button><br/>
                    <button onClick={this.viewRegistForm} hidden={this.state.display === _regist}>アカウントの新規作成</button>
              </div>
            </div>
            <Footer />
        </div>
    )
  }
}