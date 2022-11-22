const { db } = require("../utils/admin");
const { grounds } = require("./grounds");

exports.groundAndOwner = async (req, res) => {
  var groundsList = {};
  const groundsRef = db.collection("grounds");

  try {
    groundsRef.get().then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      /////////////////////This will get every ground of every location////////////////////////////////////////
      const arr = data
        .map(
          (
            ground //return cities names
          ) =>
            Object.keys(ground)
              .filter((value) => value !== "id")
              .map((cityName) => {
                let keys = Object.keys(ground[cityName]);
                keys.map((key) => {
                  ground[cityName][key]["type"] = ground.id;
                  ground[cityName][key]["city"] = cityName;
                });
                return ground[cityName];
              })
        )
        .flat(); //flat merges nested arrays into single array
      //  console.log(Object.keys(arr[0])[0]);
      for (let i = 0; i < arr.length; i++) {
        for (key in arr[i]) {
          Object.assign(groundsList, { [key]: arr[i][key] });
        }
      }

      db.doc("users/ground-owner")
        .get()
        .then(function (response) {
          var tempObj = {};
          var owners = response.data();
          for (key in groundsList) {
            for (ownerID in owners) {
              if (groundsList[key].ownerId == ownerID) {
                Object.assign(tempObj, {
                  [key]: { ...groundsList[key], owner: { ...owners[ownerID] } },
                });
              }
            }
          }

          return res.status(201).json(tempObj);
        });
    });
  } catch (error) {
    return res
      .status(500)
      .json({ general: "Something went wrong, please try again" });
  }
};
