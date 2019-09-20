import React, { Component } from "react"
import Select from "react-select";

export default class SelectFilter extends Component {

    getOptions() {
        const { values } = this.props.filter;

        return values.map(value => ({ label: value.name, value: value.value }));
    }

    render() {
        const { filter } = this.props;
        if (!filter) {
            return null;
        }

        return (
            <div>
                <Select options={ this.getOptions() } />
            </div>
        )
    }
}
