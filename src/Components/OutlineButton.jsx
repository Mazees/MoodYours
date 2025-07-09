export default function OutlineButton({ onClick, children, className = "" }) {
  return (
    <button
      className={
        "btn text-white hover:bg-brown-tertiary rounded-lg hover:text-brown-primary hover:border-none btn-outline poppins-regular " +
        className
      }
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}