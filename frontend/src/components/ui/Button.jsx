export default function Button({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={
        "bg-primary text-white rounded-xl px-4 py-2 hover:bg-primaryLight transition font-medium " +
        className
      }
    >
      {children}
    </button>
  );
}
