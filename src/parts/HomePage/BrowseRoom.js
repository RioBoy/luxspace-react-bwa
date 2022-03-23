import React, { useEffect } from 'react';
import useAsync from 'helpers/hooks/useAsync';

export default function BrowseRoom() {
  const { data, status, error, run, isLoading } = useAsync({
    data: { username: '' },
  });

  useEffect(() => {
    run(
      fetch(
        'https://7d9d9590-4108-447c-981e-ee4681d291b0.mock.pstmn.io/api/categories/?page=1&limit=4',
      ).then(async (response) => {
        const jsonResponse = await response.json();
        if (response.ok) return jsonResponse;

        throw new Error(JSON.stringify(jsonResponse));
      }),
    );
  }, [run]);

  console.log(data, status, error);
  if (isLoading) return 'Loading';
  return (
    <section className="flex bg-gray-100 py-16 px-4" id="browse-the-room">
      <div className="container mx-auto">
        <div className="flex flex-start mb-4">
          <h3 className="text-2xl capitalize font-semibold">
            browse the room <br className="" />
            that we desgined for you
          </h3>
        </div>
        <div className="grid grid-rows-2 grid-cols-9 gap-4">
          {/* <!-- Start item browse the room 1 --> */}
          <div
            className="relative col-span-9 row-span-1 md:col-span-4 card"
            style={{ height: 180 }}
          >
            <div className="card-shadow rounded-xl">
              <img
                src="./images/content/image-catalog-1.jpg"
                alt="catalog 1"
                className="w-full h-full object-cover overlay overflow-hidden rounded-xl"
              />
            </div>
            <div className="overlay left-0 top-0 bottom-0 flex justify-center flex-col pl-48 md:pl-70 lg:pl-72">
              <h5 className="text-lg font-semibold">Living Room</h5>
              <span className="">18.309 items</span>
            </div>
            <a href="/categories/123" className="stretched-link">
              {/* <!-- fake children --> */}
            </a>
          </div>
          {/* <!-- End item browse the room 1 --> */}

          {/* <!-- Start item browse the room 2 --> */}
          <div className="relative col-span-9 row-span-1 md:col-span-2 md:row-span-2 card">
            <div className="card-shadow rounded-xl">
              <img
                src="./images/content/image-catalog-4.jpg"
                alt="catalog 4"
                className="w-full h-full object-cover overlay overflow-hidden rounded-xl"
              />
            </div>
            <div className="overlay inset-0 md:bottom-auto flex justify-center md:items-center flex-col pl-48 md:pl-0 pt-0 md:pt-12">
              <h5 className="text-lg font-semibold">Decoration</h5>
              <span className="">77.392 items</span>
            </div>
            <a href="/categories/123" className="stretched-link">
              {/* <!-- fake children --> */}
            </a>
          </div>
          {/* <!-- End item browse the room 2 --> */}

          {/* <!-- Start item browse the room 3 --> */}
          <div className="relative col-span-9 row-span-1 md:col-span-3 md:row-span-2 card">
            <div className="card-shadow rounded-xl">
              <img
                src="./images/content/image-catalog-3.jpg"
                alt="catalog 3"
                className="w-full h-full object-cover overlay overflow-hidden rounded-xl"
              />
            </div>
            <div className="overlay inset-0 md:bottom-auto flex justify-center md:items-center flex-col pl-48 md:pl-0 pt-0 md:pt-12">
              <h5 className="text-lg font-semibold">Bed Room</h5>
              <span className="">22.094 items</span>
            </div>
            <a href="/categories/123" className="stretched-link">
              {/* <!-- fake children --> */}
            </a>
          </div>
          {/* <!-- End item browse the room 3 --> */}

          {/* <!-- Start item browse the room 4 --> */}
          <div className="relative col-span-9 row-span-1 md:col-span-4 card">
            <div className="card-shadow rounded-xl">
              <img
                src="./images/content/image-catalog-2.jpg"
                alt="catalog 2"
                className="w-full h-full object-cover overlay overflow-hidden rounded-xl"
              />
            </div>
            <div className="overlay left-0 top-0 bottom-0 flex justify-center flex-col pl-48 md:pl-70 lg:pl-72">
              <h5 className="text-lg font-semibold">Children Room</h5>
              <span className="">807 items</span>
            </div>
            <a href="/categories/123" className="stretched-link">
              {/* <!-- fake children --> */}
            </a>
          </div>
          {/* <!-- End item browse the room 4 --> */}
        </div>
      </div>
    </section>
  );
}
