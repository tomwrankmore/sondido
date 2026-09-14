function Contact() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-7xl bg-white px-6 py-16 dark:bg-black sm:px-10 lg:px-16">
        <h2 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-5xl font-de-fonte-plus mb-4">
          Contact us
        </h2>
        <p>Have a question? Send us a message.</p>
        <ul>
          <li>
            <a href="mailto:james@sonido.media" className=" hover:underline">
              james@sonido.media
            </a>
          </li>
          <li>
            <a href="mailto:laura@sonido.media" className=" hover:underline">
              laura@sonido.media
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default Contact;
