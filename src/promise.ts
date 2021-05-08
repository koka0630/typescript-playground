import * as fs from "fs";

function loadJSON(filename: string, callback: (data: any, error: any) => void){
    fs.readFile(filename, function (err, data) {
        if (err) {
            callback(null , err);
        }
        else {
            try {
                console.log(data.toString());
               callback (JSON.parse(data.toString()), err);
            } catch (err) {
                callback (null, err);
            }
        }
    }
)};

console.log("start");
loadJSON("test.json", (data, err) => {
    if (err === null) {
        console.log(`works: name:${data.name} age:${data.age}`);
    } else {
        console.log(`error: ${err}`);
    }
});
console.log("end");