export default function Footer() {
  return (
    <div class="(text-sm) (flex flex-col w-full max-w-screen-lg gap-8 px-8 py-8 mx-auto justify-center md:(flex-row justify-around))">
      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-2 select-none">
          <img src="/logo.svg" alt="Logo" class="w-7" />
          <div class="font-bold text-xl">Errors Party</div>
        </div>
        <div class="text-gray-500 select-none">
          Dataforening for barn og ungdom
        </div>
        <div class="mt-1 text-gray-500">
          <a
            href="https://w2.brreg.no/enhet/sok/detalj.jsp?orgnr=988053880"
            target="_blank"
            class="underline"
          >
            988 053 880
          </a>
        </div>
        <div class="mt-1 text-gray-500">
          <p>
            c/o Marius Solberg
            <br />
            Håstølen 1A, 5918 Frekhaug
          </p>
        </div>
        <div class="mt-1 text-gray-500 select-none">
          <p>Alver Kommune</p>
        </div>
        <div class="mt-1 text-gray-500 select-none">
          <p>Copyright &copy; {new Date().getFullYear()} Errors Party</p>
          <p>Alle rettigheter forbeholdt.</p>
        </div>
      </div>
    </div>
  );
}
