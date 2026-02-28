import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { type, ...data } = body as { type: "student" | "prefect"; [key: string]: any };

    if (type === "student") {
      const { error } = await supabase.from("students").insert({
        student_name: data.studentName,
        dob: data.dob || null,
        age: data.age ? Number(data.age) : null,
        school: data.school || null,
        parent_name: data.parentName,
        contact: data.contact,
        address: data.address,
        class_level: data.classLevel || null,
        notes: data.notes || null,
      });

      if (error) {
        console.error("Supabase student insert error:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
      }

      return NextResponse.json({ success: true });
    }

    if (type === "prefect") {
      const { error } = await supabase.from("prefect_applications").insert({
        student_name: data.studentName,
        age: data.age ? Number(data.age) : null,
        current_class: data.currentClass,
        years: data.years ? Number(data.years) : null,
        other_roles: data.otherRoles || null,
        reason: data.reason,
        parent_consent: data.parentConsent,
      });

      if (error) {
        console.error("Supabase prefect insert error:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
      }

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false, error: "Invalid type" }, { status: 400 });
  } catch (err) {
    console.error("Registration API error:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
