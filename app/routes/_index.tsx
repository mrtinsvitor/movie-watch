import { json, type MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { LuSearch } from 'react-icons/lu';
import MovieCard from '~/components/MovieCard';
import Navbar from '~/components/Navbar';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export const loader = async () => {
  console.log(process.env.AUTH_TOKEN);
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
  const { movies } = useLoaderData();

  return (
    <div>
      <Navbar />

      <main className="p-12 sm:ml-72">
        <form className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 cursor-pointer dark:text-white">
            <LuSearch />
          </div>

          <input
            type="search"
            className="block w-full p-2 ps-10 text-sm dark:text-zinc-300 border dark:border-zinc-600 dark:bg-zinc-800 rounded-md focus:ring-gray-800
              focus:border-gray-500"
            placeholder="Search"
          />
        </form>

        <div className="mt-8">
          <h2 className="text-3xl text-neutral-200 font-normal">
            Popular movies right now
          </h2>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-center">
            {movies?.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                releaseDate={movie.release_date}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
