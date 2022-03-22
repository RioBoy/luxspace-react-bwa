import React from 'react';
import { Link } from 'react-router-dom';

import Header from 'parts/Header';
import Breadcrumb from 'components/Breadcrumb';
import Sitemap from 'parts/Sitemap';
import Footer from 'parts/Footer';

export default function Congratulations() {
  return (
    <>
      <Header theme="white" />

      <Breadcrumb
        list={[
          { url: '/', name: 'Home' },
          { url: '/congratulation', name: 'Success Checkout' },
        ]}
      />

      <section class="py-10 md:py-16">
        <div class="container mx-auto min-h-screen px-4">
          <div class="flex flex-col items-center justify-center">
            <div class="w-full md:w-4/12 text-center">
              <img
                src="/images/content/illustration-success.png"
                alt="illustration success"
              />
              <h2 class="text-3xl font-semibold mb-6">Ah yes it's success!</h2>
              <p class="text-lg mb-12">
                Furniture yang anda beli akan kami kirimkan saat ini juga so now
                please sit tight and be ready for it
              </p>
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

      <Sitemap />
      <Footer />
    </>
  );
}
