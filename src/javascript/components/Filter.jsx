import React, { Component } from "react";
import LimitFilter from "./filters/LimitFilter"
import SelectFilter from "./filters/SelectFilter"
import PropTypes from "prop-types";

export default class Filter extends Component {
    componentDidMount() {
        this.props.getFilters();
    }

    render() {
        const { filters, limitValue, getFilters, setFilter } = this.props;

        return (
            <div className="filters-container">
                <div className="filter-container" id="limit-filter-container">
                    <LimitFilter
                        filters={ filters }
                        getFilters={ getFilters }
                        limitValue={ limitValue }
                        setFilter={ setFilter }
                        />
                </div>
                <div className="filter-container">
                    <SelectFilter
                        filter={ filters.locale }
                        />
                </div>
                <div className="filter-container">
                    <SelectFilter
                        filter={ filters.country }
                        />
                </div>
            </div>
        )
    }
}

Filter.propTypes = {
    filters: PropTypes.object.isRequired,
    getFilters: PropTypes.func.isRequired,
    limitValue: PropTypes.number,
    setFilter: PropTypes.func.isRequired,
}
