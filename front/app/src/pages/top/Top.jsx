import React from 'react'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

export default class Top extends React.Component {
    constructor(props) {
        super(props);
    }
  render(){
    return(
        <div>
            <Header />
            <div>
                <h1>Top Page</h1>
            </div>
            <Footer />
        </div>
    )
  }
}