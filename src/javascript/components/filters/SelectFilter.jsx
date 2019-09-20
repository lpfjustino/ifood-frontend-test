import React, { Component } from "react"
import Select from "react-select";
import PropTypes from "prop-types";

export default class SelectFilter extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    getOptions() {
        const { filter, name } = this.props;
        const { values } = filter[ name ];

        return values.map(value => ({ label: value.name, value: value.value }));
    }

    handleChange(option) {
        const { name, setFilter } = this.props;
        setFilter(name, option);
    }

    render() {
        const { filter, name } = this.props;
        const selectFilter = filter[ name ]
        if (!selectFilter) {
            return null;
        }

        return (
            <div>
                <Select
                    options={ this.getOptions() } 
                    onChange={ this.handleChange }
                    />
            </div>
        )
    }
}

SelectFilter.propTypes = {
    filter: PropTypes.object,
    setFilter: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
}
