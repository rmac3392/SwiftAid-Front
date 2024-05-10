<template>
  <div v-if="role == 'System Operator'"
    id="popup-modal1"
    tabindex="-1"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative p-4 w-[25%] max-h-full">
      <div class="relative bg-white rounded-lg shadow">
        <button
          type="button"
          class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
          data-modal-hide="popup-modal1"
        >
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>

        <div class="md:p-5 text-center">
          <img
            src="../assets/ProfilePics/propayl.jpg"
            class="rounded-full w-[30%] h-[30%] mx-auto mt-3"
          />
          <div class="w-[90%]">
            <div class="w-[100%] h-[80%] my-[5%] mx-[5%]">
              <div class="flex justify-start items-start my-5">
                <div class="flex flex-row">
                  <div class="flex flex-row"></div>

                  <div></div>
                </div>
              </div>
              <div>
                <div class="grid gap-5 md:grid-cols-2">
                  <div class="flex flex-col">
                    <div class="flex justify-start items-start">
                      <label
                        for="company"
                        class="block mb-2 text-sm font-medium"
                        >First Name</label
                      >
                    </div>
                    <div>
                      <input v-model="firstName"
                        type="text"
                        id="first_name"
                        class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                        placeholder="John"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <div class="flex justify-start items-start">
                      <label for="phone" class="block mb-2 text-sm font-medium"
                        >Last Name</label
                      >
                    </div>

                    <input
                    v-model="lastName"
                      type="text"
                      id="last_name"
                      class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                      placeholder="Doe"
                      required
                    />
                  </div>
                  <div>
                    <div class="flex justify-start items-start">
                      <label
                        for="phone_number"
                        class="block mb-2 text-sm font-medium"
                        >Contact No</label
                      >
                    </div>

                    <input
                    v-model="m_mobile_number"
                      type="tel"
                      id="phone"
                      class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                      placeholder="0977*******"
                      pattern=""
                      required
                    />
                  </div>

                </div>

                <div
                  class="flex items-start justify-start gap-6 flex-row row-span-2"
                >
                  <div
                    class="flex flex-col col-span-2 justify-start items-start w-full"
                  >
                    <label for="Password" class="block mb-2 text-sm font-medium"
                      >New Password</label
                    >
                    <div class="mb-6">
                      <input
                      v-model="p_password"
                        type="password"
                        id="password"
                        class="bg-gray-50 border justify-start items-start border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-[100%] p-2.5"
                        placeholder="•••••••••"
                        required
                      />
                    </div>
                  </div>

                  <input
                    class="text-center justify-center my-auto flex w-full text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="file_input_help"
                    id="file_input"
                    type="file"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="flex row-span gap-10 w-[65%] mx-auto">
            <Buttons
              @click="
                showUpdateModal();
                isUpdateClicked = true;
              "
              buttonName="Update"
            />
            <Buttons
              @click="
                showModal();
                isClicked = true;
              "
              buttonName="Deactivate"
            />
          </div>
        </div>
      </div>
    </div>
    <dialog
      v-if="isClicked == true"
      id="my_modal_3"
      class="modal"
      ref="myModal"
    >
      <div class="modal-box">
        <form method="dialog">
          <button
            class="btn btn-md btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        <div class="p-4 md:p-5 text-center">
          <svg
            class="mx-auto mb-4 text-gray-400 w-12 h-12"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to
            <span class="text-red-600 font-bold">deactivate</span> this account?
          </h3>
          <div class="flex flex-row items-center justify-center">
            <button
              type="button"
              class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
            >
              Yes, I'm sure
            </button>

            <form method="dialog">
              <button
                class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                No, Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </dialog>
    <!-- This is the Update Modal -->
    <dialog
      v-if="isUpdateClicked == true"
      id="my_modal_3"
      class="modal"
      ref="myUpdateModal"
    >
      <div class="modal-box">
        <form method="dialog">
          <button
            class="btn btn-md btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        <div class="p-4 md:p-5 text-center">
          <!-- Updated SVG Icon -->
          <svg
            class="mx-auto mb-4 text-primary w-16 h-16"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>

          <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Do you really want to
            <span class="text-primary font-bold">update</span> information this
            account?
          </h3>
          <div class="flex flex-row items-center justify-center">
            <button
              type="button"
              class="text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary-dark font-medium rounded-lg text-sm inline-flex items-center px-6 py-3"
            >
              Yes, I'm sure
            </button>
            <form method="dialog">
              <button
                class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                No, Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </dialog>
  </div>

    <div v-if="role == 'System Operator'"
    id="popup-modal1"
    tabindex="-1"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative p-4 w-[25%] max-h-full">
      <div class="relative bg-white rounded-lg shadow">
        <button
          type="button"
          class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
          data-modal-hide="popup-modal1"
        >
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>

        <div class="md:p-5 text-center">
          <img
            src="../assets/ProfilePics/propayl.jpg"
            class="rounded-full w-[30%] h-[30%] mx-auto mt-3"
          />
          <div class="w-[90%]">
            <div class="w-[100%] h-[80%] my-[5%] mx-[5%]">
              <div class="flex justify-start items-start my-5">
                <div class="flex flex-row">
                  <div class="flex flex-row"></div>

                  <div></div>
                </div>
              </div>
              <div>
                <div class="grid gap-5 md:grid-cols-2">
                  <div class="flex flex-col">
                    <div class="flex justify-start items-start">
                      <label
                        for="company"
                        class="block mb-2 text-sm font-medium"
                        >First Name</label
                      >
                    </div>
                    <div>
                      <input v-model="firstName"
                        type="text"
                        id="first_name"
                        class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                        placeholder="John"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <div class="flex justify-start items-start">
                      <label for="phone" class="block mb-2 text-sm font-medium"
                        >Last Name</label
                      >
                    </div>

                    <input
                    v-model="lastName"
                      type="text"
                      id="last_name"
                      class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                      placeholder="Doe"
                      required
                    />
                  </div>
                  <div>
                    <div class="flex justify-start items-start">
                      <label
                        for="phone_number"
                        class="block mb-2 text-sm font-medium"
                        >Contact No</label
                      >
                    </div>

                    <input
                    v-model="m_mobile_number"
                      type="tel"
                      id="phone"
                      class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                      placeholder="0977*******"
                      pattern=""
                      required
                    />
                  </div>

                </div>

                <div
                  class="flex items-start justify-start gap-6 flex-row row-span-2"
                >
                  <div
                    class="flex flex-col col-span-2 justify-start items-start w-full"
                  >
                    <label for="Password" class="block mb-2 text-sm font-medium"
                      >New Password</label
                    >
                    <div class="mb-6">
                      <input
                      v-model="p_password"
                        type="password"
                        id="password"
                        class="bg-gray-50 border justify-start items-start border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-[100%] p-2.5"
                        placeholder="•••••••••"
                        required
                      />
                    </div>
                  </div>

                  <input
                    class="text-center justify-center my-auto flex w-full text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="file_input_help"
                    id="file_input"
                    type="file"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="flex row-span gap-10 w-[65%] mx-auto">
            <Buttons
              @click="
                showUpdateModal();
                isUpdateClicked = true;
              "
              buttonName="Update"
            />
            <Buttons
              @click="
                showModal();
                isClicked = true;
              "
              buttonName="Deactivate"
            />
          </div>
        </div>
      </div>
    </div>
    <dialog
      v-if="isClicked == true"
      id="my_modal_3"
      class="modal"
      ref="myModal"
    >
      <div class="modal-box">
        <form method="dialog">
          <button
            class="btn btn-md btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        <div class="p-4 md:p-5 text-center">
          <svg
            class="mx-auto mb-4 text-gray-400 w-12 h-12"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to
            <span class="text-red-600 font-bold">deactivate</span> this account?
          </h3>
          <div class="flex flex-row items-center justify-center">
            <button
              type="button"
              class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
            >
              Yes, I'm sure
            </button>

            <form method="dialog">
              <button
                class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                No, Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </dialog>
    <!-- This is the Update Modal -->
    <dialog
      v-if="isUpdateClicked == true"
      id="my_modal_3"
      class="modal"
      ref="myUpdateModal"
    >
      <div class="modal-box">
        <form method="dialog">
          <button
            class="btn btn-md btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        <div class="p-4 md:p-5 text-center">
          <!-- Updated SVG Icon -->
          <svg
            class="mx-auto mb-4 text-primary w-16 h-16"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>

          <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Do you really want to
            <span class="text-primary font-bold">update</span> information this
            account?
          </h3>
          <div class="flex flex-row items-center justify-center">
            <button
              type="button"
              class="text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary-dark font-medium rounded-lg text-sm inline-flex items-center px-6 py-3"
            >
              Yes, I'm sure
            </button>
            <form method="dialog">
              <button
                class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                No, Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </dialog>
  </div>
  <!-- START RESPONDER -->
  <div v-else
    id="popup-modal1"
    tabindex="-1"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative p-4 w-[25%] max-h-full">
      <div class="relative bg-white rounded-lg shadow">
        <button
          type="button"
          class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
          data-modal-hide="popup-modal1"
        >
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>

        <div class="md:p-5 text-center">
          <img
            src="../assets/ProfilePics/propayl.jpg"
            class="rounded-full w-[30%] h-[30%] mx-auto mt-3"
          />
          <div class="w-[90%]">
            <div class="w-[100%] h-[80%] my-[5%] mx-[5%]">
              <div class="flex justify-start items-start my-5">
                <div class="flex flex-row">
                  <div class="flex flex-row"></div>

                  <div></div>
                </div>
              </div>
              <div>
                <div class="grid gap-5 md:grid-cols-2">
                  <div class="flex flex-col">
                    <div class="flex justify-start items-start">
                      <label
                        for="company"
                        class="block mb-2 text-sm font-medium"
                        >Institution</label
                      >
                    </div>
                    <div>
                      <input v-model="firstName"
                        type="text"
                        id="first_name"
                        class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                        placeholder="Institution"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <div class="flex justify-start items-start">
                      <label for="phone" class="block mb-2 text-sm font-medium"
                        >Last Name</label
                      >
                    </div>

                    <input
                    v-model="lastName"
                      type="text"
                      id="last_name"
                      class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                      placeholder="Doe"
                      required
                    />
                  </div>
                  <div>
                    <div class="flex justify-start items-start">
                      <label
                        for="phone_number"
                        class="block mb-2 text-sm font-medium"
                        >Contact No</label
                      >
                    </div>

                    <input
                    v-model="m_mobile_number"
                      type="tel"
                      id="phone"
                      class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                      placeholder="0977*******"
                      pattern=""
                      required
                    />
                  </div>

                </div>

                <div
                  class="flex items-start justify-start gap-6 flex-row row-span-2"
                >
                  <div
                    class="flex flex-col col-span-2 justify-start items-start w-full"
                  >
                    <label for="Password" class="block mb-2 text-sm font-medium"
                      >New Password</label
                    >
                    <div class="mb-6">
                      <input
                      v-model="p_password"
                        type="password"
                        id="password"
                        class="bg-gray-50 border justify-start items-start border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-[100%] p-2.5"
                        placeholder="•••••••••"
                        required
                      />
                    </div>
                  </div>

                  <input
                    class="text-center justify-center my-auto flex w-full text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="file_input_help"
                    id="file_input"
                    type="file"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="flex row-span gap-10 w-[65%] mx-auto">
            <Buttons
              @click="
                showUpdateModal();
                isUpdateClicked = true;
              "
              buttonName="Update"
            />
            <Buttons
              @click="
                showModal();
                isClicked = true;
              "
              buttonName="Deactivate"
            />
          </div>
        </div>
      </div>
    </div>
    <dialog
      v-if="isClicked == true"
      id="my_modal_3"
      class="modal"
      ref="myModal"
    >
      <div class="modal-box">
        <form method="dialog">
          <button
            class="btn btn-md btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        <div class="p-4 md:p-5 text-center">
          <svg
            class="mx-auto mb-4 text-gray-400 w-12 h-12"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to
            <span class="text-red-600 font-bold">deactivate</span> this account?
          </h3>
          <div class="flex flex-row items-center justify-center">
            <button
              type="button"
              class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
            >
              Yes, I'm sure
            </button>

            <form method="dialog">
              <button
                class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                No, Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </dialog>
    <!-- This is the Update Modal -->
    <dialog
      v-if="isUpdateClicked == true"
      id="my_modal_3"
      class="modal"
      ref="myUpdateModal"
    >
      <div class="modal-box">
        <form method="dialog">
          <button
            class="btn btn-md btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        <div class="p-4 md:p-5 text-center">
          <!-- Updated SVG Icon -->
          <svg
            class="mx-auto mb-4 text-primary w-16 h-16"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>

          <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Do you really want to
            <span class="text-primary font-bold">update</span> information this
            account?
          </h3>
          <div class="flex flex-row items-center justify-center">
            <button
              type="button"
              class="text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary-dark font-medium rounded-lg text-sm inline-flex items-center px-6 py-3"
            >
              Yes, I'm sure
            </button>
            <form method="dialog">
              <button
                class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                No, Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </dialog>
  </div>
</template>
<script setup>
import Buttons from "./Buttons.vue";
import { ref, onMounted, computed } from "vue";

const role = ref(`${localStorage.getItem('current_role')}`);

const firstName = ref(`${localStorage.getItem(`op_firstname`)}`);
const lastName = ref(`${localStorage.getItem(`op_lastname`)}`);
const m_mobile_number = ref(`${localStorage.getItem(`op_number`)}`);
































const isClicked = ref(false); //clicked
const isUpdateClicked = ref(false); //clicked
const userData = ref([]);

// Computed property to get the currently selected user data
const selectedUserData = computed(() => {
  return selectedUserIndex.value !== null
    ? userData.value[selectedUserIndex.value]
    : null;
});

import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});
const myModal = ref(null); //modal
const myUpdateModal = ref(null);
const showModal = () => {
  if (myModal.value) {
    myModal.value.showModal();
  }
};

const showUpdateModal = () => {
  if (myUpdateModal.value) {
    myUpdateModal.value.showModal();
  }
};

const logout = () => {
  localStorage.clear();
  router.push("/");
};

onMounted(() => {
  showModal(); // Optionally show the modal on component mount
});
onMounted(() => {
  showUpdateModal(); // Optionally show the modal on component mount
});
</script>
