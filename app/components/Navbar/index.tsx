import { json, NavLink, useLoaderData } from '@remix-run/react';
import { LuHistory, LuHome, LuSearch } from 'react-icons/lu';
import TripleDot from '~/assets/triple-dot.svg?react';

export const loader = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
    },
  };

  const accountId = '12233931';
  const response = await (
    await fetch(`https://api.themoviedb.org/3/account/${accountId}`, options)
  ).json();

  return json({ user: response });
};

export default function Navbar() {
  const { user } = useLoaderData<any>();

  return (
    <aside
      id="default-sidebar"
      className="fixed left-0 top-0 z-40 h-screen w-72 -translate-x-full transition-transform sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="flex h-full flex-col overflow-y-auto px-3 py-4 dark:bg-black">
        <div className="mb-5">
          <h2 className="text-center text-4xl font-extrabold text-red-500">
            Watchlists
          </h2>
        </div>

        <form className="relative">
          <div className="absolute inset-y-0 start-0 flex cursor-pointer items-center ps-3 dark:text-white">
            <LuSearch />
          </div>

          <input
            type="search"
            className="block w-full rounded-md border p-2 ps-10 text-sm focus:border-gray-500 focus:ring-gray-800 dark:border-zinc-600 dark:bg-black
              dark:text-zinc-300"
            placeholder="Search"
          />
        </form>

        <ul className="mt-10 space-y-2 font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive ? 'bg-stone-900' : ''
                } flex items-center rounded-md px-4 py-2 text-base font-normal dark:text-white dark:hover:bg-stone-900`
              }
            >
              <LuHome /> <span className="ml-4">Home</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/history"
              className={({ isActive }) =>
                `${
                  isActive ? 'dark:bg-stone-900' : ''
                } flex items-center rounded-md px-4 py-2 text-base font-normal dark:text-white dark:hover:bg-stone-900`
              }
            >
              <LuHistory /> <span className="ml-4">History</span>
            </NavLink>
          </li>
        </ul>

        <button className="mt-8 block w-full rounded-md bg-red-500 p-2 text-center text-base font-bold dark:text-neutral-900">
          + Create watchlist
        </button>

        <div className="mt-auto rounded-md border border-neutral-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-cyan-400 p-1">
                <p className="text-xs">VM</p>
              </div>

              {/* <p className="text-center text-sm text-white">{data?.username}</p> */}
            </div>

            <TripleDot className="cursor-pointer" />
          </div>
        </div>
      </div>
    </aside>
  );
}
