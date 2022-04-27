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


})