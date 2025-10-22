export default function BusinessLandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gray-900 text-white">LP</span>
            <span>Your Business Name</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-gray-700">Services</a>
            <a href="#about" className="hover:text-gray-700">About</a>
            <a href="#work" className="hover:text-gray-700">Work</a>
            <a href="#reviews" className="hover:text-gray-700">Reviews</a>
            <a href="#contact" className="px-4 py-2 rounded-xl bg-gray-900 text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Fast, Professional <span className="text-gray-700">Service</span> in Chicagoland
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Short value prop goes here. Example: Dependable plumbing, electrical, and general handyman work—done right the first time.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="px-5 py-3 rounded-xl bg-gray-900 text-white">Get a Free Quote</a>
              <a href="tel:+17080000000" className="px-5 py-3 rounded-xl border border-gray-300">Call (708) 000‑0000</a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-500">
              <span>Licensed & Insured</span>
              <span>Same-Day Service</span>
              <span>5★ Local Reviews</span>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl bg-white shadow-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1581091870622-7e0cdfbb6795?q=80&w=1600&auto=format&fit=crop"
              alt="Your team at work"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Badges */}
      <section className="py-8 border-y bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl border bg-gray-50">Same‑Day Service</div>
          <div className="p-4 rounded-xl border bg-gray-50">Upfront Pricing</div>
          <div className="p-4 rounded-xl border bg-gray-50">Locally Owned</div>
          <div className="p-4 rounded-xl border bg-gray-50">Satisfaction Guaranteed</div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold">Services</h2>
            <p className="mt-2 text-gray-600">Edit these to match your trade(s).
            </p>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {title: 'Plumbing & Drain', desc: 'Faucets, leaks, water heaters, sump pumps, drain cleaning.'},
              {title: 'Electrical', desc: 'Outlets, panels, lighting, EV chargers, troubleshooting.'},
              {title: 'HVAC', desc: 'Furnace/AC tune‑ups, repairs, installs, thermostats.'},
              {title: 'Carpentry & Repairs', desc: 'Trim, doors, drywall patches, small remodels.'},
              {title: 'Exterior', desc: 'Roof patching, gutters, siding fixes, caulking.'},
              {title: 'IT / Device Help', desc: 'Computer clean‑ups, Wi‑Fi setups, backups.'},
            ].map((s) => (
              <div key={s.title} className="rounded-2xl border bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-gray-600">{s.desc}</p>
                <a href="#contact" className="mt-4 inline-block text-sm font-medium underline">Request a quote →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 bg-white border-y">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold">About Us</h2>
            <p className="mt-3 text-gray-600">
              Replace this with your story: years of experience, certifications, and what makes you different. Mention your core service areas (e.g., Tinley Park, Orland Park, Mokena, Frankfort, Oak Lawn).
            </p>
            <ul className="mt-4 space-y-2 text-gray-700 list-disc pl-5">
              <li>Fully licensed & insured</li>
              <li>Upfront quotes—no surprises</li>
              <li>Respect for your home and time</li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1581093588401-16b491c3ee73?q=80&w=1600&auto=format&fit=crop"
              alt="Team photo"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Work / Gallery */}
      <section id="work" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Recent Work</h2>
          <p className="mt-2 text-gray-600">Swap these images for your own jobs and captions.</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((i) => (
              <figure key={i} className="rounded-2xl overflow-hidden border bg-white shadow-sm">
                <img
                  src={`https://picsum.photos/seed/job${i}/800/600`}
                  alt={`Project ${i}`}
                  className="h-48 w-full object-cover"
                />
                <figcaption className="p-4 text-sm text-gray-600">Project {i}: short description of the repair/install.</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16 bg-white border-y">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Happy Customers</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {name: 'Alex R.', text: 'Showed up on time and fixed our leak the same day. Fair pricing and super professional.'},
              {name: 'Maya P.', text: 'Explained everything clearly and left the workspace spotless. Highly recommend!'},
              {name: 'Daniel K.', text: 'Great communication and quality work—will hire again.'},
            ].map((r) => (
              <blockquote key={r.name} className="rounded-2xl border bg-gray-50 p-6">
                <p className="text-gray-700">“{r.text}”</p>
                <footer className="mt-3 text-sm text-gray-500">— {r.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold">Get a Free Quote</h2>
            <p className="mt-2 text-gray-600">Fill out the form and we’ll get back to you. Prefer to call?
              <a href="tel:+17080000000" className="underline ml-1">(708) 000‑0000</a>.
            </p>
            <form action="https://formspree.io/f/your-id" method="POST" className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input name="name" required className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="Jane Doe" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">Phone</label>
                  <input name="phone" required className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="(708) 555‑1234" />
                </div>
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input type="email" name="email" className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="you@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium">Service Needed</label>
                <select name="service" className="mt-1 w-full rounded-xl border px-3 py-2">
                  <option>Plumbing</option>
                  <option>Electrical</option>
                  <option>HVAC</option>
                  <option>Carpentry</option>
                  <option>Exterior</option>
                  <option>IT / Device</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Details</label>
                <textarea name="details" rows={4} className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="Tell us about your project" />
              </div>
              <button className="px-5 py-3 rounded-xl bg-gray-900 text-white w-full sm:w-auto">Send Request</button>
            </form>
          </div>
          <div>
            <div className="rounded-2xl overflow-hidden border bg-white shadow-sm">
              <iframe
                title="Map"
                className="w-full h-80"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29682.638915661053!2d-87.813!3d41.573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e23f5b1b0f6e7%3A0x4a5f46e6e3f1e8d8!2sTinley%20Park%2C%20IL!5e0!3m2!1sen!2sus!4v1700000000000"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-6 rounded-2xl border p-6 bg-gray-50">
              <h3 className="font-semibold">Service Area</h3>
              <p className="mt-2 text-sm text-gray-600">Tinley Park • Orland Park • Mokena • Frankfort • Oak Lawn • Palos Heights • New Lenox • and nearby.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Your Business Name. All rights reserved.</p>
          <div className="text-sm text-gray-500">
            <a href="mailto:you@yourbusiness.com" className="underline">you@yourbusiness.com</a> • IL License #000000
          </div>
        </div>
      </footer>
    </div>
  );
}
