import React, { Component } from "react";
import InputNumber from "rc-input-number";

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
        return (
            <div>
                <InputNumber
                    onChange={ this.onChange }
                    />
            </div>
        )
    }
}
