document.addEventListener('DOMContentLoader', function () {

    function click(a) {
        str = document.querySelector('input').value();
        regex = new RegExp('\w+@\w+\.[a-z]+', 'g');
        if (str.match(regex) != null) {
            return true;
        }
        else {
            return false;
        }
    }

    document.querySelector('.button').addEventListener('click', click);
    function hhp(selector){

    }

});