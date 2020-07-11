import React from 'react';
import {Link} from 'react-router-dom';

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.this = {
        }
    }
    render() {
        return (
            <div className="container">
                <p>Profile</p>
                <br/>
                <Link to="/">Homeへ</Link>
            </div>
        );
    }
}

export default Profile;