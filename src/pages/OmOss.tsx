export default function OmossPage() {
  return (
    <div class="bg-gray-400">
      <div class="mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
        <div class="grid grid-cols-1 grid-rows-2 lg:(grid-cols-2 grid-rows-1)">
          <div class="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6">
            <h1 class="font-bold text-3xl my-4">Kulleseid Kran</h1>
            <p class="leading-normal mb-4">
              Om bedrift <br /> Firmaet ble startet i 2012 med en lastebil. Har
              økt til 4 lastebiler i 2022 Hoved sigmentet er lastebiler med
              grabb og tipp. Vi utfører transport tjenester for anleggsbransjen,
              byggebransjen og private, transport av masser som jord, sand, pukk
              med grabb. Vi utfører transport av trelast, stål osv. Vi har å
              krok containere til utleie i forskjellige størrelser fra 10m3 til
              30m3. Vi løser alle transport behov.
            </p>
          </div>

          <img
            class="max-h-[600px] max-w-[300px] mx-auto lg:(justify-self-end mr-6 max-w-none)"
            src="images/received_668729274159083.jpeg"
            alt=""
          />
        </div>
      </div>
      <div>
        <h1 class="text-4xl font-bold text-center">Bilder</h1>
        <section class="overflow-hidden text-gray-700 ">
          <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
            <div class="flex flex-wrap -m-1 md:-m-2">
              <div class="flex flex-wrap w-1/2  md:w-1/3">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-lg"
                    src="/images/received_252353366874595.jpeg"
                  />
                </div>
              </div>
              <div class="flex flex-wrap w-1/2  md:w-1/3">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-lg"
                    src="/images/received_497102505271039.jpeg"
                  />
                </div>
              </div>
              <div class="flex flex-wrap w-1/2  md:w-1/3">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-lg"
                    src="/images/received_1180372682788427.jpeg"
                  />
                </div>
              </div>
              <div class="flex flex-wrap w-1/2  md:w-1/3">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-lg"
                    src="/images/received_1021787205101366.jpeg"
                  />
                </div>
              </div>
              <div class="flex flex-wrap w-1/2  md:w-1/3">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-lg"
                    src="/images/received_494313338984715.jpeg"
                  />
                </div>
              </div>
              <div class="flex flex-wrap w-1/2  md:w-1/3">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-lg"
                    src="/images/received_751257576260351.jpeg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
