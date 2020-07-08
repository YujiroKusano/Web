import React from 'react'

export default class ValidateErrorList extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <ul>
                    {this.props.messages.map((data) => {
                        return <li>{data}</li>;
                    })}
                </ul>
            </div>
        )
    }
}