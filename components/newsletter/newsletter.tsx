export default function Newsletter() {
  return (
    <section id="newsletter" className="my-16 bg-blue-light py-12 relative">
      <div className="max-w-7xl mx-auto w-4/5 lg:w-full">
        <div className="text-lg md:text-2xl lg:text-4xl text-sea font-medium">
          WANT MORE CONTENT LIKE THIS?
        </div>
        <div className="md:text-2xl text-blue-dark font-light">
          Subscribe to our newsletter
        </div>

        <form className="mt-4 flex">
          <input
            type="text"
            className="bg-transparent border-blue-dark border text-white placeholder-blue-dark text-xs px-4 py-3 w-60"
            placeholder="E-MAIL"
          />

          <button className="uppercase text-white bg-gradient-to-r from-blue-dark via-blue-dark to-blue text-xs font-light px-8 py-3 ml-3">
            subscribe
          </button>
        </form>
      </div>
      {/* <!-- 3x blue stripe --> */}
      <div className="absolute right-0 top-0 h-full flex-col items-end justify-between hidden md:flex">
        <div className="h-1/5 bg-blue-light w-60"></div>
        <div className="h-1/5 bg-blue-light w-48"></div>
        <div className="h-1/5 bg-blue-light w-60"></div>
      </div>
    </section>
  );
}
