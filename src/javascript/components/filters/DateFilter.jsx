import React, { Component } from "react";
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import _ from "lodash";

export default class DateFilter extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        const { name, setFilter } = this.props
        setFilter(name, date);
    };

    render() {
        const { filter } = this.props;
        const value = _.get(filter, "values.timestamp", "");

        return (
            <div>
                <DatePicker
                    onChange={ this.handleChange }
                    selected={ value }
                    />
            </div>
        )
    }
}

DateFilter.propTypes = {
    filter: PropTypes.object,
    setFilter: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
}
