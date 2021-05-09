// console.log("1番目");

// // お約束を取り付けたい処理にPromise
// const promise1 = new Promise((resolve) => {
//   //1秒後に実行する処理
// //   setTimeout(() => {
//     console.log("2番目");
//     //無事処理が終わったことを伝える
//     resolve("resolved");
//   }).then((res) => {
//   // 処理が無事終わったことを受けとって実行される処理
//   console.log(res);
//   console.log("3番目");
// });

// // reject
// const promise2 = new Promise((resolve, reject) => {
//     reject();
//   })
//     .then(() => {
//       console.log("resolveしたよ");
//     })
//     .catch(() => {
//       console.log("rejectしたよ");
//     });

// チェーン
// const promise = new Promise((resolve, reject) => {
//     reject("test");
//   })
//     .then((val) => {
//       console.log(`then1: ${val}`);
//       return val;
//     })
//     .catch((val) => {
//       console.log(`catch: ${val}`);
//       return val;
//     })
//     .then((val) => {
//       console.log(`then2: ${val}`);
//     });

new Promise((resolve, reject) => {
    resolve("resolved")
})
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })