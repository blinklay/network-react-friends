export default function Checkbox({ onClick, active }) {
  return (
    <div
      onClick={() => {
        onClick();
      }}
      className={`checkbox ${active ? "active" : ""}`}
    >
      <span></span>
    </div>
  );
}
