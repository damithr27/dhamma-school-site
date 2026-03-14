import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { type, ...data } = body;

    /* STUDENT REGISTRATION */
    if (type === "student") {

      const { error } = await supabase.from("students").insert({
        student_name: data.fullName,
        initial_name: data.initialName || null,
        dob: data.dob || null,
        birth_place: data.birthPlace || null,
        gender: data.gender || null,
        school: data.school || null,
        grade: data.grade || null,
        parent_name: data.parentName,
        contact: data.contact,
        address: data.address
      });

      if (error) {
        console.error("Student insert error:", error);
        return NextResponse.json(
          { success: false, error: error.message },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true });
    }

    /* PREFECT APPLICATION */
    if (type === "prefect") {

      const { error } = await supabase.from("prefect_applications").insert({
        student_name: data.fullName,
        dob: data.dob || null,
        school: data.school,
        grade: data.grade,
        parent_name: data.parentName,
        address: data.address,
        phone: data.phone,
        previous_roles: data.previousRoles || null,
        attendance: data.attendance || null,
        poya: data.poya || null,
        exam_marks: data.examMarks || null,
        dhamma_activities: data.dhammaActivities || null,
        other_activities: data.otherActivities || null,
        services: data.services || null
      });

      if (error) {
        console.error("Prefect insert error:", error);
        return NextResponse.json(
          { success: false, error: error.message },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { success: false, error: "Invalid type" },
      { status: 400 }
    );

  } catch (err) {
    console.error("Registration API error:", err);

    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}