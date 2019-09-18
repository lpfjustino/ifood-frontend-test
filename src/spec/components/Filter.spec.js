import React from 'react';
import { shallow } from 'enzyme';
import Filter from '../../javascript/components/Filter';

describe("The Filter component", () => {
    const mockGetFilters = jest.fn();
    const filters = {};
    const mockProps = {
        getFilters: mockGetFilters,
        filters,
    }

    beforeEach(() => {
        shallow(<Filter { ...mockProps } />);
    });

    it("renders the filter component", () => {
        expect(mockGetFilters).toHaveBeenCalled();
    });
});
