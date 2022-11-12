const { db } = require("../utils/admin");

exports.owner = async (req, res) => {
  var ownerID = req.params.id.toString();
  var ownersArr = [];
  const ownerRef = db.collection("users");

  try {
    ownerRef.get().then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      ownersArr = data[1]["owners"];
      ownersArr.forEach((o) => {
        if (o.id == ownerID) {
          return res.status(201).json(o);
        }
      });
    });
  } catch (error) {}
};
