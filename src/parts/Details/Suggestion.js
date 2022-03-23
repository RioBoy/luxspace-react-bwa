import React from 'react';

export default function Suggestion() {
  return (
    <section className="bg-gray-100 px-4 py-16">
      <div className="container mx-auto">
        <div className="flex flex-start mb-4">
          <h3 className="text-2xl capitalize font-semi-bold">
            complte your room <br className="" />
            with what we designed
          </h3>
        </div>
        <div className="flex flex-wrap overflow-x-auto mb-4 -mx-3">
          {/* <!-- Items 1 Start --> */}
          <div className="px-3 w-full md:w-6/12 lg:w-3/12 mb-4">
            <div className="rounded-xl p-4 pb-8 relative bg-white">
              <div className="rounded-xl overflow-hidden card-shadow w-full h-48">
                <img
                  src="/images/content/chair-office-1.jpg"
                  alt="chair office 1"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h5 className="text-lg font-semibold mt-4">Office Chair 2xl</h5>
              <span className="">IDR 89.300.00</span>
              <a href="details.html" className="stretched-link">
                {/* <!-- fake children --> */}
              </a>
            </div>
          </div>
          {/* <!-- End Items 1 --> */}

          {/* <!-- Items 2 Start --> */}
          <div className="px-3 w-full md:w-6/12 lg:w-3/12 mb-4">
            <div className="rounded-xl p-4 pb-8 relative bg-white">
              <div className="rounded-xl overflow-hidden card-shadow w-full h-48">
                <img
                  src="/images/content/chair-office-2.jpg"
                  alt="chair office 2"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h5 className="text-lg font-semibold mt-4">Office Chair 2xl</h5>
              <span className="">IDR 89.300.00</span>
              <a href="details.html" className="stretched-link">
                {/* <!-- fake children --> */}
              </a>
            </div>
          </div>
          {/* <!-- End Items 2 --> */}

          {/* <!-- Items 3 Start --> */}
          <div className="px-3 w-full md:w-6/12 lg:w-3/12 mb-4">
            <div className="rounded-xl p-4 pb-8 relative bg-white">
              <div className="rounded-xl overflow-hidden card-shadow w-full h-48">
                <img
                  src="/images/content/chair-office-3.jpg"
                  alt="chair office 3"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h5 className="text-lg font-semibold mt-4">Office Chair 2xl</h5>
              <span className="">IDR 89.300.00</span>
              <a href="details.html" className="stretched-link">
                {/* <!-- fake children --> */}
              </a>
            </div>
          </div>
          {/* <!-- End Items 3 --> */}

          {/* <!-- Items 4 Start --> */}
          <div className="px-3 w-full md:w-6/12 lg:w-3/12 mb-4">
            <div className="rounded-xl p-4 pb-8 relative bg-white">
              <div className="rounded-xl overflow-hidden card-shadow w-full h-48">
                <img
                  src="/images/content/chair-office-4.jpg"
                  alt="chair office 4"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h5 className="text-lg font-semibold mt-4">Office Chair 2xl</h5>
              <span className="">IDR 89.300.00</span>
              <a href="details.html" className="stretched-link">
                {/* <!-- fake children --> */}
              </a>
            </div>
          </div>
          {/* <!-- End Items 4 --> */}
        </div>
      </div>
    </section>
  );
}
