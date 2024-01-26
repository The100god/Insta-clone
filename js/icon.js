
$(".heart").on('click', function(){
    
    if($(this).hasClass("bi-suit-heart")){
        $(this).removeClass("bi-suit-heart")
        $(this).addClass("bi-suit-heart-fill")
    }
    else if ($(this).hasClass("bi-suit-heart-fill")){
        $(this).removeClass("bi-suit-heart-fill")
        $(this).addClass("bi-suit-heart")

    }
})

$(".bookmark").on('click', function(){
    
    if($(this).hasClass("bi-bookmark")){
        $(this).removeClass("bi-bookmark")
        $(this).addClass("bi-bookmark-fill")
    }
    else if ($(this).hasClass("bi-bookmark-fill")){
        $(this).removeClass("bi-bookmark-fill")
        $(this).addClass("bi-bookmark")

    }
})

function clip(){
    var url = '';
    let textarea = document.createElement("textarea");

    document.body.appendChild(textarea);
    url = window.document.location.href;
    textarea.value = url
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("link copied");
}
