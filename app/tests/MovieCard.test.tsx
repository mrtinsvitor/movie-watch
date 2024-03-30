import { render, screen } from '@testing-library/react';
import MovieCard from '~/components/MovieCard';

describe('MovieCard component test', () => {
  test('renders MovieCard component with all props', () => {
    render(
      <MovieCard
        title="Test Movie"
        releaseDate="2023-05-15"
        imagePath="test-image.jpg"
        voteAverage={7.5}
      />,
    );

    expect(screen.getByText('Test Movie')).toBeInTheDocument();
    expect(screen.getByText('(2023)')).toBeInTheDocument();
    expect(screen.getByAltText('Test Movie')).toBeInTheDocument();
    expect(screen.getByText('75')).toBeInTheDocument();
  });

  test('displays "great" vote average correctly', () => {
    render(
      <MovieCard
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
