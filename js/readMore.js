let firstcap = document.getElementById("captionFirst").innerText
let secondcap = document.getElementById("captionSecond").innerText
let thirdcap = caotionContent = document.getElementById("captionThird").innerText

function captionFirst(){
    if (firstcap.length > 8){
        $('#captionFirst').html(`${firstcap.substring(0,8)}...`);
    }
}
function captionSecond(){
    if (secondcap.length > 8){
        $('#captionSecond').html(`${secondcap.substring(0,8)}...`);
    }
}
function captionThird(){
    if (thirdcap.length > 8){
        $('#captionThird').html(`${thirdcap.substring(0,8)}...`);
    }
}

function readMoreFirst(){
    $("#captionFirst").text(firstcap)
    $("#btn-1").hide()
}
function readMoreSecond(){
    $("#captionSecond").text(secondcap)
    $("#btn-2").hide()
}
function readMoreThird(){
    $("#captionThird").text(thirdcap)
    $("#btn-3").hide()
}