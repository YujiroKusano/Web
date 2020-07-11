import React from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.this = {
        }
    }

    handleLogout = () => {
        firebase.auth().signOut();
    }

    render() {
        return (
            <div>
                <p>Home</p>
                <Link to="/profile">Profileへ</Link>
                <br />
                <br />
                <Button onClick={this.handleLogout}>ログアウト</Button>
            </div>
        );
    }
}

export default Home;