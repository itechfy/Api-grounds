const { db } = require("../utils/admin");
const { Cricket, Football } = require("../data/data.ground");
const { Owners } = require("../data/data.owner");
exports.setVerified = async (req, res) => {
  // const groundsRef = db.collection("grounds");
  const { id, type, city } = req.query;
  try {
    //db.doc(`grounds/${type}`).update({firstName:_firstName});
    // db.doc(`grounds/${type}`)
    //   .get()
    //   .then((response) => console.log(response.data()));
    // const newRef = db.doc(`grounds/${type}`).where("id", "==", type).get();
    // const newRef = await db.doc(`grounds/${type}`).get();
    db.doc(`users/${type}`).set(Owners);
  } catch (error) {
    return res
      .status(500)
      .json({ general: "Something went wrong, please try again" });
  }
};
