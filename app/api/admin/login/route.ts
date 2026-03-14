import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { username_or_phone, password } = await req.json();

    if (!username_or_phone || !password) {
      return NextResponse.json(
        { error: "Missing login details" },
        { status: 400 }
      );
    }

    const { data: admin, error } = await supabase
      .from("admins")
      .select("*")
      .or(`username.eq.${username_or_phone},phone.eq.${username_or_phone}`)
      .single();

    if (error || !admin) {
      return NextResponse.json(
        { error: "Admin not found" },
        { status: 401 }
      );
    }

    const match = await bcrypt.compare(password, admin.password_hash);

    if (!match) {
      return NextResponse.json(
        { error: "Incorrect password" },
        { status: 401 }
      );
    }

    return NextResponse.json({ success: true });

  } catch (err) {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}