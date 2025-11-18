export default function Input({ className, ...props }) {
  return (
    <input
      {...props}
      className={
        "w-full px-4 py-3 rounded-xl border border-gray-300 bg-white " +
        "text-sm text-dark placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition " +
        className
      }
    />
  );
}
