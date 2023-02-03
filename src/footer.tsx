export default function Footer() {
  return (
    <div class="min-w-full (text-sm) (flex flex-col w-full max-w-screen-lg gap-8 px-8 py-8 mx-auto justify-center md:(flex-row justify-around))">
      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-2 select-none">
          <div class="font-bold text-xl text-white">Russemaleriet</div>
        </div>
        <div class="text-gray-500 select-none">Russe logoer</div>
        <div class="mt-1 text-gray-500">
          <p>Email: rolf@russemaleriet.no</p>
        </div>
        <div class="mt-1 text-gray-500 select-none">
          <p>Copyright &copy; {new Date().getFullYear()} Russemaleriet</p>
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
          <li>Instagram</li>
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
