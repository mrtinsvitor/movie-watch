import { NavLink } from '@remix-run/react';
import { LuHistory, LuHome, LuSearch } from 'react-icons/lu';

export default function Navbar() {
  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 left-0 z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto dark:bg-black">
        <div className="mb-5">
          <h2 className="text-center text-red-500 text-4xl font-extrabold">
            Watchlists
          </h2>
        </div>

        <form className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 cursor-pointer dark:text-white">
            <LuSearch />
          </div>

          <input
            type="search"
            className="block w-full p-2 ps-10 text-sm dark:text-zinc-300 border dark:border-zinc-600 dark:bg-black rounded-md focus:ring-gray-800
              focus:border-gray-500"
            placeholder="Search"
          />
        </form>

        <ul className="space-y-2 font-medium mt-10">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive ? 'bg-stone-900' : ''
                } flex items-center px-4 py-2 rounded-md dark:hover:bg-stone-900 dark:text-white text-base font-normal`
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
                } flex items-center px-4 py-2 rounded-md dark:hover:bg-stone-900 dark:text-white text-base font-normal`
              }
            >
              <LuHistory /> <span className="ml-4">History</span>
            </NavLink>
          </li>
        </ul>

        <button className="bg-red-500 rounded-md text-center dark:text-neutral-900 text-base font-bold p-2 block w-full mt-8">
          + Create watchlist
        </button>
      </div>
    </aside>
  );
}
