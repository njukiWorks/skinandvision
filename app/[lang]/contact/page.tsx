import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactForm from "@/components/forms/ContactForm";

const BOOKING_URL =
  "https://schedule.clinicminds.com/?clinic=636e9065-78db-11f0-953e-0667c42d6c5b&hide-logo";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (lang !== "en") return {};
  return buildMetadata({
    title: "Contact | Skin & Vision Clinic Amsterdam",
    description:
      "Contact Skin & Vision Clinic in Amsterdam. Pietersbergweg 291, 1105 BM Amsterdam. Call +31 6 4609 6641 or book an appointment directly.",
    path: "/en/contact",
  });
}

export default async function ContactPageEn({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (lang !== "en") return null;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#f2ede6] h-[474px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-us-image.jpg"
            alt="Contact Skin & Vision Clinic Amsterdam"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2a2420]/80 via-[#2a2420]/50 to-[#2a2420]/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <SectionLabel className="mb-4 text-[#ff8835]">Get in touch</SectionLabel>
          <h1
            className="text-white font-display font-light mb-4"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            Contact
          </h1>
          <p className="text-white/70 max-w-md text-sm leading-relaxed">
            Have a question or want to make an appointment? We are here for you.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-[#faf8f5] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <ScrollReveal>
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_4px_40px_rgba(0,0,0,0.07)]">
              <SectionLabel className="mb-6">Send a message</SectionLabel>
              <ContactForm lang="en" />
            </div>
          </ScrollReveal>

          {/* Info */}
          <ScrollReveal delay={0.1} className="flex flex-col gap-8">
            <div>
              <SectionLabel className="mb-8">Clinic information</SectionLabel>
              <ul className="space-y-6">
                <li>
                  <p className="text-[#ff8835] text-xs uppercase tracking-widest font-semibold mb-1">Address</p>
                  <p className="text-[#2a2420] text-sm">Pietersbergweg 291<br />1105 BM Amsterdam</p>
                </li>
                <li>
                  <p className="text-[#ff8835] text-xs uppercase tracking-widest font-semibold mb-1">Phone</p>
                  <a href="tel:+31646096641" className="text-[#2a2420] text-sm hover:text-[#ff8835] transition-colors">
                    +31 6 4609 6641
                  </a>
                </li>
                <li>
                  <p className="text-[#ff8835] text-xs uppercase tracking-widest font-semibold mb-1">Email</p>
                  <a href="mailto:info@skinandvision.nl" className="text-[#2a2420] text-sm hover:text-[#ff8835] transition-colors">
                    info@skinandvision.nl
                  </a>
                </li>
                <li>
                  <p className="text-[#ff8835] text-xs uppercase tracking-widest font-semibold mb-1">Opening hours</p>
                  <p className="text-[#2a2420] text-sm">Monday – Friday: 09:00 – 17:00</p>
                </li>
              </ul>
            </div>

            {/* Booking CTA */}
            <div className="bg-[#fff0e6] rounded-2xl p-8">
              <h3
                className="text-[#2a2420] font-display text-xl mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Want to book an appointment directly?
              </h3>
              <p className="text-[#b0a090] text-sm leading-relaxed mb-6">
                Use our online booking system to schedule a consultation at a time that suits you.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#ff8835] text-white font-sans font-medium rounded-full px-8 py-3.5 text-sm hover:bg-[#ffaa6b] hover:-translate-y-0.5 transition-all duration-300"
              >
                Book Appointment
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Map */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-16">
          <div className="rounded-2xl overflow-hidden h-72 lg:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.98840265662!2d4.950618675867079!3d52.29806495263829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c60b31c63ed17f%3A0x30398205164c0961!2sPietersbergweg%20291%2C%201105%20BM%20Amsterdam%2C%20Netherlands!5e0!3m2!1sen!2ske!4v1755016190205!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Skin & Vision Clinic location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
