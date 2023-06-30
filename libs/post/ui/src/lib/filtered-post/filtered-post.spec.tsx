import { render } from '@testing-library/react';

import FilteredPost from './filtered-post';

describe('FilteredPost', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FilteredPost />);
    expect(baseElement).toBeTruthy();
  });
});
