const restify = require("restify");
const calculateBMIvalue = require("./calculateBMIvalue");

function welcomeResponsed(req, res, next) {
  res.send("BMI API is online");
  next();
}

const server = restify.createServer();
server.use(restify.plugins.bodyParser());

server.get("/", welcomeResponsed);


server.post("/calculateBMI", callBMIfunction);

function callBMIfunction(req, res, next) {
   
  if(req.headers["access-token"]!="pass-Token"){ res.send(401,"Un-Authorized Access token header"); return;}

  let _reqPayload = req.body;

  if (_reqPayload) {
    _reqPayload.forEach((element) => {
      let _resp = calculateBMIvalue(element["HeightCm"], element["WeightKg"]);
      element["BMI"] = _resp[0];
      element["Health risk"] = _resp[1];
    });
    res.send(JSON.stringify(_reqPayload));
  } else {
    res.send("Not a vaild request input");
  }
  next();
}

server.listen(3000, function () {
  console.log("%s listening at %s", server.name, server.url);
});
