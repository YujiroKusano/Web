import React from 'react'

export default class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {Message: 'TEST'};
    }
    render() {
        return (
        <div>
            <h1>{this.state.Message}</h1>
            <p>通常SPAはページ遷移をしないページをさします</p>
        </div>
        )
    }
}