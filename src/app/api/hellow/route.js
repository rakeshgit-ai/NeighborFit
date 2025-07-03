// filepath: src/api/hello/route.js
export async function GET() {
  return Response.json({ message: "Hello from API!" });
}