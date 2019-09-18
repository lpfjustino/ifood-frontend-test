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
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);