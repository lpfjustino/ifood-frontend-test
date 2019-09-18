import React, { Component } from "react";
import LimitFilter from "./filters/LimitFilter"
import PropTypes from "prop-types";

export default class Filter extends Component {
    componentDidMount() {
        this.props.getFilters();
    }

    render() {
        const { filters, limitValue, getFilters, setFilter } = this.props;

        return (
            <div>
                <LimitFilter
                    filters = { filters }
                    getFilters = { getFilters }
                    limitValue = { limitValue }
                    setFilter = { setFilter }
                    />
            </div>
        )
    }
}

Filter.propTypes = {
    filters: PropTypes.object.isRequired,
    getFilters: PropTypes.func.isRequired,
    limitValue: PropTypes.number.isRequired,
    setFilter: PropTypes.func.isRequired,
}
