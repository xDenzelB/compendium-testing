import { render, screen, waitFor, waitForElementToBeRemoved, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Compendium from './views/compendium';
import userEvent from '@testing-library/user-event';

describe('compendium', () => {
  render(
    <MemoryRouter>
      <Compendium />
    </MemoryRouter>
  );

  it('Should render in loading state', async () => {
    const heading = screen.getByRole('heading', {
      name: /characters from pokemon/i
    });

    expect(heading).toBeInTheDocument();
    expect(screen.getByText(/loading.../i));

    await waitForElementToBeRemoved(() => screen.getByText(/loading.../i));
    await screen.findByText('butterfree');
  });

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

})