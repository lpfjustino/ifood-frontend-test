import React, { Component } from "react";
import InputNumber from "rc-input-number";
import PropTypes from "prop-types";

export default class NumericFilter extends Component {

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(value) {
        const { name, setFilter } = this.props;
        setFilter(name, value);
    }

    render() {
        const { filter } = this.props;
        const numericFilter = filter
        if (!numericFilter) {
            return null;
        }

        return (
            <div>
                <InputNumber
                    onChange={ this.onChange }
                    />
            </div>
        )
    }
}

NumericFilter.protoTypes = {
    setFilter: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
}
