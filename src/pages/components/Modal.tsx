import { Show } from "solid-js";

export default function Modal(props: { children: any; show?: boolean }) {
  return (
    <Show when={props.show}>
      <div class="fixed top-0 left-0 w-screen h-screen z-50 bg-black bg-opacity-20 flex justify-center items-center">
        <div class="w-full max-w-screen-md p-4 bg-gray-800 rounded-2xl text-white shadow-lg">
          {props.children}
        </div>
      </div>
    </Show>
  );
}
