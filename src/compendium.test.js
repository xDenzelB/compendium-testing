import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Compendium from './views/compendium';

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
  });


})