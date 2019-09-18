import React, { Component } from "react";
import InputRange from "react-input-range";
import _ from "lodash";
import PropTypes from "prop-types";

export default class LimitFilter extends Component {
    render() {
            const limitFilter = this.props.filters.limit;
            if (!limitFilter) {
                return null;
            }
    
            const min = _.get(limitFilter, "validation.min", null);
            const max = _.get(limitFilter, "validation.max", null);
            const isFilterLoaded = min && max;
    
            return (<InputRange
                maxValue={max}
                minValue={min}
                disabled={!isFilterLoaded}
                value={this.props.limitValue || min}
                onChange={value => this.props.setFilter("limitValue", value) } />);
    }
}

LimitFilter.propTypes = {
    filters: PropTypes.object.isRequired,
    getFilters: PropTypes.func.isRequired,
    limitValue: PropTypes.number.isRequired,
    setFilter: PropTypes.func.isRequired,
}
