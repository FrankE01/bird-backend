import { model, Schema } from "mongoose";

const appearanceSchema = new Schema({
  _id: Schema.Types.ObjectId,
  size: String,
  color: [String],
});

export const birdSchema = new Schema({
  _id: String,
  commonName: String,
  scientificName: String,
  description: String,
  habitat: [String],
  appearance: appearanceSchema,
  photos: [String],
});

export default model("Bird", birdSchema);
