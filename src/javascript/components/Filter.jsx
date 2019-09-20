import React, { Component } from "react";
import LimitFilter from "./filters/LimitFilter";
import SelectFilter from "./filters/SelectFilter";
import DateFilter from "./filters/DateFilter";
import NumericFilter from "./filters/NumericFilter";
import TextFilter from "./filters/TextFilter";
import PropTypes from "prop-types";

export default class Filter extends Component {
    componentDidMount() {
        this.props.getFilters();
    }

    render() {
        const { filters, limitValue, getFilters, setFilter } = this.props;
        console.log(filters)
        return (
            <div className="filters-container">
                <div className="filter-container" id="limit-filter-container">
                    <LimitFilter
                        filter={ filters.limit }
                        getFilters={ getFilters }
                        limitValue={ limitValue }
                        setFilter={ setFilter }
                        />
                </div>
                <div className="filter-container">
                    <SelectFilter
                        filter={ filters.locale }
                        setFilter={ setFilter }
                        name="locale"
                        />
                </div>
                <div className="filter-container">
                    <SelectFilter
                        filter={ filters.country }
                        setFilter={ setFilter }
                        name="country"
                        />
                </div>
                <div className="filter-container">
                    <DateFilter
                        filter = { filters.timestamp }
                        setFilter={ setFilter }
                        name="timestamp"
                        />
                </div>
                <div className="filter-container">
                    <NumericFilter
                        filter = { filters.offset }
                        setFilter={ setFilter }
                        name="offset"
                        />
                </div>
                <div className="filter-container">
                    <TextFilter
                        filter = { filters }
                        setFilter={ setFilter }
                        name="name"
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
