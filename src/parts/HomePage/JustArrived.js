import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import useAsync from 'helpers/hooks/useAsync';
import fetch from 'helpers/fetch';

import Carousel from 'components/Carousel';

function Loading() {
  return Array(6)
    .fill()
    .map((_, index) => {
      return (
        <div className="px-4 relative card" key={index}>
          <div
            className="rounded-xl bg-gray-300 overflow-hidden card-shadow"
            style={{ width: 287, height: 386 }}
          ></div>
          <div className="w-36 h-3 bg-gray-300 mt-2 rounded-full"></div>
          <div className="w-24 h-3 bg-gray-300 mt-3 rounded-full"></div>
        </div>
      );
    });
}

export default function JustArrived() {
  const { data, error, run, isLoading } = useAsync();

  const refContainer = useRef(null);

  useEffect(() => {
    run(
      fetch({
        url: '/api/products/?page=1&limit=10',
      }),
    );
  }, [run]);

  return (
    <section className="flex flex-col py-16">
      <div className="container mx-auto mb-4">
        <div className="flex justify-center text-center mb-4">
          <h3 className="text-2xl capitalize font-semibold">
            just arrived <br className="" />
            this summer for you
          </h3>
        </div>
      </div>
      <div className="overflow-x-hidden px-4" id="carousel">
        <div className="container mx-auto" ref={refContainer}></div>

        {isLoading ? (
          <div
            className="flex -mx-4 flex-row relative"
            style={{
              paddingLeft:
                refContainer.current?.getBoundingClientRect()?.left - 16 || 0,
            }}
          >
            <Loading />
          </div>
        ) : error ? (
          JSON.stringify(error)
        ) : data.data.length === 0 ? (
          'No Product FOund'
        ) : (
          <Carousel refContainer={refContainer}>
            {data.data.map((item) => {
              return (
                <div className="px-4 relative card" key={item.id}>
                  <div
                    className="rounded-xl overflow-hidden card-shadow"
                    style={{ width: 287, height: 386 }}
                  >
                    <img
                      src={item.imageUrl}
                      alt="cangkir"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <h5 className="text-lg font-semibold mt-4">{item.title}</h5>
                  <span className="">IDR {item.price}</span>
                  <Link
                    to={`/categories/${item.idc}/products/${item.id}`}
                    className="stretched-link"
                  >
                    {/* fake children */}
                  </Link>
                </div>
              );
            })}
          </Carousel>
        )}
      </div>
    </section>
  );
}
