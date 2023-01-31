import { createSignal } from "solid-js";
import supabase from "../supabase";
export default function KontaktPage() {
  const [computing, setComputing] = createSignal(false);
  return (
    <div class="max-w-[400px] mx-auto py-10">
      <div class="bg-gray-700 py-8 px-6 rounded-2xl shadow-2xl">
        <form
          class="grid grid-cols-1 gap-6"
          onSubmit={(e) => {
            e.preventDefault();
            const data = Object.fromEntries(
              new FormData(e.target as any).entries()
            ) as any;
            setComputing(true);
            new Promise((resolve, reject) =>
              supabase
                .from("contact_messages")
                .insert(data)
                .then(
                  (data) => {
                    if (data.error) return reject(data.error);
                    resolve(data.data);
                  },
                  (error) => reject(error)
                )
            )
              .then(() => {
                location.href = "/motatt";
              })
              .catch(console.error)
              .finally(() => {
                setComputing(false);
              });
          }}
        >
          <label class="block">
            <span class="text-white">Navn</span>
            <input
              type="text"
              name="name"
              placeholder="Navn Navnesen"
              class="mt-1 w-full px-2 py-1 border(1 solid black) focus:(border-blue-500 outline-none) read-only:(bg-gray-200)"
              readOnly={computing()}
            />
          </label>
          <label class="block">
            <span class="text-white">Email</span>
            <input
              type="email"
              name="email"
              placeholder="navn@navnesen.no"
              class="mt-1 w-full px-2 py-1 border(1 solid black) focus:(border-blue-500 outline-none) read-only:(bg-gray-200)"
              readOnly={computing()}
            />
          </label>
          <label class="block">
            <span class="text-white">Melding</span>
            <textarea
              name="message"
              placeholder="..."
              class="mt-1 w-full px-2 py-1 border(1 solid black) focus:(border-blue-500 outline-none) read-only:(bg-gray-200)"
              rows={6}
              readOnly={computing()}
            />
          </label>
          <button
            class="bg-gray-800 text-white py-2 rounded disabled:(cursor-not-allowed bg-gray-600)"
            type="submit"
            disabled={computing()}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
