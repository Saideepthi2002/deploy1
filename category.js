var http = require("http");
var url = require("url");
var server = http.createServer(async (req, res) => {
  console.log(req.url);
  var parsedurl = url.parse(req.url, true);
  //   console.log(parsedurl);
  console.log(parsedurl.query.cat);
  var data = await fetch("https://fakestoreapi.com/products");
  var dataa_json = await data.json();
  // men's cat
  if (parsedurl.query.cat == "men") {
    mens_cloth = dataa_json.filter((ele) => ele.category == "men's clothing");
    console.log(mens_cloth);
    res.write(JSON.stringify(mens_cloth));
    res.end();
  }
  // women's cat
  if (parsedurl.query.cat == "women") {
    womens_cloth = dataa_json.filter(
      (ele) => ele.category == "women's clothing"
    );
    res.write(JSON.stringify(womens_cloth));
    res.end();
  }
  // jewelery cat
  if (parsedurl.query.cat == "jewel") {
    jew_arr = dataa_json.filter((ele) => ele.category == "jewelery");
    console.log(jew_arr);
    res.write(JSON.stringify(jew_arr));
    res.end();
  }
  // electronics cat
  if (parsedurl.query.cat == "ele") {
    ele_arr = dataa_json.filter((ele) => ele.category == "electronics");
    res.write(JSON.stringify(ele_arr));
    res.end();
  }
  // else part
  else {
    res.write("Enter the appropriate category");
    res.end();
  }
});

port = 5000;
server.listen(port, () => {
  console.log("server is running");
});
