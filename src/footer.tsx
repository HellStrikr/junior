import { createSignal } from "solid-js";
import Modal from "./pages/components/Modal";

export default function Footer() {
  const [shouldShowModal, setShouldShowModal] = createSignal(false);
  return (
    <div class="min-w-full (text-sm) (flex flex-col w-full max-w-screen-lg gap-8 px-8 py-8 mx-auto justify-center md:(flex-row justify-around))">
      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-2 select-none">
          <div class="font-bold text-xl text-white">Oddemann</div>
        </div>
        <div class="text-gray-500 select-none">Odd</div>
        <div class="mt-1 text-gray-500">
          <p>Email: </p>
        </div>
        <div class="mt-1 text-gray-500 select-none">
          <p>Copyright &copy; {new Date().getFullYear()} Oddis</p>
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
          <a target="_blank" href="https://www.instagram.com/oddannfinn/">
            <li>Instagram</li>
          </a>
          <a target="_blank" href="https://www.facebook.com/oddannfinn.kleiven">
            <li>Facebook</li>
          </a>
          <li>
            <button
              onClick={() => {
                setShouldShowModal(true);
              }}
            >
              Snapchat
            </button>
            <Modal show={shouldShowModal()}>
              <div>
                <div class="grid justify-items-left">
                  <button
                    class="bg-gray-700 px-6 py-2 rounded-xl shadow-lg"
                    onClick={() => {
                      setShouldShowModal(false);
                    }}
                  >
                    Close
                  </button>
                </div>
                <div class="grid justify-items-center">
                  <img src="/images/IMG_5149-removebg-preview.png" alt="" />
                </div>
              </div>
            </Modal>
          </li>
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
