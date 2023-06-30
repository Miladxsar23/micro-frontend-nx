import { render } from '@testing-library/react';

import ShowPostDialog from './show-post-dialog';

describe('ShowPostDialog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShowPostDialog />);
    expect(baseElement).toBeTruthy();
  });
});
