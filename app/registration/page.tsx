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
        setStudentStatus("Successfully submitted.");
      } else {
        setPrefectStatus("Successfully submitted.");
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
                  නවක සිසුන් ලියාපදිංචිය
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
                  ශිෂ්‍යය නායක අයදුම් පත්‍රය
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
            <h2 className="section-title">නවක සිසුන් ලියාපදිංචිය</h2>
            <p className="mt-3 text-sm md:text-base text-slate-700">
              Please fill in the details of the student and parent/guardian.
            </p>

            <form
  className="mt-5 grid gap-4 rounded-2xl bg-white shadow-sm border border-amber-50 px-5 py-5 text-sm"
  onSubmit={(e) => handleSubmit(e, "student")}
>

{/* Name */}
<div>
<label className="block text-slate-700 mb-1">
01. සම්පූර්ණ නම
</label>
<input
name="fullName"
type="text"
required
className="w-full mt-1 mb-4 px-4 py-2 rounded-lg border border-amber-300 
             text-slate-700 placeholder:text-slate-400
             focus:outline-none focus:ring-2 focus:ring-amber-500"
/>
</div>

{/* Name with initials */}
<div>
<label className="block text-slate-700 mb-1">
02. මුලකුරු සමඟ නම
</label>
<input
name="initialName"
type="text"
required
className="w-full mt-1 mb-4 px-4 py-2 rounded-lg border border-amber-300 
             text-slate-700 placeholder:text-slate-400
             focus:outline-none focus:ring-2 focus:ring-amber-500"
/>
</div>

{/* Address */}
<div>
<label className="block text-slate-700 mb-1">
03. ස්ථිර ලිපිනය
</label>
<textarea
name="address"
rows={2}
required
className="w-full mt-1 mb-4 px-4 py-2 rounded-lg border border-amber-300 
             text-slate-700 placeholder:text-slate-400
             focus:outline-none focus:ring-2 focus:ring-amber-500"
/>
</div>

{/* DOB */}
<div className="grid gap-4 md:grid-cols-2">
<div>
<label className="block text-slate-700 mb-1">
04. උපන් දිනය
</label>
<input
name="dob"
type="date"
required
className="w-full mt-1 mb-4 px-4 py-2 rounded-lg border border-amber-300 
             text-slate-700 placeholder:text-slate-400
             focus:outline-none focus:ring-2 focus:ring-amber-500"
/>
</div>

<div>
<label className="block text-slate-700 mb-1">
05. උපන් ස්ථානය
</label>
<input
name="birthPlace"
type="text"
className="w-full mt-1 mb-4 px-4 py-2 rounded-lg border border-amber-300 
             text-slate-700 placeholder:text-slate-400
             focus:outline-none focus:ring-2 focus:ring-amber-500"
/>
</div>
</div>

{/* Gender */}
<div>
<label className="block text-slate-700 mb-1">
06. ස්ත්‍රී / පුරුෂ භාවය
</label>
<select
name="gender"
className="w-full mt-1 mb-4 px-4 py-2 rounded-lg border border-amber-300 
             text-slate-700 placeholder:text-slate-400
             focus:outline-none focus:ring-2 focus:ring-amber-500"
>
<option value="">තෝරන්න</option>
<option>පුරුෂ</option>
<option>ස්ත්‍රී</option>
</select>
</div>

{/* School */}
<div className="grid gap-4 md:grid-cols-2">
<div>
<label className="block text-slate-700 mb-1">
07. ඉගෙනුම ලබන පාසල
</label>
<input
name="school"
type="text"
className="w-full mt-1 mb-4 px-4 py-2 rounded-lg border border-amber-300 
             text-slate-700 placeholder:text-slate-400
             focus:outline-none focus:ring-2 focus:ring-amber-500"
/>
</div>

<div>
<label className="block text-slate-700 mb-1">
08. ඉගෙනුම ලබන ශ්‍රේණිය
</label>
<input
name="grade"
type="text"
className="w-full mt-1 mb-4 px-4 py-2 rounded-lg border border-amber-300 
             text-slate-700 placeholder:text-slate-400
             focus:outline-none focus:ring-2 focus:ring-amber-500"
/>
</div>
</div>

{/* Parent */}
<div>
<label className="block text-slate-700 mb-1">
09. මව / පියා / භාරකරුගේ නම
</label>
<input
name="parentName"
type="text"
required
className="w-full mt-1 mb-4 px-4 py-2 rounded-lg border border-amber-300 
             text-slate-700 placeholder:text-slate-400
             focus:outline-none focus:ring-2 focus:ring-amber-500"
/>
</div>

{/* Phone */}
<div>
<label className="block text-slate-700 mb-1">
10. දුරකථන අංකය
</label>
<input
name="contact"
type="text"
required
placeholder="07X XXX XXXX"
className="w-full mt-1 mb-4 px-4 py-2 rounded-lg border border-amber-300 
             text-slate-700 placeholder:text-slate-400
             focus:outline-none focus:ring-2 focus:ring-amber-500"
/>
</div>

{/* Submit */}
<div className="flex items-center gap-3">
<button
type="submit"
className="inline-flex justify-center rounded-full bg-amber-600 px-6 py-2 text-sm font-semibold text-white hover:bg-amber-700 transition"
>
අයදුම්පත යොමු කරන්න
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
            <h2 className="section-title">ශිෂ්‍යය නායක අයදුම් පත්‍රය</h2>
            <p className="mt-3 text-sm md:text-base text-slate-700">
              This form is for existing students who wish to apply for prefect or
              leadership responsibilities at the Dhamma school.
            </p>

            <form
  className="mt-5 grid gap-4 rounded-2xl bg-white shadow-sm border border-amber-50 px-5 py-5 text-sm"
  onSubmit={(e) => handleSubmit(e, "prefect")}
>

{/* Full Name */}
<div>
<label className="block text-slate-700 mb-1">
සම්පූර්ණ නම
</label>
<input
name="fullName"
type="text"
required
className="w-full mt-1 mb-4 px-4 py-2 rounded-lg border border-amber-300 
             text-slate-700 placeholder:text-slate-400
             focus:outline-none focus:ring-2 focus:ring-amber-500"
/>
</div>

{/* Date of Birth */}
<div>
<label className="block text-slate-700 mb-1">
උපන්දිනය
</label>
<input
name="dob"
type="date"
required
className="w-full mt-1 mb-4 px-4 py-2 rounded-lg border border-amber-300 
             text-slate-700 placeholder:text-slate-400
             focus:outline-none focus:ring-2 focus:ring-amber-500"
/>
</div>

{/* School */}
<div>
<label className="block text-slate-700 mb-1">
ඉගෙනුම ලබන පාසල
</label>
<input
name="school"
type="text"
required
className="w-full mt-1 mb-4 px-4 py-2 rounded-lg border border-amber-300 
             text-slate-700 placeholder:text-slate-400
             focus:outline-none focus:ring-2 focus:ring-amber-500"
/>
</div>

{/* Grade */}
<div>
<label className="block text-slate-700 mb-1">
ශ්‍රේණිය
</label>
<input
name="grade"
type="text"
required
className="w-full mt-1 mb-4 px-4 py-2 rounded-lg border border-amber-300 
             text-slate-700 placeholder:text-slate-400
             focus:outline-none focus:ring-2 focus:ring-amber-500"
/>
</div>

{/* Parent Name */}
<div>
<label className="block text-slate-700 mb-1">
මව / පියා / භාරකරුගේ නම
</label>
<input
name="parentName"
type="text"
required
className="w-full mt-1 mb-4 px-4 py-2 rounded-lg border border-amber-300 
             text-slate-700 placeholder:text-slate-400
             focus:outline-none focus:ring-2 focus:ring-amber-500"
/>
</div>

{/* Address */}
<div>
<label className="block text-slate-700 mb-1">
ලිපිනය
</label>
<textarea
name="address"
rows={3}
required
className="w-full mt-1 mb-4 px-4 py-2 rounded-lg border border-amber-300 
             text-slate-700 placeholder:text-slate-400
             focus:outline-none focus:ring-2 focus:ring-amber-500"
/>
</div>

{/* Phone */}
<div>
<label className="block text-slate-700 mb-1">
දුරකථන අංකය
</label>
<input
name="phone"
type="tel"
required
className="w-full mt-1 mb-4 px-4 py-2 rounded-lg border border-amber-300 
             text-slate-700 placeholder:text-slate-400
             focus:outline-none focus:ring-2 focus:ring-amber-500"
/>
</div>

{/* Previous Leadership */}
<div>
<label className="block text-slate-700 mb-1">
මීට පෙර පාසලේ හෝ දහම් පාසලේ ශිෂ්‍ය නායක/නායිකා තනතුරක් දරා තිබේද?
</label>
<textarea
name="previousRoles"
rows={3}
className="w-full mt-1 mb-4 px-4 py-2 rounded-lg border border-amber-300 
             text-slate-700 placeholder:text-slate-400
             focus:outline-none focus:ring-2 focus:ring-amber-500"
/>
</div>

{/* Attendance */}
<div>
<label className="block text-slate-700 mb-1">
ගිය වසරේ දහම් පාසලට පැමිණි දින ගණන
</label>
<input
name="attendance"
type="number"
className="w-full mt-1 mb-4 px-4 py-2 rounded-lg border border-amber-300 
             text-slate-700 placeholder:text-slate-400
             focus:outline-none focus:ring-2 focus:ring-amber-500"
/>
</div>

{/* Poya Sil */}
<div>
<label className="block text-slate-700 mb-1">
ගිය වසරේ පොහෝ දිනවල සිල් සමාදන් වූ වාර ගණන
</label>
<input
name="poya"
type="number"
className="w-full mt-1 mb-4 px-4 py-2 rounded-lg border border-amber-300 
             text-slate-700 placeholder:text-slate-400
             focus:outline-none focus:ring-2 focus:ring-amber-500"
/>
</div>

{/* Exam Marks */}
<div>
<label className="block text-slate-700 mb-1">
දහම් පාසල වාර්ෂික විභාගයෙන් ලබාගත් ලකුණු
</label>
<input
name="examMarks"
type="number"
className="w-full mt-1 mb-4 px-4 py-2 rounded-lg border border-amber-300 
             text-slate-700 placeholder:text-slate-400
             focus:outline-none focus:ring-2 focus:ring-amber-500"
/>
</div>

{/* Dhamma School Activities */}
<div>
<label className="block text-slate-700 mb-1">
දහම් පාසල තුළ සිදු කරන ක්‍රියාකාරකම්
</label>
<textarea
name="dhammaActivities"
rows={3}
className="w-full mt-1 mb-4 px-4 py-2 rounded-lg border border-amber-300 
             text-slate-700 placeholder:text-slate-400
             focus:outline-none focus:ring-2 focus:ring-amber-500"
/>
</div>

{/* Other Achievements */}
<div>
<label className="block text-slate-700 mb-1">
වෙනත් බාහිර ක්‍රියාකාරකම් / ජයග්‍රහණ
</label>
<textarea
name="otherActivities"
rows={3}
className="w-full mt-1 mb-4 px-4 py-2 rounded-lg border border-amber-300 
             text-slate-700 placeholder:text-slate-400
             focus:outline-none focus:ring-2 focus:ring-amber-500"
/>
</div>

{/* Religious Service */}
<div>
<label className="block text-slate-700 mb-1">
ඔබ විසින් සිදු කරන ආගමික හා සමාජ සේවා
</label>
<textarea
name="services"
rows={3}
className="w-full mt-1 mb-4 px-4 py-2 rounded-lg border border-amber-300 
             text-slate-700 placeholder:text-slate-400
             focus:outline-none focus:ring-2 focus:ring-amber-500"
/>
</div>

{/* Submit */}
<div className="flex items-center gap-3">
<button
type="submit"
className="inline-flex justify-center rounded-full bg-amber-600 px-6 py-2 text-sm font-semibold text-white hover:bg-amber-700 transition"
>
අයදුම්පත යොමු කරන්න
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
