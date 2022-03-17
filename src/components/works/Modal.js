export default function Modal({ children, open, setOpen }) {
  return (
    <>
      <div
        className={`fixed z-[9999] sm:w-1/2 w-4/5 transition ease-in-out duration-300 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ${
          open ? "top-1/2 overflow-hidden" : "-top-1/2 "
        }`}
      >
        {children}
      </div>
      <div
        className={`${
          open ? " z-[99] opacity-75 bg-black" : "opacity-0 bg-black"
        } fixed inset-0 transition-all `}
        onClick={() => setOpen(!open)}
      ></div>
    </>
  );
}
