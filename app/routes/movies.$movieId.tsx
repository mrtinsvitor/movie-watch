import { json, useLoaderData } from '@remix-run/react';
import type { Movie } from '~/types/Movie';

export const loader = async ({ params }) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
    },
  };

  const response = await (
    await fetch(`https://api.themoviedb.org/3/movie/${params.movieId}`, options)
  ).json();

  return json({ movie: response });
};

export default function Movie() {
  const { movie } = useLoaderData<{ movie: Movie }>();

  return (
    <div className="grid grid-cols-2 justify-center">
      <img
        src={`http://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
        width="80%"
        height={'auto'}
        alt={movie.title}
      />

      <div>
        <h2 className="text-2xl text-neutral-200">
          {movie.title}{' '}
          <span className="text-xl text-neutral-400">
            ({new Date(movie.release_date).getFullYear()})
          </span>
        </h2>

        <div className="flex text-sm text-neutral-200">
          <p>{movie.genres.map(({ name }) => name).join(', ')}</p>
          <span className="mx-1">•</span>
          <p>{movie.runtime} minutes</p>
        </div>

        <div className="mt-10">
          <p className="text-xl text-neutral-200">Overview</p>
          <p className="text-neutral-300">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}
