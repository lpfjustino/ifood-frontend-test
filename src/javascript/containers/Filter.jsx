import { connect } from "react-redux";
import filterActions from "../actions/filters";
import Filter from "../components/Filter";

function mapStateToProps(state) {
    return {
        filters: state.filters,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getFilters: () => dispatch(filterActions.getFilters()),
        setFilter: (field, value) => dispatch(filterActions.setFilter(field, value)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);