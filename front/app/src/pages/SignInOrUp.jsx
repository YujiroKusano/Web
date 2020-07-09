import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback, Spinner } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom'
import { Formik } from 'formik';
import * as Yup from 'yup';
import firebase, { providerGoogle } from '../Firebase';

class SignInOrUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false, //spinner制御用
        }
        this.loginWithGoogle = this.loginWithGoogle.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillUnmount = this.componentDidMount.bind(this);
    }
    

    _isMounted = false;

    handleOnSubmit = (values) => {
        //spinner表示開始
        if (this._isMounted) this.setState({ loading: true })
        //サインイン（ログイン）処理
        firebase.auth().signInWithEmailAndPassword(values.email, values.password)
            .then(result => {
                //正常終了時
                this.props.history.push("/");
                if (this._isMounted) this.setState({ loading: false });
            })
            .catch(error => {
                //異常終了時
                if (this._isMounted) this.setState({ loading: false });
                alert(error);
            });
        }
        
    loginWithGoogle() {

        if (this._isMounted) this.setState({ loading: true })
        firebase.auth().signInWithRedirect(providerGoogle);
        firebase.auth().getRedirectResult()
            .then(result => {
                //正常終了時
                this.props.history.push("/");
                if (this._isMounted) this.setState({ loading: false });
            }).catch(error => {
                //異常終了時
                if (this._isMounted) this.setState({ loading: false });
                alert(error);
            });
      }

    componentDidMount = () => {
        this._isMounted = true;
    }

    componentWillUnmount = () => {
        this._isMounted = false;
    }

    render() {
        return (
            <div className="container">
                <div >
                    <p>サインイン</p>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={(values) => this.handleOnSubmit(values)}
                        validationSchema={Yup.object().shape({
                            email: Yup.string().email().required(),
                            password: Yup.string().required(),
                        })}
                    >
                        {
                            ({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
                                <Form onSubmit={handleSubmit}>
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            invalid={touched.email && errors.email ? true : false}
                                        />
                                        <FormFeedback>
                                            {errors.email}
                                        </FormFeedback>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="password">Password</Label>
                                        <Input
                                            type="password"
                                            name="password"
                                            id="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            invalid={touched.password && errors.password ? true : false}
                                        />
                                        <FormFeedback>
                                            {errors.password}
                                        </FormFeedback>
                                    </FormGroup>
                                    <div>
                                        <Button color="primary" type="submit" disabled={this.state.loading}>
                                            <Spinner size="sm" color="light"  hidden={!this.state.loading} />
                                            ログイン
                                        </Button>
                                    </div>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
                <Button color="primary" type="submit" onClick={this.loginWithGoogle} disabled={this.state.loading}>
                    <Spinner size="sm" color="light" hidden={!this.state.loading} />
                    GOOGLEアカウントでログイン
                </Button>
                <div >
                    <Link to="/signup">新規登録はこちら。</Link>
                </div>
            </div>
        );
    }
}

export default withRouter(SignInOrUp);