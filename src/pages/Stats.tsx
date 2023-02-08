export default function StatsPage() {
  return (
    <>
      <div
        class="min-h-screen"
        style={
          "background: radial-gradient( circle, rgba(49, 40, 51, 1) 0%, rgba(39, 31, 40, 1) 31%, rgba(28, 22, 29, 1) 61%, rgba(21, 18, 22, 1) 100% );"
        }
      >
        <iframe
          class="h-screen hidden md:block md:w-[1920px] 2xl:w-[2500px]"
          src="https://rocketleague.tracker.network/rocket-league/profile/steam/76561198271637567/overview"
          frameborder="0"
        ></iframe>
        <div class="pt-20 md:hidden">
          <h1 class="text-white text-2xl text-center">
            Lmao mobil for liten bruk knapp
          </h1>
          <div class="grid justify-items-center pt-10">
            <a
              target="_blank"
              href="https://rocketleague.tracker.network/rocket-league/profile/steam/76561198271637567/overview"
            >
              <button class="text-white py-2 px-10 bg-gray-800 rounded">
                Stats
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
