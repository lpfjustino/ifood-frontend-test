import React from 'react';
import { shallow } from 'enzyme';
import Filter from '../../javascript/components/Filter';

describe("The Filter component", () => {
    const mockGetFilters = jest.fn();

    beforeEach(() => {
        shallow(<Filter getFilters={ mockGetFilters } />);
    });

    it("renders the filter component", () => {
        expect(mockGetFilters).toHaveBeenCalled();
    });
});
