import React, { Component } from "react";
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import _ from "lodash";
import moment from "moment";

export default class DateFilter extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        const { name, setFilter, filter } = this.props;
        const dateFormat = _.get(filter, "validation.pattern", "dd/mm/yyyy");
        const formattedDate = moment(date).format(dateFormat.toUpperCase());
        setFilter(name, { value: formattedDate });
    };

    render() {
        const { filter, value } = this.props;
        const dateFilter = filter
        if (!dateFilter) {
            return null;
        }

        const formattedDate = value ? moment(value).toDate() : null;

        return (
            <div>
                <DatePicker
                    onChange={ this.handleChange }
                    selected={ formattedDate }
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
