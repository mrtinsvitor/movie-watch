import { json, useLoaderData } from '@remix-run/react';
import { LuSearch } from 'react-icons/lu';
import MovieCard from '~/components/MovieCard';
import { Movie } from '~/types/Movie';

export const loader = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
    },
  };

  const response = await (
    await fetch('https://api.themoviedb.org/3/discover/movie', options)
  ).json();

  return json({ movies: response.results });
};

export default function Index() {
  const { movies } = useLoaderData<{ movies: Movie[] }>();

  return (
    <div>
      <form className="relative">
        <div className="absolute inset-y-0 start-0 flex cursor-pointer items-center ps-3 dark:text-white">
          <LuSearch />
        </div>

        <input
          type="search"
          className="block w-full rounded-md border p-2 ps-10 text-sm focus:border-gray-500 focus:ring-gray-800 dark:border-zinc-600 dark:bg-zinc-800
              dark:text-zinc-300"
          placeholder="Search"
        />
      </form>

      <div className="mt-8">
        <h2 className="text-3xl font-normal text-neutral-200">
          Popular movies right now
        </h2>

        <div className="mt-10 grid grid-cols-2 justify-center gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              releaseDate={movie.release_date}
              imagePath={movie.poster_path}
              voteAverage={movie.vote_average}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
