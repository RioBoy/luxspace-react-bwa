import React from 'react';

export default function Suggestion() {
  return (
    <section class="bg-gray-100 px-4 py-16">
      <div class="container mx-auto">
        <div class="flex flex-start mb-4">
          <h3 class="text-2xl capitalize font-semi-bold">
            complte your room <br class="" />
            with what we designed
          </h3>
        </div>
        <div class="flex flex-wrap overflow-x-auto mb-4 -mx-3">
          {/* <!-- Items 1 Start --> */}
          <div class="px-3 w-full md:w-6/12 lg:w-3/12 mb-4">
            <div class="rounded-xl p-4 pb-8 relative bg-white">
              <div class="rounded-xl overflow-hidden card-shadow w-full h-48">
                <img
                  src="/images/content/chair-office-1.jpg"
                  alt="chair office 1"
                  class="w-full h-full object-cover object-center"
                />
              </div>
              <h5 class="text-lg font-semibold mt-4">Office Chair 2xl</h5>
              <span class="">IDR 89.300.00</span>
              <a href="details.html" class="stretched-link">
                {/* <!-- fake children --> */}
              </a>
            </div>
          </div>
          {/* <!-- End Items 1 --> */}

          {/* <!-- Items 2 Start --> */}
          <div class="px-3 w-full md:w-6/12 lg:w-3/12 mb-4">
            <div class="rounded-xl p-4 pb-8 relative bg-white">
              <div class="rounded-xl overflow-hidden card-shadow w-full h-48">
                <img
                  src="/images/content/chair-office-2.jpg"
                  alt="chair office 2"
                  class="w-full h-full object-cover object-center"
                />
              </div>
              <h5 class="text-lg font-semibold mt-4">Office Chair 2xl</h5>
              <span class="">IDR 89.300.00</span>
              <a href="details.html" class="stretched-link">
                {/* <!-- fake children --> */}
              </a>
            </div>
          </div>
          {/* <!-- End Items 2 --> */}

          {/* <!-- Items 3 Start --> */}
          <div class="px-3 w-full md:w-6/12 lg:w-3/12 mb-4">
            <div class="rounded-xl p-4 pb-8 relative bg-white">
              <div class="rounded-xl overflow-hidden card-shadow w-full h-48">
                <img
                  src="/images/content/chair-office-3.jpg"
                  alt="chair office 3"
                  class="w-full h-full object-cover object-center"
                />
              </div>
              <h5 class="text-lg font-semibold mt-4">Office Chair 2xl</h5>
              <span class="">IDR 89.300.00</span>
              <a href="details.html" class="stretched-link">
                {/* <!-- fake children --> */}
              </a>
            </div>
          </div>
          {/* <!-- End Items 3 --> */}

          {/* <!-- Items 4 Start --> */}
          <div class="px-3 w-full md:w-6/12 lg:w-3/12 mb-4">
            <div class="rounded-xl p-4 pb-8 relative bg-white">
              <div class="rounded-xl overflow-hidden card-shadow w-full h-48">
                <img
                  src="/images/content/chair-office-4.jpg"
                  alt="chair office 4"
                  class="w-full h-full object-cover object-center"
                />
              </div>
              <h5 class="text-lg font-semibold mt-4">Office Chair 2xl</h5>
              <span class="">IDR 89.300.00</span>
              <a href="details.html" class="stretched-link">
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
