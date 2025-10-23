import { createClient } from "@/app/utils/supabase/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message)
      return Response.json({ error: "All fields required" }, { status: 400 });

    const supabase = await createClient();

    const { error } = await supabase.from("landing_messages").insert([
      { name, email, message },
    ]);

    if (error) throw error;

    return Response.json({ success: true });
  } catch (err) {
    console.error("Error saving message:", err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
