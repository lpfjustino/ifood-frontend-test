import React, { Component } from "react";
import LimitFilter from "./filters/LimitFilter";
import SelectFilter from "./filters/SelectFilter";
import DateFilter from "./filters/DateFilter";
import NumericFilter from "./filters/NumericFilter";
import TextFilter from "./filters/TextFilter";
import PropTypes from "prop-types";
import _ from "lodash";

export default class Filter extends Component {

    componentDidMount() {
        this.props.getFilters();
    }

    componentDidUpdate(prevProps, prevState) {
        const { accessToken, filters, fetchPlaylists } = this.props;
        const { values: currentFilters } = filters;
        const { values: oldFilters } = prevProps.filters;
        const filtersChanged = !_.isEqual(currentFilters, oldFilters);
        filtersChanged && fetchPlaylists(accessToken, currentFilters);
    }

    render() {
        const { filters, setFilter } = this.props;
        const {
            limit,
            locale,
            country,
            timestamp,
            offset,
        } = filters;

        return (
            <div className="filters-container">
                <div className="filter-container" id="limit-filter-container">
                    <div className="filter-name">{ (limit && limit.name) || "" }</div>
                    <LimitFilter
                        filter={ filters.limit }
                        limitValue={ _.get(filters, "values.limit.value", null) }
                        setFilter={ setFilter }
                        name="limit"
                        />
                </div>
                <div className="filter-container">
                    <div className="filter-name">{ (locale && locale.name) || "" }</div>
                    <SelectFilter
                        filter={ filters.locale }
                        setFilter={ setFilter }
                        name="locale"
                        />
                </div>
                <div className="filter-container">
                    <div className="filter-name">{ (country && country.name) || "" }</div>
                    <SelectFilter
                        filter={ filters.country }
                        setFilter={ setFilter }
                        name="country"
                        />
                </div>
                <div className="filter-container">
                    <div className="filter-name">{ (timestamp && timestamp.name) || "" }</div>
                    <DateFilter
                        filter={ filters.timestamp }
                        setFilter={ setFilter }
                        value={ _.get(filters, "values.timestamp.value", null) }
                        name="timestamp"
                        />
                </div>
                <div className="filter-container">
                    <div className="filter-name">{ (offset && offset.name) || "" }</div>
                    <NumericFilter
                        filter = { filters.offset }
                        setFilter={ setFilter }
                        name="offset"
                        />
                </div>
                <div className="filter-container">
                    <div className="filter-name">Nome</div>
                    <TextFilter
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
