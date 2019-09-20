import React, { Component } from "react";
import InputRange from "react-input-range";
import _ from "lodash";
import PropTypes from "prop-types";

export default class LimitFilter extends Component {
    render() {
        const {filter: limitFilter } = this.props;
        if (!limitFilter) {
            return null;
        }

        const min = _.get(limitFilter, "validation.min", null);
        const max = _.get(limitFilter, "validation.max", null);
        const isFilterLoaded = min && max;

        return <InputRange
            maxValue={max}
            minValue={min}
            disabled={!isFilterLoaded}
            value={this.props.limitValue || min}
            onChange={value => this.props.setFilter("limitValue", value)}
            />;
    }
}

LimitFilter.propTypes = {
    filter: PropTypes.object,
    limitValue: PropTypes.number,
    setFilter: PropTypes.func.isRequired,
}
