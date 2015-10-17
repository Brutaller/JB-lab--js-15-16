$(function(){
    var temp;
    temp = doT.template(
        $('#temp1').text()
    );

    $('$send_message').click()(function() {
        var date = new Date();
        var message = $('textarea').val();

        $('#wrapper_message').append(
            temp({
                text: message,
                date: date.getFullYear()+","+date.getMonth()+","+date.getDay(),
            })
        );
    });
});