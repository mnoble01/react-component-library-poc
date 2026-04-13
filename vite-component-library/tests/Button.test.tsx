import React from 'react';
import { render, fireEvent, getByText } from '@testing-library/react';
import { describe, expect, test, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import Button from '../src/components/Button';


describe('Button', () => {
  for (let i = 0; i<10; i++) {
    it(`renders ${i}`, async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      const { container } =  render(<Button type="primary" label="Primary Button" className='custom-button' onClick={onClick} />);
      
      const button = getByText(container, 'Primary Button');
      expect(button).toBeVisible();
      expect(button).toBeInTheDocument();
      await user.click(button);
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  }
});