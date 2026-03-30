import { useState } from 'react';

export default function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl bg-primary-700/50 p-6 border border-primary-500/50 backdrop-blur">
      <h3 className="font-title text-sm font-semibold text-primary-100">
        Contador
      </h3>
      <div className="text-5xl font-bold text-primary-300">
        {count}
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setCount(count - 1)}
          className="rounded-lg bg-primary-600 px-4 py-2 font-text text-sm font-semibold text-neutral-50 transition hover:bg-primary-500"
        >
          −
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="rounded-lg bg-primary-500 px-4 py-2 font-text text-sm font-semibold text-neutral-50 transition hover:bg-primary-400"
        >
          +
        </button>
      </div>
    </div>
  );
}
