import React from 'react';
import { Link } from 'react-router-dom';

export default function PageErrorMessage({
  title = '404 NOT FOUND',
  body = 'Looks like this page not found',
}) {
  return (
    <section class="py-10 md:py-16">
      <div class="container mx-auto min-h-screen px-4">
        <div class="flex flex-col items-center justify-center">
          <div class="w-full md:w-4/12 text-center">
            <h2 class="text-3xl font-semibold mb-6">{title}</h2>
            <p class="text-lg mb-12">{body}</p>
            <Link
              to="/"
              class="bg-pink-400 text-black hover:bg-black hover:text-pink-400 rounded-full px-8 py-3 focus:outline-none w-full text-lg transition duration-200"
            >
              Back to Shop
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
