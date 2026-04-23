import { useState } from 'react';

export default function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl bg-bg-elevated/50 p-6 border border-border-organic/50 backdrop-blur">
      <h3 className="font-title text-sm font-semibold text-text-primary">
        Contador
      </h3>
      <div className="text-5xl font-bold text-accent-strong">
        {count}
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setCount(count - 1)}
          className="rounded-lg bg-accent px-4 py-2 font-text text-sm font-semibold text-neutral-50 transition hover:bg-accent"
        >
          −
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="rounded-lg bg-accent px-4 py-2 font-text text-sm font-semibold text-neutral-50 transition hover:bg-accent-strong"
        >
          +
        </button>
      </div>
    </div>
  );
}
