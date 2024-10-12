import { MetaFunction } from '@remix-run/node';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { QueryClient } from '@tanstack/react-query';
import Navbar from './components/Navbar';
import './tailwind.css';

export const meta: MetaFunction = () => {
  return [
    { title: 'Movie Watch' },
    { name: 'description', content: 'Welcome to Movie Watch!' },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="dark:bg-zinc-800">
        <Navbar />
        <main className="p-12 sm:ml-72">{children}</main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
