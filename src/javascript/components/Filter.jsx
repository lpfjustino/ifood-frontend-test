import React, { Component } from 'react';
import InputRange from 'react-input-range';
import _ from 'lodash';

export default class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
        }
    }
    componentDidMount() {
        this.props.getFilters();
    }

    renderLimitRange() {
        const limitFilter = this.props.filters.limit;
        if (!limitFilter) {
            return;
        }

        const min = _.get(limitFilter, "validation.min", null);
        const max = _.get(limitFilter, "validation.max", null);
        const isFilterLoaded = min && max;

        return (<InputRange
            maxValue={max}
            minValue={min}
            disabled={!isFilterLoaded}
            value={this.state.value}
            onChange={value => this.setState({ value })} />);
    }
    
    render() {
        return (
            <div>
                <form>
                { this.renderLimitRange() }
                </form>
            </div>
        )
    }
}
