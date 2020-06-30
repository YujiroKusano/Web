import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {Message: 'Hello'};
    }
    render() {
        return (
            <header class="Header">
                <div class="">
                    {/*  Linkタグからしかページ遷移はできない */}
                    <Link to="/">index</Link>
                    <Link to="/Test">Test</Link>
                </div>
            </header>
        )
    }
}