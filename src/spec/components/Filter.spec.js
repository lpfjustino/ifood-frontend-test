import React from 'react';
import { shallow } from 'enzyme';
import Filter from '../../javascript/components/Filter';

describe("The Filter component", () => {
    const mockGetFilters = jest.fn();
    const mockSetFilters = jest.fn();
    const filters = {};
    const mockProps = {
        getFilters: mockGetFilters,
        setFilter: mockSetFilters,
        limitValue: 0,
        filters,
    }

    beforeEach(() => {
        shallow(<Filter { ...mockProps } />);
    });

    it("should call the getFilters function from props", () => {
        expect(mockGetFilters).toHaveBeenCalled();
    });
});
