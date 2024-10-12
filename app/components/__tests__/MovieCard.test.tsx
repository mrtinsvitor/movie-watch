import { createRemixStub } from '@remix-run/testing';
import { render, screen } from '@testing-library/react';
import MovieCard from '~/components/MovieCard';
import Movie from '~/routes/movies.$movieId';

describe('MovieCard component test', () => {
  test.only('renders MovieCard component with all props', async () => {
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: () => (
          <MovieCard
            id={1}
            title="Test Movie"
            releaseDate="2023-05-15"
            imagePath="/test-image.jpg"
            voteAverage={7.5}
          />
        ),
        links() {
          return [{ page: '/movies/:movieId' }];
        },
        children: [
          {
            path: '/movies/:movieId',
            Component: () => <Movie />,
          },
        ],
      },
    ]);

    render(<RemixStub />);

    expect(await screen.findByText('Test Movie')).toBeInTheDocument();
    // expect(screen.getByText('(2023)')).toBeInTheDocument();
    // expect(screen.getByAltText('Test Movie')).toBeInTheDocument();
    // expect(screen.getByText('75')).toBeInTheDocument();
  });

  test('displays "great" vote average correctly', () => {
    render(
      <MovieCard
        id={1}
        title="Test Movie"
        releaseDate="2023-05-15"
        imagePath="/test-image.jpg"
        voteAverage={9}
      />,
    );

    expect(screen.getByText('90')).toBeInTheDocument();
    expect(screen.queryByTestId('great-icon')).toBeInTheDocument();
  });

  test('displays "normal" vote average correctly', () => {
    render(
      <MovieCard
        id={1}
        title="Test Movie"
        releaseDate="2023-05-15"
        imagePath="/test-image.jpg"
        voteAverage={5}
      />,
    );

    expect(screen.getByText('50')).toBeInTheDocument();
    expect(screen.queryByTestId('normal-icon')).toBeInTheDocument();
  });

  test('displays "awful" vote average correctly', () => {
    render(
      <MovieCard
        id={1}
        title="Test Movie"
        releaseDate="2023-05-15"
        imagePath="/test-image.jpg"
        voteAverage={2}
      />,
    );

    expect(screen.getByText('20')).toBeInTheDocument();
    expect(screen.queryByTestId('awful-icon')).toBeInTheDocument();
  });
});
