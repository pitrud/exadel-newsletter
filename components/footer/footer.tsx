export default function Footer() {
  return (
    <footer className="mt-16 bg-sea py-6">
      <div className="max-w-5xl mx-4 lg:mx-auto flex justify-between">
        <img src="/exadel.svg" className="w-20 md:w-32" />
        <div className="flex flex-col md:flex-row w-2/3 justify-around items-end">
          <a
            href="#"
            className="text-xs md:text-sm uppercase text-white font-light"
          >
            Feedback
          </a>
          <a
            href="#"
            className="text-xs md:text-sm uppercase text-white font-light"
          >
            privacy policy
          </a>
        </div>
      </div>
    </footer>
  );
}
