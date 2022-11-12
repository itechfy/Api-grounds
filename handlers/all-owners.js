const { db } = require("../utils/admin");

exports.owners = async (req, res) => {
  const ownerRef = db.collection("users");

  try {
    ownerRef.get().then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      return res.status(201).json(data[1]["owners"]);
    });
  } catch (error) {}
};
