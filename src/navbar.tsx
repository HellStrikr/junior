import { tw } from "twind";

export default function Navbar() {
  return (
    <nav class="p-2 mt-0 w-full">
      <div class="container mx-auto flex flex-wrap items-center">
        <div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
          <a
            class="text-white no-underline hover:text-white hover:no-underline"
            href="/"
          >
            <span class=" pl-2">
              <i class=""></i>
              <img class="max-h-[40px]" src="" alt="" />
            </span>
          </a>
        </div>
        <div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
          <ul class=" flex justify-between flex-1 md:flex-none items-center">
            <NavLink url="/">Hjem</NavLink>
            <NavLink url="/clips">Clips</NavLink>
            <NavLink url="/stats">Stats</NavLink>
            <NavLink url="/odd">Odd</NavLink>
          </ul>

          <img
            class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            src="/images/wp9224379.png"
            alt="Bordered avatar"
          />
        </div>
      </div>
    </nav>
  );
}
function NavLink(props: { url: string; children?: any }) {
  return (
    <li class="mr-3">
      <a
        class={tw`inline-block py-2 px-4 no-underline ${
          props.url === location.pathname
            ? "text-white"
            : "text-gray-600 hover:(text-gray-200)"
        }`}
        href={props.url}
      >
        {props.children}
      </a>
    </li>
  );
}
