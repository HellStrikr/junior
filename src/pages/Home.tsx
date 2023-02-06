export default function HomePage() {
  return (
    <>
      <div
        class="min-h-screen"
        style={
          "background: radial-gradient( circle, rgba(49, 40, 51, 1) 0%, rgba(39, 31, 40, 1) 31%, rgba(28, 22, 29, 1) 61%, rgba(21, 18, 22, 1) 100% );"
        }
      >
        <h1 class="md:text-5xl font-bold text-center text-white pt-32">
          Odd var her
        </h1>
        <p class="text-center text-white pt-5 pb-10 text-2xl"></p>
        <p class="text-center text-white box-border w-[350px] mx-auto  md:(h-[150px] w-[800px] p-4 mx-auto text-2xl)"></p>
      </div>
    </>
  );
}
