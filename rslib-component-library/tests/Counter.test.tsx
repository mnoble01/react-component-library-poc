import { expect, test } from '@rstest/core';
import { render } from '@rstest/browser-react';
import Counter from './Counter.tsx';

test('increments count on button click', async () => {
  const screen = await render(<Counter initial={5} />);

  await expect.element(screen.getByText('Count: 5')).toBeInTheDocument();

  await screen.getByRole('button', { name: 'Increment' }).click();
  await expect.element(screen.getByText('Count: 6')).toBeInTheDocument();
});
