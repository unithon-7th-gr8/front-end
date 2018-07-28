function copyLink() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    document.execCommand("copy");
    alert("[주소를 복사 하였습니다] " + copyText.value);
}

$(document).ready(function(){
    var modal = $('.modal');
    $('.show-modal').click(function() {
        modal.fadeIn();
    });

    $('.close-modal').click(function() {
        modal.fadeOut();
    });
});



function fileSelected() {
    var count = document.getElementById('fileToUpload').files.length;
    document.getElementById('details').innerHTML = "";
    for (var index = 0; index < count; index ++)
    {
    var file = document.getElementById('fileToUpload').files[index];
    var fileSize = 0;
    if (file.size > 1024 * 1024)
    fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
    else
    fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';
    document.getElementById('details').innerHTML += 'Name: ' + file.name + '<br>Size: ' + fileSize + '<br>Type: ' + file.type;
    document.getElementById('details').innerHTML += '<p>';
    }

  }

function uploadFile() {
    var fd = new FormData();
    var count = document.getElementById('fileToUpload').files.length;
    for (var index = 0; index < count; index ++){
        var file = document.getElementById('fileToUpload').files[index];
        fd.append(file.name, file);
    }
    var xhr = new XMLHttpRequest();
    xhr.upload.addEventListener("progress", uploadProgress, false);
    xhr.addEventListener("load", uploadComplete, false);
    xhr.addEventListener("error", uploadFailed, false);
    xhr.addEventListener("abort", uploadCanceled, false);
    xhr.open("POST", "savetofile.aspx");
    xhr.send(fd);
}

function uploadProgress(evt) {
    if (evt.lengthComputable) {
        var percentComplete = Math.round(evt.loaded * 100 / evt.total);
        document.getElementById('progress').innerHTML = percentComplete.toString() + '%';
    }
    else {
        document.getElementById('progress').innerHTML = 'unable to compute';
    }
}

function uploadComplete(evt) {
/* This event is raised when the server send back a response */
    alert(evt.target.responseText);
}

function uploadFailed(evt) {
    alert("파일을 업로드 하는 중에 에러가 발생하였습니다.");
}

function uploadCanceled(evt) {
    alert("인터넷 연결이 끊겼거나, 유저가 연결을 취소하였습니다.");
}


$(document).ready(function () {
    clickedBtn();
});

function clickedBtn() {
    $('.member-tag').click(function(){
        $(this).addClass('active');
    });
    $('.member-tag.active').click(function(){
        $(this).removeClass('active');
    });
}

$(document).ready(function(){
    $(".inputName").keypress(function (e) {
     if (e.which == 13){
        var name = $(this).val()
        $(this).addClass('hidden');
        var parent = $(this).parent()
        parent.text(name)
     }
    });
});


$(document).ready(function(){
    $(".inputPrice").keypress(function (e) {
     if (e.which == 13){
        var name = $(this).val()
        $(this).addClass('hidden');
        $(this).parent().text(name)
     }
    });
});