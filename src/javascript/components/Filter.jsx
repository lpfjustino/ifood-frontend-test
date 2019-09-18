import React, { Component } from 'react';
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";

export default class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        }
    }
    componentDidMount() {
        this.props.getFilters();
    }

    renderLimitRange() {
        const isFilterAvailable = this.props.filters.limit;
        if (!isFilterAvailable) {
            return;
        }

        const isFilterLoaded = isFilterAvailable.min && isFilterAvailable.max;
        const { max = 100, min = 0 } = this.props.filters.limit;

        return (<InputRange
            maxValue={max}
            minValue={min}
            disabled={isFilterLoaded}
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
