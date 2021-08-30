import { MongoClient } from "mongodb";

const URL =
  "mongodb+srv://test-user:Dmqh9J46ypwk6rxZ@bootcamp.3id3n.mongodb.net/";

export const validateUser = async (user, password) => {
  const loginValue = {
    email: user,
    password: password,
  };

  const client = await MongoClient.connect(URL);

  const data = await client
    .db("firstddbb")
    .collection("user")
    .find(loginValue)
    .toArray();

  client.close();
  return data.length > 0;
};
