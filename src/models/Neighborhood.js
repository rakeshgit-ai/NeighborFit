import mongoose from "mongoose";

const NeighborhoodSchema = new mongoose.Schema({
  name: String,
  walkability: Number,
  nightlife: Number,
  price: Number,
  // Add more fields as needed
});

export default mongoose.models.Neighborhood ||
  mongoose.model("Neighborhood", NeighborhoodSchema);