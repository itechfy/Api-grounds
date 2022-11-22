const { response } = require("express");
const { db } = require("../utils/admin");

exports.owner = async (req, res) => {
  var ownerID = req.params.id.toString();
  var ownersArr;

  try {
    db.doc("users/ground-owner")
      .get()
      .then(function (response) {
        ownersArr = response.data();
        for (key in ownersArr) {
          if (key === ownerID) {
            return res.status(201).json(ownersArr[ownerID]);
          }
        }
      });
  } catch (error) {}
};
