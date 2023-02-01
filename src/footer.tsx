export default function Footer() {
  return (
    <div class="bg-gray-800 min-w-full (text-sm) (flex flex-col w-full max-w-screen-lg gap-8 px-8 py-8 mx-auto justify-center md:(flex-row justify-around))">
      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-2 select-none">
          <img src="/logo.svg" alt="Logo" class="w-7" />
          <div class="font-bold text-xl text-white">Kulleseid Kran</div>
        </div>
        <div class="text-gray-500 select-none">Transport</div>
        <div class="mt-1 text-gray-500">
          <p>Email: paal@kulleseidkran.no</p>
        </div>
        <div class="mt-1 text-gray-500">
          <p>Nedre Nattland 44, 5099 Bergen.</p>
        </div>
        <div class="mt-1 text-gray-500 select-none">
          <p>Copyright &copy; {new Date().getFullYear()} Kulleseid Kran</p>
          <p>Alle rettigheter forbeholdt.</p>
        </div>
      </div>
      <div class="mb-4 text-gray-500 select-none">
        <div class="font-bold text-black dark:text-white">Navigasjon</div>
        <ul class="mt-2">
          <NavigationLink text="Hjemmesiden" to="/" />
          <NavigationLink text="Kontakt Oss" to="/kontakt" />
          <NavigationLink text="Informasjon" to="/omoss" />
        </ul>
      </div>
      <div class="mb-4 text-gray-500 select-none">
        <div class="font-bold text-black dark:text-white">Følg Oss</div>
        <ul class="mt-2">
          <li>....</li>
        </ul>
      </div>
    </div>
  );
}
interface NavigationLinkOptions {
  to: string;
  text: string;
}

function NavigationLink({ to, text }: NavigationLinkOptions) {
  return (
    <li class="mt-2">
      <a href={to} class="hover:underline">
        {text}
      </a>
    </li>
  );
}
