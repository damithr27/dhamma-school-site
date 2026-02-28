"use client";

import { FormEvent, ReactNode, useEffect, useRef, useState } from "react";

/* Simple fade-in animation on scroll */
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

export default function RegistrationPage() {
  const [studentStatus, setStudentStatus] = useState<string | null>(null);
  const [prefectStatus, setPrefectStatus] = useState<string | null>(null);

  // submit handler for both forms (type = "student" | "prefect")
  async function handleSubmit(
    e: FormEvent<HTMLFormElement>,
    type: "student" | "prefect"
  ) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, ...data }),
      });

      if (!res.ok) throw new Error("Request failed");

      if (type === "student") {
        setStudentStatus("Successfully submitted. (Demo only)");
      } else {
        setPrefectStatus("Successfully submitted. (Demo only)");
      }
      form.reset();
    } catch (err) {
      if (type === "student") {
        setStudentStatus("Error sending form. Please try again.");
      } else {
        setPrefectStatus("Error sending form. Please try again.");
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#f8f5f0] pb-16">
      {/* Top header / hero for registration */}
      <section className="bg-linear-to-b from-[#b89b6d] to-[#f8f5f0] py-10 md:py-14">
        <div className="max-w-5xl mx-auto px-4 text-center text-white">
          <FadeInSection>
            <h2 className="font-sinhala text-xl md:text-2xl mb-1">
              ශ්‍රී බෝධිරාජාරාම ධම්ම පාසල - පිළවල
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold">
              Online Registration
            </h1>
            <p className="mt-3 text-sm md:text-base max-w-2xl mx-auto">
              Please select the relevant form below and fill in the details
              accurately. This information will be used only for Dhamma school
              administration purposes.
            </p>
          </FadeInSection>

          {/* Two sector cards */}
          <FadeInSection delay={150}>
            <div className="mt-6 grid gap-4 md:grid-cols-2 text-sm">
              <a
                href="#new-student"
                className="rounded-2xl bg-white/90 text-[#5A3A1E] shadow-sm border border-amber-100 px-5 py-4 text-left hover:shadow-md hover:border-amber-300 transition"
              >
                <h3 className="font-semibold text-amber-800 mb-1">
                  New Student Registration
                </h3>
                <p>
                  Use this form to register a child as a new student of Sri
                  Bodhirajaraama Dhamma School - Pilawala.
                </p>
              </a>
              <a
                href="https://forms.gle/V3ro1AXgC76crPz16"
                className="rounded-2xl bg-white/90 text-[#5A3A1E] shadow-sm border border-amber-100 px-5 py-4 text-left hover:shadow-md hover:border-amber-300 transition"
              >
                <h3 className="font-semibold text-amber-800 mb-1">
                  Prefect Application
                </h3>
                <p>
                  For existing students who wish to apply for Dhamma school
                  prefectship or leadership responsibilities.
                </p>
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* MAIN FORMS */}
      <div className="max-w-5xl mx-auto px-4 mt-8 space-y-12">
        {/* New Student Registration */}
        <section id="new-student">
          <FadeInSection>
            <h2 className="section-title">New Student Registration</h2>
            <p className="mt-3 text-sm md:text-base text-slate-700">
              Please fill in the details of the student and parent/guardian.
            </p>

            <form
              className="mt-5 grid gap-4 rounded-2xl bg-white shadow-sm border border-amber-50 px-5 py-5 text-sm"
              onSubmit={(e) => handleSubmit(e, "student")}
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-slate-700 mb-1">
                    Student&apos;s Full Name
                  </label>
                  <input
                    name="studentName"
                    type="text"
                    required
                    className="w-full rounded-md border border-amber-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 mb-1">Date of Birth</label>
                  <input
                    name="dob"
                    type="date"
                    required
                    className="w-full rounded-md border border-amber-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-slate-700 mb-1">Age</label>
                  <input
                    name="age"
                    type="number"
                    min={4}
                    max={18}
                    required
                    className="w-full rounded-md border border-amber-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 mb-1">
                    School (Day School)
                  </label>
                  <input
                    name="school"
                    type="text"
                    className="w-full rounded-md border border-amber-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-slate-700 mb-1">
                    Parent / Guardian Name
                  </label>
                  <input
                    name="parentName"
                    type="text"
                    required
                    className="w-full rounded-md border border-amber-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 mb-1">
                    Contact Number
                  </label>
                  <input
                    name="contact"
                    type="text"
                    required
                    placeholder="07X XXX XXXX"
                    className="w-full rounded-md border border-amber-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 mb-1">Home Address</label>
                <input
                  name="address"
                  type="text"
                  required
                  className="w-full rounded-md border border-amber-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <div>
                <label className="block text-slate-700 mb-1">
                  Preferred Class Level
                </label>
                <select
                  name="classLevel"
                  className="w-full rounded-md border border-amber-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  <option>Primary Section</option>
                  <option>Junior Section</option>
                  <option>Senior Section</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-700 mb-1">
                  Any important health / special notes (optional)
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  className="w-full rounded-md border border-amber-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-full bg-amber-600 px-6 py-2 text-sm font-semibold text-white hover:bg-amber-700 transition"
                >
                  Submit New Student
                </button>
                {studentStatus && (
                  <p className="text-xs text-slate-600">{studentStatus}</p>
                )}
              </div>
            </form>
          </FadeInSection>
        </section>

        {/* Prefect Application */}
        <section id="prefect">
          <FadeInSection>
            <h2 className="section-title">Prefect Application</h2>
            <p className="mt-3 text-sm md:text-base text-slate-700">
              This form is for existing students who wish to apply for prefect or
              leadership responsibilities at the Dhamma school.
            </p>

            <form
              className="mt-5 grid gap-4 rounded-2xl bg-white shadow-sm border border-amber-50 px-5 py-5 text-sm"
              onSubmit={(e) => handleSubmit(e, "prefect")}
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-slate-700 mb-1">
                    Student&apos;s Full Name
                  </label>
                  <input
                    name="studentName"
                    type="text"
                    required
                    className="w-full rounded-md border border-amber-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 mb-1">Age</label>
                  <input
                    name="age"
                    type="number"
                    min={10}
                    max={20}
                    required
                    className="w-full rounded-md border border-amber-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-slate-700 mb-1">
                    Current Class / Grade at Dhamma School
                  </label>
                  <input
                    name="currentClass"
                    type="text"
                    required
                    className="w-full rounded-md border border-amber-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 mb-1">
                    Years Studied at this Dhamma School
                  </label>
                  <input
                    name="years"
                    type="number"
                    min={1}
                    required
                    className="w-full rounded-md border border-amber-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 mb-1">
                  Other responsibilities (school prefect, club roles, etc.)
                </label>
                <textarea
                  name="otherRoles"
                  rows={3}
                  className="w-full rounded-md border border-amber-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <div>
                <label className="block text-slate-700 mb-1">
                  Why do you want to become a Dhamma school prefect?
                </label>
                <textarea
                  name="reason"
                  rows={4}
                  required
                  className="w-full rounded-md border border-amber-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <div>
                <label className="block text-slate-700 mb-1">
                  Parent / Guardian Consent
                </label>
                <textarea
                  name="parentConsent"
                  rows={3}
                  placeholder="Eg: I, [Name], the parent/guardian of [student], agree to this application..."
                  required
                  className="w-full rounded-md border border-amber-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-full bg-amber-600 px-6 py-2 text-sm font-semibold text-white hover:bg-amber-700 transition"
                >
                  Submit Prefect Application
                </button>
                {prefectStatus && (
                  <p className="text-xs text-slate-600">{prefectStatus}</p>
                )}
              </div>
            </form>
          </FadeInSection>
        </section>
      </div>
    </div>
  );
}
