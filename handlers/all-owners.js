const { db } = require("../utils/admin");

exports.owners = async (req, res) => {
  //const ownerRef = db.collection("users");

  try {
    // ownerRef.get().then((snapshot) => {
    //  // const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    //   const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    //   //return res.status(201).json(data[1]["owners"]);
    //   return res.status(201).json(data);
    // });
    db.doc("users/ground-owner")
      .get()
      .then(function (response) {
        return res.status(201).json(response.data());
      });
  } catch (error) {
    res.status(500).json({ general: "Something went wrong, please try again" });
  }
};
