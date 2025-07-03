import { connectToDatabase } from "../../../utils/db";
import Neighborhood from "../../../models/Neighborhood";

export async function POST(req) {
  await connectToDatabase();
  const prefs = await req.json();

  const neighborhoods = await Neighborhood.find({});

  const results = neighborhoods.map(n => ({
    ...n.toObject(),
    score: 100 - (
      Math.abs(n.walkability - prefs.walkability) * 10 +
      Math.abs(n.nightlife - prefs.nightlife) * 10 +
      Math.abs(n.price - prefs.price) * 10
    )
  })).sort((a, b) => b.score - a.score);

  return Response.json(results);
}