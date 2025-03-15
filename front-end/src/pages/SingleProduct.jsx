import React from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  let {id} = useParams();

  console.log(id)
  return (
    <div>
      <div className="p-4">
        <div className="mx-auto max-w-xl lg:max-w-6xl">
          <div className="max-lg:gap-12 max-sm:gap-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
            <div className="top-0 w-full lg:sticky">
              <div className="flex flex-row gap-2">
                <div className="max-sm:w-14 flex w-16 shrink-0 flex-col gap-2">
                  <img
                    src="https://readymadeui.com/images/fashion-img-1.webp"
                    alt="Product1"
                    className="aspect-[64/85] w-full cursor-pointer border-b-2 border-black object-cover object-top"
                  />
                  <img
                    src="https://readymadeui.com/images/fashion-img-2.webp"
                    alt="Product2"
                    className="aspect-[64/85] w-full cursor-pointer border-b-2 border-transparent object-cover object-top"
                  />
                  <img
                    src="https://readymadeui.com/images/fashion-img-3.webp"
                    alt="Product3"
                    className="aspect-[64/85] w-full cursor-pointer border-b-2 border-transparent object-cover object-top"
                  />
                  <img
                    src="https://readymadeui.com/images/fashion-img-4.webp"
                    alt="Product4"
                    className="aspect-[64/85] w-full cursor-pointer border-b-2 border-transparent object-cover object-top"
                  />
                </div>
                <div className="flex-1">
                  <img
                    src="https://readymadeui.com/images/fashion-img-1.webp"
                    alt="Product"
                    className="aspect-[548/712] w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="w-full">
              <div>
                <h3 className="text-slate-900 text-lg font-semibold sm:text-xl">
                  Women Embroidered A-line Kurta
                </h3>
                <p className="text-slate-500 mt-2 text-sm">
                  Women Embroidered Georgette A-line Kurta With Attached Dupatta
                  (Maroon)
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <h4 className="text-slate-900 text-2xl font-semibold sm:text-3xl">
                    $12
                  </h4>
                  <p className="text-slate-500 text-lg">
                    <strike>$16</strike>{" "}
                    <span className="ml-1.5 text-sm">Tax included</span>
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <div className="flex items-center gap-1 rounded-full bg-green-600 px-2.5 text-lg text-white">
                    <p>4</p>
                    <svg
                      className="h-[13px] w-[13px] fill-white"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                  </div>
                  <p className="text-slate-500 text-sm">
                    253 ratings and 27 reviews
                  </p>
                </div>
              </div>
              <hr className="border-slate-300 my-6" />
              <div>
                <h3 className="text-slate-900 text-lg font-semibold sm:text-xl">
                  Sizes
                </h3>
                <div className="mt-4 flex flex-wrap gap-4">
                  <button
                    type="button"
                    className="border-slate-300 flex h-9 w-10 shrink-0 items-center justify-center border text-sm hover:border-blue-600"
                  >
                    SM
                  </button>
                  <button
                    type="button"
                    className="flex h-9 w-10 shrink-0 items-center justify-center border border-blue-600 text-sm hover:border-blue-600"
                  >
                    MD
                  </button>
                  <button
                    type="button"
                    className="border-slate-300 flex h-9 w-10 shrink-0 items-center justify-center border text-sm hover:border-blue-600"
                  >
                    LG
                  </button>
                  <button
                    type="button"
                    className="border-slate-300 flex h-9 w-10 shrink-0 items-center justify-center border text-sm hover:border-blue-600"
                  >
                    XL
                  </button>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <button
                    type="button"
                    className="border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-900 w-[45%] border px-4 py-3 text-sm font-medium"
                  >
                    Add to wishlist
                  </button>
                  <button
                    type="button"
                    className="w-[45%] border border-blue-600 bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
              <hr className="border-slate-300 my-6" />
              <div>
                <h3 className="text-slate-900 text-lg font-semibold sm:text-xl">
                  Select Delivery Location
                </h3>
                <p className="text-slate-500 mt-2 text-sm">
                  Enter the pincode of your area to check product availability.
                </p>
                <div className="mt-6 flex max-w-sm items-center gap-2">
                  <input
                    type="number"
                    placeholder="Enter pincode"
                    className="bg-slate-100 w-full border-0 px-4 py-2.5 text-sm outline-0"
                  />
                  <button
                    type="button"
                    className="border-0 bg-blue-600 px-4 py-2.5 text-sm text-white outline-0 hover:bg-blue-700"
                  >
                    Apply
                  </button>
                </div>
              </div>
              <hr className="border-slate-300 my-6" />
              <div>
                <h3 className="text-slate-900 text-lg font-semibold sm:text-xl">
                  Product Information
                </h3>
                <div className="mt-4" role="accordion">
                  <div className="hover:bg-slate-100 transition-all">
                    <button
                      type="button"
                      className="text-slate-900 flex w-full items-center px-4 py-2.5 text-left text-sm font-semibold"
                    >
                      <span className="mr-4">Product details</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-auto h-3 w-3 shrink-0 -rotate-180 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                          clipRule="evenodd"
                          data-original="#000000"
                        />
                      </svg>
                    </button>
                    <div className="px-4 pb-4">
                      <p className="text-slate-500 text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                  <div className="hover:bg-slate-100 transition-all">
                    <button
                      type="button"
                      className="text-slate-900 flex w-full items-center px-4 py-2.5 text-left text-sm font-semibold"
                    >
                      <span className="mr-4">Vendor details</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-auto h-3 w-3 shrink-0 -rotate-90 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                          clipRule="evenodd"
                          data-original="#000000"
                        />
                      </svg>
                    </button>
                    <div className="hidden px-4 pb-4">
                      <p className="text-slate-500 text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                  <div className="hover:bg-slate-100 transition-all">
                    <button
                      type="button"
                      className="text-slate-900 flex w-full items-center px-4 py-2.5 text-left text-sm font-semibold"
                    >
                      <span className="mr-4">Return and exchange policy</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-auto h-3 w-3 shrink-0 -rotate-90 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                          clipRule="evenodd"
                          data-original="#000000"
                        />
                      </svg>
                    </button>
                    <div className="hidden px-4 pb-4">
                      <p className="text-slate-500 text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="border-slate-300 my-6" />
              <div>
                <h3 className="text-slate-900 text-lg font-semibold sm:text-xl">
                  Customer Reviews
                </h3>
                <div className="mt-6 flex items-center gap-1.5">
                  <svg
                    className="h-5 w-5 fill-blue-600"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="h-5 w-5 fill-blue-600"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="h-5 w-5 fill-blue-600"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="h-5 w-5 fill-blue-600"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="h-5 w-5 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <h4 className="text-slate-900 text-2xl font-semibold sm:text-3xl">
                    4.0 / 5
                  </h4>
                  <p className="text-slate-500 text-sm">Based on 253 ratings</p>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex items-start">
                  <img
                    src="https://readymadeui.com/team-2.webp"
                    className="h-12 w-12 rounded-full border-2 border-white"
                  />
                  <div className="ml-3">
                    <h4 className="text-slate-900 text-sm font-semibold">
                      John Doe
                    </h4>
                    <div className="mt-1 flex space-x-1">
                      <svg
                        className="h-[14px] w-[14px] fill-blue-600"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="h-[14px] w-[14px] fill-blue-600"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="h-[14px] w-[14px] fill-blue-600"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="h-[14px] w-[14px] fill-blue-600"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="h-[14px] w-[14px] fill-[#CED5D8]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <p className="text-slate-500 !ml-2 text-xs">
                        2 months ago
                      </p>
                    </div>
                    <p className="text-slate-500 mt-4 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <a
                  href="javascript:void(0)"
                  className="mt-6 block text-sm font-semibold text-blue-600 hover:underline"
                >
                  Read all reviews
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
