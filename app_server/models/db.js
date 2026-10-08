const mongoose = require('mongoose');
const dbURI = "mongodb+srv://dancourtney_db_user:kkBZAoihOHoXXKfp@cluster0.zyl8o0v.mongodb.net";

try {
   
mongoose.connect(
    dbURI,
    { }).then(
    () => {console.log(" Mongoose is connected")},
	err=> {console.log(err)}
	);
}
 catch (e) {
  console.log("could not connect");
}//require('./locations');

require('./locations');