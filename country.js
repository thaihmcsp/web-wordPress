// const listState = {
//   country: [{ code, text }],
// };
// let list = [];
// $("#billing_state option").each(function (i, option) {
//   let code = $(option).val();
//   let text = $(option).html();
//   list.push({ code, text });
// });
// console.log(list);


const fs = require('fs');
fs.readFile('./data.js','utf8', function(err, data){
    if(err) return
    let text = JSON.stringify(data)
    fs.writeFile('country.txt', text, function(err){
        console.log(err);
    })
})
