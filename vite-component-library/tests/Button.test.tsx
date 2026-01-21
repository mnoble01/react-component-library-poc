import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, test, it } from 'vitest';

import Button from '../src/components/Button';


describe('Button', () => {
  it('renders', () => {
    render(<Button type="primary" label="Primary Button" className='custom-button' />);
    
    const button = screen.getByText('Primary Button');
    expect(button).toBeVisible();
    expect(button).toBeInTheDocument();
  });
});