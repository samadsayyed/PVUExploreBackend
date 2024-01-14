import mongoose from "mongoose";

export const connectDb = () => {
  mongoose
    .connect(process.env.DATA_BASEURI, {
      dbName: "PVUExplore",
    })
    .then((c) => console.log(`Database Connected with ${c.connection.host}`))
    .catch((e) => console.log(e));
};
