import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, test, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import Button from '../src/components/Button';


describe('Button', () => {
  it('renders', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button type="primary" label="Primary Button" className='custom-button' onClick={onClick} />);
    
    const button = screen.getByText('Primary Button');
    expect(button).toBeVisible();
    expect(button).toBeInTheDocument();
    await user.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});