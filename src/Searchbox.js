import React, { Component } from 'react'

export default class Searchbox extends Component {
    
    render() {
        return (
            <div className="inputdiv">
                <input id="searchbox" type="search" placeholder="Search" onChange={this.props.Search}/>
            </div>
        )
    }
}
