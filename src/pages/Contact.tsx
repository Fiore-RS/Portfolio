export default function Contact() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold">
        Contact <span className="text-accent-500">Me.</span>
      </h1>
      <p className="mt-4 text-body">
        Add a short intro line, then an email link and/or a simple contact form here.
      </p>
      <a
        href="mailto:you@example.com"
        className="mt-6 inline-block rounded-full bg-accent-400 px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-600"
      >
        Email Me →
      </a>
    </section>
  )
}
