import { describe, expect, it, rs } from '@rstest/core';
import { render, screen } from '@testing-library/react';
// import { render } from '@rstest/browser-react'; // This import does not work
import userEvent from '@testing-library/user-event';
import Button from '../src/components/Button';

describe('Button', () => {
  it('renders', async () => {
    const user = userEvent.setup();
    const onClick = rs.fn();
    render(<Button type="primary" label="Primary Button" className='custom-button' onClick={onClick} />);
    
    const button = screen.getByText('Primary Button');
    expect(button).toBeVisible();
    expect(button).toBeInTheDocument();
    await user.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
