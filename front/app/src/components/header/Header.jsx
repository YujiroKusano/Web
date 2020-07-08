import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
  render(){
    return(
        <div>
            <p>Header</p>
            <ul>
                <li><Link to="/">Top Page</Link></li>
                <li><Link to="/login">Login Page</Link></li>
            </ul>
        </div>
    )
  }
}