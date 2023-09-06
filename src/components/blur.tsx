export function Blur() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-50  grid grid-cols-2 -space-x-52 opacity-50"
    >
      <div className="h-20  bg-gradient-to-br from-violet-500 to-purple-400 blur-[100px]"></div>
      <div className="h-24 bg-gradient-to-r from-fuchsia-400 to-purple-300 blur-[106px]"></div>
    </div>
  );
}
