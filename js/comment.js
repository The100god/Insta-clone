function postFirstComment(){
    let comment = $("#commentFirstInput").val();
    if(!comment){
        alert("There is nothing to comment because input field is empty.")
    }else{

        let temp_html = `<li> <span style="font-weight:460;"> happyMe </span>  ${comment}</li>`
            $('#firstComment').append(temp_html)
              //initialization the input box
            document.getElementById('commentFirstInput').value = null
    }
}
function postSecondComment(){
    let comment = $("#commentSecondInput").val();
    if(!comment){
        alert("There is nothing to comment because input field is empty.")
    }else{
    let temp_html = `<li> <span style="font-weight:460;"> happyMe </span>  ${comment}</li>`
        $('#secondComment').append(temp_html)
          //initialization the input box
        document.getElementById('commentSecondInput').value = null

    }
}

$('#smail-1').on('click', function(){
    $('#commentFirstInput').focus();
})
$('#smail-2').on('click', function(){
    $('#commentSecondInput').focus();
})
$('#smail-3').on('click', function(){
    $('#commentThirdInput').focus();
})