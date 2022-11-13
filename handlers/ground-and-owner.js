const { db } = require("../utils/admin");

exports.groundAndOwner = async (req, res) => {
  const groundsArr = [];
  const arr1 = [];
  const groundsRef = db.collection("grounds");
  const ownerRef = db.collection("users");
  try {
    groundsRef.get().then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      /////////////////////This will get every ground of every location////////////////////////////////////////
      const arr = data.map(
        (
          ground //return cities names
        ) =>
          Object.keys(ground)
            .filter((value) => value !== "id")
            .map((cityName) => ground[cityName])
      );
      for (let index = 0; index < arr.length; index++) {
        for (let y = 0; y < arr[index].length; y++) {
          for (let z = 0; z < arr[index][y].length; z++) {
            groundsArr.push(arr[index][y][z]);
          }
        }
      }

      ////////////////////////ENDS HERE/////////////////////////////

      ownerRef.get().then((snapshot2) => {
        const data2 = snapshot2.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(data2[1]["owners"]);
        console.log(groundsArr);
        const owners = data2[1]["owners"];
        ////////////////////Merging data of Grounds and owners//////////////////////////
        for (let index = 0; index < groundsArr.length; index++) {
          for (let index2 = 0; index2 < owners.length; index2++) {
            if (
              groundsArr[index]["ownerId"].toString() ==
              owners[index2]["id"].toString()
            ) {
              arr1.push({
                ...groundsArr[index],
                owner: {
                  ...owners[index2],
                },
              });
            }
          }
        }
        //  console.log(arr1);
        return res.status(201).json(arr1);
      });
      //  return res.status(201).json(data);

      //  console.log(owners);
    });
  } catch (error) {
    return res
      .status(500)
      .json({ general: "Something went wrong, please try again" });
  }
};
