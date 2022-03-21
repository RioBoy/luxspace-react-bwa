import React from 'react';

export default function JustArrived() {
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
        <div className="container mx-auto"></div>

        <div className="flex -mx-4 flex-row relative">
          {/* Item carousel 1 Start */}
          <div className="px-4 relative card">
            <div
              className="rounded-xl overflow-hidden card-shadow"
              style={{ width: 287, height: 386 }}
            >
              <img
                src="./images/content/image-carousel-1.jpg"
                alt="cangkir"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h5 className="text-lg font-semibold mt-4">Cangkir Mauttie</h5>
            <span className="">IDR 89.300</span>
            <a href="details.html" className="stretched-link">
              {/* fake children */}
            </a>
          </div>
          {/* End Item carousel 1 */}

          {/* Item carousel 2 Start */}
          <div className="px-4 relative card">
            <div
              className="rounded-xl overflow-hidden card-shadow"
              style={{ width: 287, height: 386 }}
            >
              <img
                src="./images/content/image-carousel-2.jpg"
                alt="cangkir"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h5 className="text-lg font-semibold mt-4">Bankyu Minimax</h5>
            <span className="">IDR 67.999</span>
            <a href="details.html" className="stretched-link">
              {/* fake children */}
            </a>
          </div>
          {/* End Item carousel 2 */}

          {/* Item carousel 3 Start */}
          <div className="px-4 relative card">
            <div
              className="rounded-xl overflow-hidden card-shadow"
              style={{ width: 287, height: 386 }}
            >
              <img
                src="./images/content/image-carousel-3.jpg"
                alt="cangkir"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h5 className="text-lg font-semibold mt-4">Buku Sidu Edition</h5>
            <span className="">IDR 12.000.000</span>
            <a href="details.html" className="stretched-link">
              {/* fake children */}
            </a>
          </div>
          {/* End Item carousel 3 */}

          {/* Item carousel 4 Start */}
          <div className="px-4 relative card">
            <div
              className="rounded-xl overflow-hidden card-shadow"
              style={{ width: 287, height: 386 }}
            >
              <img
                src="./images/content/image-carousel-4.jpg"
                alt="cangkir"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h5 className="text-lg font-semibold mt-4">Watch Note X</h5>
            <span className="">IDR 7.600.999</span>
            <a href="details.html" className="stretched-link">
              {/* fake children */}
            </a>
          </div>
          {/* End Item carousel 4 */}

          {/* Item carousel 5 Start */}
          <div className="px-4 relative card">
            <div
              className="rounded-xl overflow-hidden card-shadow"
              style={{ width: 287, height: 386 }}
            >
              <img
                src="./images/content/image-carousel-5.jpg"
                alt="cangkir"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h5 className="text-lg font-semibold mt-4">Racking Plants</h5>
            <span className="">IDR 159.300</span>
            <a href="details.html" className="stretched-link">
              {/* fake children */}
            </a>
          </div>
          {/* End Item carousel 5 */}

          {/* Item carousel 3 Start */}
          <div className="px-4 relative card">
            <div
              className="rounded-xl overflow-hidden card-shadow"
              style={{ width: 287, height: 386 }}
            >
              <img
                src="./images/content/image-carousel-3.jpg"
                alt="cangkir"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h5 className="text-lg font-semibold mt-4">Buku Sidu Edition</h5>
            <span className="">IDR 12.000.000</span>
            <a href="details.html" className="stretched-link">
              {/* fake children */}
            </a>
          </div>
          {/* End Item carousel 3 */}
        </div>
      </div>
    </section>
  );
}
