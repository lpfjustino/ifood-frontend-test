import React, { Component } from 'react'

export default class Filter extends Component {
    componentDidMount() {
        this.props.getFilters();
    }
    
    render() {
        return (
            <div>
                { JSON.stringify(this.props.filters) }
            </div>
        )
    }
}
