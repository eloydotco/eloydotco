export function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 400 400"
      className="e-logo"
    >
      <rect
        rx="0"
        ry="0"
        width="400"
        height="400"
        fill="none"
      />
      <g>
        <path
          d="M50 100h200"
          style="
            stroke-width: 50;
            stroke: var(--text-color-1);
            stroke-linecap: round;
          "
        />
      </g>
      <g>
        <path
          d="M100 200h100"
          style="
            stroke-width: 50;
            stroke: var(--text-color-1);
            stroke-linecap: round;
          "
          class="stroke-shape"
        />
      </g>
      <g>
        <path
          d="M350 300h4"
          style="
            stroke-width: 50;
            stroke: var(--text-color-1);
            stroke-linecap: round;
          "
          class="stroke-shape"
        />
      </g>
      <g>
        <path
          d="M50 300h200"
          style="
            stroke-width: 50;
            stroke: var(--text-color-1);
            stroke-linecap: round;
          "
        />
      </g>
    </svg>
  );
}
