import React from "react";
import DatePicker from "react-datepicker";
import { shallow } from "enzyme";
import DateFilter from "../../../javascript/components/filters/DateFilter";

describe("The DateFilter component", () => {
    let wrapper;
    let mockSetFilters;
    const mockName = "dateFilter";
    let mockProps;

    beforeEach(() => {
        mockSetFilters = jest.fn();
        mockProps = {
            setFilter: mockSetFilters,
            name: mockName,
        };
        wrapper = shallow(<DateFilter { ...mockProps } />);
    });

    it("should not render the filter if it's not defined", () => {
        wrapper = shallow(<DateFilter { ...mockProps } />)
        const datePicker = wrapper.find(DatePicker);

        expect(datePicker.length).toEqual(0);
    });

    it("should call setFilter from props when handleChange is called", () => {
        const mockDate = {};
        wrapper.instance().handleChange(mockDate);
        expect(mockSetFilters).toHaveBeenCalled();
    });

    it("should pass down props from the filter to the DatePicker component", () => {
        const mockDate = new Date();
        const definedProps = {
            ...mockProps,
            filter: {},
            value: mockDate,
        }
        wrapper = shallow(<DateFilter { ...definedProps } />)
        const datePicker = wrapper.find(DatePicker);

        expect(datePicker.props()).toMatchObject({
            selected: mockDate,
        });
    });
});