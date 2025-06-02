export default function Chat() {
  return (
    <div className="flex flex-col min-w-full mb-10">
      {/* message list */}
      <div className="flex-grow w-full mb-4 p-4 bg-(--sub-bg)">
        <p className="text-slate-500">🚧 Chat UI coming next…</p>
      </div>

      {/* input */}
      <input
        disabled
        placeholder="Type here once chat is wired…"
        className="w-full border rounded-md px-3 py-2 bg-slate-100"
      />
    </div>
  );
}
