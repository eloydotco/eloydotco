import type { Signal } from "@preact/signals";
import { Link } from "../components/Link.tsx";

interface CounterProps {
  count: Signal<number>;
}

export default function Counter(props: CounterProps) {
  return (
    <div class="flex gap-8 py-6">
      <Link onClick={() => props.count.value -= 1}>-1</Link>
      <p class="text-3xl tabular-nums">{props.count}</p>
      <Link onClick={() => props.count.value += 1}>+1</Link>
    </div>
  );
}
