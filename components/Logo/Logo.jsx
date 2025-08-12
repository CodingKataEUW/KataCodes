export default function Enso({ size = 50, strokeWidth = 36, className = "", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <path
        d="
          M 260 145
          C 256 96, 220 60, 170 52
          C 120 45, 75 72, 63 120
          C 50 170, 78 220, 126 238
          C 174 256, 230 247, 256 205
          C 278 170, 272 160, 260 145
        "
        fill="none"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
