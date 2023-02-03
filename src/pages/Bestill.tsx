export default function Bestill() {
  return (
    <>
      <div
        class="min-h-screen"
        style={
          "background: radial-gradient( circle, rgba(49, 40, 51, 1) 0%, rgba(39, 31, 40, 1) 31%, rgba(28, 22, 29, 1) 61%, rgba(21, 18, 22, 1) 100% );"
        }
      >
        <section class="">
          <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-1">
              <div class="rounded-lg p-8 bg-gray-800 shadow-lg lg:col-span-3 lg:p-12">
                <form
                  class="space-y-4"
                  target="_blank"
                  action="https://formsubmit.co/admin@russemaleriet.no"
                  method="post"
                  data-form-type="contact"
                >
                  <input
                    type="hidden"
                    name="_cc"
                    value="rolf@russemaleriet.no"
                  />
                  <input type="text" name="_honey" style="display:none" />
                  <input
                    type="hidden"
                    name="_autoresponse"
                    value="Vi har motatt din bestilling"
                  />
                  <input type="hidden" name="_template" value="box" />
                  <input
                    type="hidden"
                    name="_next"
                    value="https://russemaleriet-test.netlify.app/bestilling/"
                  />
                  <div>
                    <label class="sr-only" for="name">
                      Fullt Navn
                    </label>
                    <input
                      style={"background-color:rgb(77, 75, 75);"}
                      class="w-full rounded-lg border-white border-1 p-3 text-sm"
                      placeholder="Fullt Navn"
                      type="text"
                      id="name"
                      data-form-type="name"
                    />
                  </div>

                  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label class="sr-only" for="email">
                        Email
                      </label>
                      <input
                        style={"background-color:rgb(77, 75, 75);"}
                        class="w-full rounded-lg border-white border-1 p-3 text-sm"
                        placeholder="Email"
                        type="email"
                        id="email"
                        data-form-type="email"
                      />
                    </div>

                    <div>
                      <label class="sr-only" for="phone">
                        Telefon Nummer
                      </label>
                      <input
                        style={"background-color:rgb(77, 75, 75);"}
                        class="w-full rounded-lg border-white border-1 p-3 text-sm"
                        placeholder="Telefon Nummer"
                        type="tel"
                        id="phone"
                        data-form-type="telefon"
                      />
                    </div>
                  </div>
                  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label class="sr-only" for="adresse">
                        Adresse
                      </label>
                      <input
                        style={"background-color:rgb(77, 75, 75);"}
                        class="w-full rounded-lg border-white border-1 p-3 text-sm"
                        placeholder="Adresse"
                        type="text"
                        id="adresse"
                        data-form-type="adresse"
                      />
                    </div>

                    <div>
                      <label class="sr-only" for="post">
                        Postnummer
                      </label>
                      <input
                        style={"background-color:rgb(77, 75, 75);"}
                        class="w-full rounded-lg border-white border-1 p-3 text-sm"
                        placeholder="Postnummer"
                        type="text"
                        id="post"
                        data-form-type="postnummer"
                      />
                    </div>
                  </div>

                  <div>
                    <label class="sr-only" for="message">
                      Message
                    </label>
                    <textarea
                      style={"background-color:rgb(77, 75, 75);"}
                      class="w-full rounded-lg border-white border-1 p-3 text-sm"
                      placeholder="Message"
                      rows="8"
                      id="message"
                      data-form-type="logo"
                    ></textarea>
                  </div>

                  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <select
                      id="logo pakke"
                      required
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Velg en logo pakke</option>
                      <option value="Standard">Standard (999kr)</option>
                      <option value="Premium">Premium (1699kr)</option>
                      <option value="Premium+">Premium +(2599kr)</option>
                    </select>
                    <button
                      type="submit"
                      class="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
                    >
                      <span class="font-medium"> Bestill </span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="ml-3 h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-checkbox"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Jeg har lest og akseptert betingelser
                  </label>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
