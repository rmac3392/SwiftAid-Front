<template>
  <div class="flex w-[100%] h-[90%] bg-white">
    <div class="text-center w-full my-auto">
      <div class="text-2xl mb-8">
        Fill up the following fields* to add Emergency Responder Unit
      </div>

      <div
        class="flex flex-row row-span-2 bg-secondary w-[90%] mx-auto rounded-lg"
      >
        <div class="w-[40%] h-[80%] my-[5%] mx-[5%]">
          <form>
            <div class="flex justify-start items-start">
              <label
                for="company"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Name</label
              >
            </div>

            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  id="last_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="Doe"
                  required
                />
              </div>
              <div>
                <div class="flex justify-start items-start">
                  <label
                    for="company"
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >Company</label
                  >
                </div>

                <input
                  type="text"
                  id="company"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="Flowbite"
                  required
                />
              </div>
              <div>
                <div class="flex justify-start items-start">
                  <label
                    for="phone"
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >Phone number</label
                  >
                </div>

                <input
                  type="tel"
                  id="phone"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="123-45-678"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                />
              </div>
              <div>
                <div class="flex justify-start items-start">
                  <label
                    for="website"
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >Website URL</label
                  >
                </div>

                <input
                  type="url"
                  id="website"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="flowbite.com"
                  required
                />
              </div>
              <div>
                <div class="flex justify-start items-start">
                  <label
                    for="visitors"
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >BirthDate</label
                  >
                </div>

                <input
                  type="number"
                  id="visitors"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div class="mb-6">
              <div class="flex justify-start items-start">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Email address</label
                >
              </div>

              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                placeholder="john.doe@company.com"
                required
              />
            </div>

            <div
              class="flex items-center justify-center gap-5 flex-row row-span-2"
            >
              <div class="flex flex-col col-span-2 justify-start items-start">
                <label
                  for="Password"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Password</label
                >
                <div class="mb-6">
                  <input
                    type="password"
                    id="password"
                    class="bg-gray-50 border px-10 justify-start items-start border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                    placeholder="•••••••••"
                    required
                  />
                </div>
              </div>

              <div class="flex flex-col col-span-2 justify-start items-start">
                <label
                  for="Password"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Confirm password</label
                >
                <div class="mb-6">
                  <input
                    type="password"
                    id="confirm_password"
                    class="bg-gray-50 border px-10 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                    placeholder="•••••••••"
                    required
                  />
                </div>
              </div>
            </div>

            <div class="flex items-start mb-6">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                for="remember"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >I agree with the
                <a
                  href="#"
                  class="text-blue-600 hover:underline dark:text-primary"
                  >terms and conditions</a
                >.</label
              >
            </div>

            <button
              type="submit"
              class="text-white flex justify-start items-start my-5 px-8 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto s py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>

        <div class="bg-primary w-[50%] mx-[5%] my-[5%] rounded-lg h-[530px]">
          <div
            class="flex items-center justify-center w-[50%] mx-auto my-[10%]"
          >
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
