const http=require('http')
const fs=require('fs');
const csv=require('csvtojson');
const path=require('path');
const csvfilepath='customer-data.csv';

csv()
  .fromFile(csvfilepath)
  .then((jsonObj) => {
      console.log(jsonObj);
      str=JSON.stringify(jsonObj,null,'\t');
      fs.writeFileSync(path.join(__dirname,'customer-data.json'),str);
      console.log("Converted");
  });


//   const jsonArray=await csv().fromFile('customer-data.csv');
//convert(process.argv[2]);











