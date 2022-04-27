import { render, screen, waitFor, waitForElementToBeRemoved, within } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
import Compendium from './views/compendium';
import userEvent from '@testing-library/user-event';


it('Should test for filtering', async () => {
  render(<Compendium />);

  await waitForElementToBeRemoved(screen.getByText(/loading/i));

  const search = screen.getByPlaceholderText('Find a Character');

  userEvent.type(search, 'pikachu');

  return waitFor(() => {
    const result = screen.getByText('pikachu');
    screen.debug();
    expect(result.textContent).toEqual('pikachu');

  });
});
