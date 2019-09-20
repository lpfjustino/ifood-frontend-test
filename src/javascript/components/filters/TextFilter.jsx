import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TextFilter extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { value } = event.target;
        const { name, setFilter } = this.props;
        setFilter(name, value);
    }

    render() {
        const { filter } = this.props;
        const textFilter = filter
        if (!textFilter) {
            return null;
        }

        return (
            <div>
                <input
                    onChange={ this.handleChange }
                    />
            </div>
        )
    }
}

TextFilter.protoTypes = {
    filter: PropTypes.object,
    setFilter: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
}
