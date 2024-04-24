export default function Button({ btnName, customClass, eventClick }: any) {
  const strClass =
    customClass ||
    "w-fit h-fit bg-emerald-300 rounded-full px-6 py-1 hover:bg-emerald-500 hover:border-emerald-200 border-2 border-emerald-400";
  return (
    <button className={strClass} onClick={eventClick}>
      {btnName}
    </button>
  );
}
