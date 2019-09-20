import React from 'react';
import Select from 'react-select';
import { shallow } from 'enzyme';
import SelectFilter from '../../../javascript/components/filters/SelectFilter';

describe("The SelectFilter component", () => {
    let wrapper;
    const filter = {
        values: [
            {
                "name": "foo",
                "value": "bar",
            },
            {
                "name": "john",
                "value": "doe",
            },
        ]
    };
    const mockProps = { filter };
    
    beforeEach(() => {
        wrapper = shallow(<SelectFilter { ...mockProps } />);
    });
    
    describe("The getOptions function", () => {
        it("should return an array with objects formatted for the Select interface given the values", () => {
            const result = wrapper.instance().getOptions();
            const expected = filter.values.map(value => ({ label: value.name, value: value.value }));

            expect(result).toMatchObject(expected);
        });
    });

    it("should not render the filter if it's not defined", () => {
        wrapper = shallow(<SelectFilter { ...mockProps } />);
        wrapper.setProps({ filter: null });
        const select = wrapper.find(Select);

        expect(select.length).toEqual(0);
    });
        
    it("should pass down props from the filter to the Select component", () => {
        const select = wrapper.find(Select);
        const options = wrapper.instance().getOptions();

        expect(select.prop("options")).toMatchObject(options);
    });
});