$(document).ready(function () {
    clickedBtn();
});

function clickedBtn() {
    $('.member-btn').click(function(){
        $(this).addClass('active');
        $(this).text("결제완료")
    });
    $('.member-btn.active').click(function(){
        $(this).removeClass('active');
    });
}