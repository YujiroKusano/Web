import React from 'react'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import LoginForm from '../../components/login/LoginForm';
import RegistForm from '../../components/regitstor/RegistForm';
const regist = 0;
const login = 1;
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: <RegistForm />,
            display: regist
        }
        this.viewRegistForm = this.viewRegistForm.bind(this);
        this.viewLoginForm = this.viewLoginForm.bind(this);
    }
    viewRegistForm() {
        this.setState({
            form: <RegistForm />,
            display: regist
        });
    }
    viewLoginForm() {
        this.setState({
            form: <LoginForm />,
            display: login
        });
    }
  render(){
    return(
        <div>
            <Header />
            <div>
                {this.state.form}
                <div class="container">
                    <button hidden={this.state.display === login} onClick={this.viewLoginForm}>アカウントをお持ちの方はこちら</button>
                </div>
                <div class="container">
                    <a hidden={this.state.display === login}>パスワードを忘れた方はコチラ</a><br/>
                    <button onClick={this.viewRegistForm} hidden={this.state.display === regist}>アカウントの新規作成</button>
              </div>
            </div>
            <Footer />
        </div>
    )
  }
}