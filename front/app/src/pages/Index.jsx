import React from 'react'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {Message: 'Hello'};
    }
    render() {
        return (
        <div>
            <Header />
            <h1>{this.state.Message}</h1>
            <Footer />
        </div>
        )
    }
}