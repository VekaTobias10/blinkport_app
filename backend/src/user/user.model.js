import { MongoClient } from "mongodb";

const URL =
  "mongodb+srv://vir_994:@firstddbb.sjoeu.mongodb.net";

export const createUser = async (user) => {


  const client = await MongoClient.connect(URL);

  const data = await client
    .db("proyectotres")
    .collection("user")
    .insertOne(user)
    .toArray();

  client.close();
  return data.length > 0;
};

// export const showUserInfo = async (user) => {
//   const loginValue = {
//     email: user,
//   };
//   const client = await MongoClient.connect(URL);

//   const data = await client
//     .db("firstddbb")
//     .collection("user")
//     .find(loginValue)
//     .toArray();
//   client.close();
//   return data;
// };


// export const createUser = MongoClient.connect(URL, (err, client) => {
//   if(err){
//     throw err
//   }
//   const newUser = {
//     email: 
//     password: 
//   }
//   client.db('proyectotres')
//   .collection('user')
//   .insertOne(newUser)
//   .then(r=> {console.log(r).client.close(r)})
// });
