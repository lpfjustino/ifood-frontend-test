import React, { Component } from "react";
import DatePicker from "react-datepicker";
import _ from "lodash";

export default class DateFilter extends Component {
    handleChange = date => {
        this.props.setFilter({ timestamp: date });
    };

    render() {
        const { filter } = this.props;
        const dateFormat = _.get(filter, "validation.format", "MM/dd/yyyy");
        return (
            <div>
                <DatePicker
                    dateFormat={dateFormat}
                    />
            </div>
        )
    }
}
