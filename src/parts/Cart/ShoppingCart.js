import React from 'react';

export default function ShoppingCart() {
  return (
    // <!-- Shipping Cart Start -->
    <div class="w-full px-4 mb-4 lg:w-8/12 md:mb-0" id="shopping-cart">
      <div class="flex flex-start mb-4 mt-8 pb-3 border-b border-gray-200 md:border-b-0">
        <h3 class="text-2xl">Shopping Cart</h3>
      </div>

      {/* <!-- Table Title Start --> */}
      <div class="border-b border-gray-200 mb-4 hidden md:block">
        <div class="flex flex-start items-center pb-2 -mx-4">
          <div class="px-4 flex-none">
            <div class="" style={{ width: 90 }}>
              <h6>Photo</h6>
            </div>
          </div>
          <div class="px-4 w-5/12">
            <div class="">
              <h6>Product</h6>
            </div>
          </div>
          <div class="px-4 w-5/12">
            <div class="">
              <h6>Price</h6>
            </div>
          </div>
          <div class="px-4 w-2/12">
            <div class="text-center">
              <h6>Actions</h6>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Table Title --> */}

      {/* <!-- Cart Empty Start --> */}
      <p id="cart-empty" class="hidden text-center py-8">
        Ooops... Cart is empty
        <a href="details.html" class="underline">
          Shop Now
        </a>
      </p>
      {/* <!-- End Cart Empty --> */}

      {/* <!-- Table Item 1 Start --> */}
      <div
        class="flex flex-start flex-wrap items-center mb-4 -mx-4"
        data-row="1"
      >
        <div class="px-4 flex-none">
          <div class="" style={{ width: 90, height: 90 }}>
            <img
              src="./images/content/chair-office-1.jpg"
              alt="chair office 1"
              class="object-cover rounded-xl w-full h-full"
            />
          </div>
        </div>
        <div class="px-4 w-auto md:w-5/12 flex-1">
          <div class="">
            <h6 class="font-semibold text-lg md:text-xl leading-8">
              Saman Kakka
            </h6>
            <span class="text-sm md:text-lg">Office Room</span>
            <h6 class="font-semibold text-base md:text-lg block md:hidden">
              IDR 28.000.000
            </h6>
          </div>
        </div>
        <div class="px-4 w-auto md:w-5/12 flex-none md:flex-1 hidden md:block">
          <div class="">
            <h6 class="font-semibold text-lg">IDR 28.000.000</h6>
          </div>
        </div>
        <div class="px-4 w-2/12">
          <div class="text-center">
            <button
              data-delete-item="1"
              class="text-red-600 border-none focus:outline-none px-3 py-1"
            >
              X
            </button>
          </div>
        </div>
      </div>
      {/* <!-- End Table Item 1 --> */}

      {/* <!-- Table Item 2 Start --> */}
      <div
        class="flex flex-start flex-wrap items-center mb-4 -mx-4"
        data-row="2"
      >
        <div class="px-4 flex-none">
          <div class="" style={{ width: 90, height: 90 }}>
            <img
              src="./images/content/chair-office-2.jpg"
              alt="chair office 2"
              class="object-cover rounded-xl w-full h-full"
            />
          </div>
        </div>
        <div class="px-4 w-auto md:w-5/12 flex-1">
          <div class="">
            <h6 class="font-semibold text-lg md:text-xl leading-8">
              Green Seat
            </h6>
            <span class="text-sm md:text-lg">Office Room</span>
            <h6 class="font-semibold text-base md:text-lg block md:hidden">
              IDR 12.500.000
            </h6>
          </div>
        </div>
        <div class="px-4 w-auto md:w-5/12 flex-none md:flex-1 hidden md:block">
          <div class="">
            <h6 class="font-semibold text-lg">IDR 12.500.000</h6>
          </div>
        </div>
        <div class="px-4 w-2/12">
          <div class="text-center">
            <button
              data-delete-item="2"
              class="text-red-600 border-none focus:outline-none px-3 py-1"
            >
              X
            </button>
          </div>
        </div>
      </div>
      {/* <!-- End Table Item 2 --> */}

      {/* <!-- Table Item 3 Start --> */}
      <div
        class="flex flex-start flex-wrap items-center mb-4 -mx-4"
        data-row="3"
      >
        <div class="px-4 flex-none">
          <div class="" style={{ width: 90, height: 90 }}>
            <img
              src="./images/content/chair-office-3.jpg"
              alt="chair office 3"
              class="object-cover rounded-xl w-full h-full"
            />
          </div>
        </div>
        <div class="px-4 w-auto md:w-5/12 flex-1">
          <div class="">
            <h6 class="font-semibold text-lg md:text-xl leading-8">Pacific</h6>
            <span class="text-sm md:text-lg">Office Room</span>
            <h6 class="font-semibold text-base md:text-lg block md:hidden">
              IDR 88.800.000
            </h6>
          </div>
        </div>
        <div class="px-4 w-auto md:w-5/12 flex-none md:flex-1 hidden md:block">
          <div class="">
            <h6 class="font-semibold text-lg">IDR 88.800.000</h6>
          </div>
        </div>
        <div class="px-4 w-2/12">
          <div class="text-center">
            <button
              data-delete-item="3"
              class="text-red-600 border-none focus:outline-none px-3 py-1"
            >
              X
            </button>
          </div>
        </div>
      </div>
      {/* <!-- End Table Item 3 --> */}
    </div>
    // <!-- End Shipping Cart -->
  );
}
