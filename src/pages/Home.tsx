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
        <p class="text-center text-white pt-5 pb-10 text-2xl">
          De feteste logodesignsene med 100% garanti!
        </p>
        <p class="text-center text-white box-border w-[350px] mx-auto  md:(h-[150px] w-[800px] p-4 mx-auto text-2xl)">
          En russelogo er estetisk sett kjernen i gruppen. Det er denne folk
          møter når de først hører om dere. Det er derfor viktig at denne er
          unik og av ypperste kvalitet. Vi i Russemaleriet ønsker å tilby et
          rimligere alternativ til andre logodesignere på markedet slik at dere
          har mest mulig å bruke i russetiden! Interressert?
        </p>
      </div>
    </>
  );
}
