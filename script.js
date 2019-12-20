const EndOfYearTime = new Date(2019, 11, 31, 23, 59, 59, 999).getTime();
//var currentTime = new Date().getTime();
//var test = "test";

/***動くか確認するために書いた処理***/
/*
document.write(EndOfYearTime);
console.log(EndOfYearTime);
*/


//constで宣言したほうがいいのかも...？
//const currentTime = new Date().getTime();

/*** 動く確認するために書いた処理 ***/
/*
document.write(currentTime);
console.log(currentTime);
*/

function remainingTime(){
    document.write(EndOfYearTime - currentTime);
    console.log(EndOfYearTime - currentTime);
}
//remainingTime(); 
 
//var seconds = remainingTime(); 

function updateParagraph(){
    var currentTime = new Date().getTime();
    var time = (EndOfYearTime / 1000) - (currentTime / 1000);
    //var seconds = remainingTime(); 
    document.getElementById('count-box').innerText = "年明けまで" + time + '秒。';
    setInterval(updateParagraph, 50);
}
//etInterval(updateParagraph, 50);
//console.log(seconds);
//setInterval(updateParagraph, 50);
updateParagraph();
