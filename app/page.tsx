"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

/** Simple fade-in-on-scroll wrapper */
function FadeInSection({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      {/* HERO */}
      <section
        className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-linear-to-b from-[#b89b6d] to-[#f8f5f0]"
        id="home"
      >
        {/* Background image (optional) */}
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-60 mix-blend-multiply"
          style={{
            backgroundImage:
              "url('/images/bg.jpg')", // put image in public/images
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl px-4 text-center text-white">
          {/* Logo placeholder box */}
          <div className="mx-auto mb-6 flex items-center justify-center">
            <img
              src="images/Logo1.png" // change path if needed
              alt="School Logo"
              className="h-28 w-28 object-contain rounded-2xl shadow-lg bg-amber-50 p-2 ring-2 ring-amber-200"
            />
          </div>


          <FadeInSection>
            {/* Sinhala heading */}
            <h2 className="font-sinhala text-xl md:text-2xl tracking-wide mb-1">
              ශ්‍රී බෝධිරාජාරාම ධම්ම පාසල - පිළවල
            </h2>
            {/* English heading */}
            <h1 className="mt-1 text-3xl md:text-5xl font-bold tracking-wide">
              Sri Bodhirajaraama Dhamma School - Pilawala
            </h1>
          </FadeInSection>

          <FadeInSection delay={150}>
            <p className="mt-4 text-sm md:text-base max-w-2xl mx-auto">
              A peaceful place for children and adults to learn and practice the Buddha
              Dhamma, guided by the Galgodahinna Sri Bodhirajaraama Viharaya, Pilawala
              South.
            </p>
          </FadeInSection>

          <FadeInSection delay={250}>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="/classes"
                className="rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-amber-400 transition"
              >
                View Classes &amp; Timetable
              </a>
              <a
                href="/registration"
                className="rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-amber-400 transition"
              >
                Online Registration
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        {/* About / Classes / Events cards */}
        <section className="-mt-12 pb-6">
          <FadeInSection>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-white shadow-sm border border-amber-50 px-5 py-4">
                <a href="/about" >
                <h3 className="text-amber-700 font-semibold mb-1">About</h3>
                <p className="text-sm text-slate-600">
                  Sri Bodhirajaraama Dhamma School serves the children of Pilawala and
                  surrounding areas, providing Dhamma education and cultural values.
                </p>
                </a>
              </div>
              <div className="rounded-2xl bg-white shadow-sm border border-amber-50 px-5 py-4">
                <a href="/classes" >
                <h3 className="text-amber-700 font-semibold mb-1">Classes</h3>
                <p className="text-sm text-slate-600">
                  Classes for primary, junior, and senior students are held every{" "}
                  <strong>Sunday morning</strong> with lessons, chanting, and activities.
                </p>
                </a>
              </div>
              <div className="rounded-2xl bg-white shadow-sm border border-amber-50 px-5 py-4">
                <a href="/events" >
                <h3 className="text-amber-700 font-semibold mb-1">Events</h3>
                <p className="text-sm text-slate-600">
                  Annual Sil programmes, Vesak and Poson celebrations, Dhamma competitions
                  and community service programmes.
                </p>
                </a>
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* About section */}
        <section id="about" className="py-12 md:py-16">
          <FadeInSection>
            <div className="grid gap-8 md:grid-cols-2 items-start">
              <div>
                <h2 className="section-title">About Our Dhamma School</h2>
                <p className="mt-3 text-sm md:text-base text-slate-700">
                  The Sri Bodhirajaraama Dhamma School was established to nurture
                  children with Buddhist values, discipline and compassion. Under the
                  guidance of the resident monks and dedicated teachers, students are
                  encouraged to develop faith, knowledge and practice of...<a href="/about" className="font-bold text-black">
                    Read more
                  </a>
                </p>
              </div>
              <div className="rounded-2xl bg-white shadow-sm border border-amber-50 px-5 py-4">
                <h3 className="font-semibold text-amber-800 mb-3">
                  Key Highlights (සාරාංශය)
                </h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• Weekly Dhamma classes for multiple age groups</li>
                  <li>• Guidance from experienced teachers and monks</li>
                  <li>• Special Sil programmes and meditation sessions</li>
                  <li>• Dhamma competitions, essays, and speeches</li>
                  <li>• Encouraging discipline, kindness, and respect</li>
                </ul>
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* History section */}
        <section id="history" className="py-12 md:py-16 border-t border-amber-100">
          <FadeInSection>
            <h2 className="section-title">History of the Dhamma School</h2>
            <p className="mt-3 text-sm md:text-base text-slate-700 max-w-3xl">
              You can describe how the Dhamma school started at Galgodahinna Sri
              Bodhirajaraama Viharaya, important milestones, and the support received
              from the village community. This section can later be expanded with real
              historical...<a href="/history" className="font-bold text-black">
                Read more
                  </a>
            </p>
          </FadeInSection>
        </section>

        {/* Teaching section */}
        <section id="teaching" className="py-12 md:py-16 border-t border-amber-100">
          <FadeInSection>
            <div className="grid gap-8 md:grid-cols-2 items-start">
              <div>
                <h2 className="section-title">Teaching &amp; Curriculum</h2>
                <p className="mt-3 text-sm md:text-base text-slate-700">
                  The teaching programme combines Dhamma knowledge, chanting, and
                  practical application in daily life. Lessons are aligned with the Sri
                  Lankan Dhamma school syllabus.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li>• Buddhist history and life of the Buddha</li>
                  <li>• Suttas, gathas, and basic Pali chanting</li>
                  <li>• Five precepts and moral conduct</li>
                  <li>• Meditation and mindfulness practices</li>
                  <li>• Buddhist festivals and cultural traditions</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white shadow-sm border border-amber-50 px-5 py-4">
                <h3 className="font-semibold text-amber-800 mb-2 font-sinhala">
                  ඉගැන්වීම් අරමුණු
                </h3>
                <p className="text-sm text-slate-700 font-sinhala">
                  දරුවන්ට සීල, සමාධි, ප්‍රඥා වර්ධනය කිරීමට උපකාරීව ධම්මපදමය ජීවන රිතියක්
                  දැනගැනීමට මෙම ධම්ම පාසල උත්සාහ ගනියි. දරුවන් උදාර සිත් ඇති, සමාජයට
                  ප්‍රයෝජනවත් පුද්ගලයන් බවට මානසිකව සූදානම් කිරීම ප්‍රධාන අරමුණයි.
                </p>
              </div>
            </div>
          </FadeInSection>
        </section>

       

        {/* Events section */}
        <section id="events" className="py-12 md:py-16 border-t border-amber-100">
          <FadeInSection>
            <h2 className="section-title">Events &amp; Special Programmes</h2>
            <p className="mt-3 text-sm md:text-base text-slate-700 max-w-3xl">
              Throughout the year, the Dhamma school organizes special programmes for
              students and the community.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3 text-sm">
              <div className="rounded-2xl bg-white shadow-sm border border-amber-50 px-4 py-4">
                <h3 className="font-semibold text-amber-800 mb-1">Sil Programmes</h3>
                <p className="text-slate-700">
                  Full-day Sil programmes on Poya days to practice Sila and meditation.
                </p>
              </div>
              <div className="rounded-2xl bg-white shadow-sm border border-amber-50 px-4 py-4">
                <h3 className="font-semibold text-amber-800 mb-1">Vesak &amp; Poson</h3>
                <p className="text-slate-700">
                  Vesak lanterns, decorations, Dhamma sermons and Dansal with student
                  involvement.
                </p>
              </div>
              <div className="rounded-2xl bg-white shadow-sm border border-amber-50 px-4 py-4">
                <h3 className="font-semibold text-amber-800 mb-1">Competitions</h3>
                <p className="text-slate-700">
                  Dhamma quiz, essay writing, preaching and art competitions for
                  students.
                </p>
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* Gallery placeholder */}
        <section id="gallery" className="py-12 md:py-16 border-t border-amber-100">
          <FadeInSection>
            <h2 className="section-title">Gallery</h2>
            <p className="mt-3 text-sm md:text-base text-slate-700">
              In Progress
            </p>
          </FadeInSection>
        </section>
      </div>
    </div>
  );
}
