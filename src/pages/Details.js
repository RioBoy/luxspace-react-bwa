import React from 'react';

import Header from 'parts/Header';
import Breadcrumb from 'components/Breadcrumb';
import ProductDetails from 'parts/Details/ProductDetails';
import Suggestion from 'parts/Details/Suggestion';
import Sitemap from 'parts/Sitemap';
import Footer from 'parts/Footer';

export default function Details() {
  return (
    <>
      <Header theme="white" />

      <Breadcrumb
        list={[
          { url: '/', name: 'Home' },
          { url: '/categories/123123', name: 'Office Room' },
          { url: '/categories/123123/products/321', name: 'Details' },
        ]}
      />

      <ProductDetails />
      <Suggestion />
      <Sitemap />
      <Footer />
    </>
  );
}
