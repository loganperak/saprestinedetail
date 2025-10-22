export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="p-4 bg-white shadow text-center">
        <h1 className="text-3xl font-bold">S&A Pristine Detailing</h1>
        <p className="text-gray-600">Mobile auto detailing across Chicagoland</p>
      </header>

      <main className="max-w-3xl mx-auto p-6 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold">Our Services</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Exterior wash & wax</li>
            <li>Interior deep clean & vacuum</li>
            <li>Headlight restoration</li>
            <li>Ceramic coating packages</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <form action="https://formspree.io/f/your-id" method="POST" className="space-y-3">
            <input name="name" placeholder="Name" className="w-full border p-2 rounded" />
            <input name="email" type="email" placeholder="Email" className="w-full border p-2 rounded" />
            <textarea name="message" placeholder="Message" className="w-full border p-2 rounded h-24"></textarea>
            <button className="bg-gray-900 text-white px-5 py-3 rounded">Send</button>
          </form>
        </section>
      </main>

      <footer className="p-4 text-center text-gray-500 border-t">
        © {new Date().getFullYear()} S&A Pristine Detailing
      </footer>
    </div>
  )
}