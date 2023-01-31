export default function HomePage() {
  return (
    <>
      <div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
        <div class="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6">
          <h1 class="font-bold text-3xl my-4">Grabbebil</h1>
        </div>
        <img
          class="max-h-[200px] rounded md:max-h-[600px]"
          src="/images/718e3f_9effd9edf1d048a78196d9c32d0b2a37_mv2.jpg"
          alt=""
        />
      </div>

      <div class="bg-gray-300 h-screen ">
        <img
          class="max-h-[300px] mx-auto rounded ml-auto md:max-h-[500px]"
          src="/images/received_470127800963788.jpeg"
          alt=""
        />
        <div class="container mx-auto pt-24 md:pt-16 px-6"></div>
      </div>
    </>
  );
}
