// app/api/contact/route.ts
export async function POST(req: Request) {
  const body = await req.json();

  await fetch(process.env.NEXT_GOOGLE_SHEET_URL!, {
    method: "POST",
    body: JSON.stringify(body),
  });

  return Response.json({ success: true });
}
