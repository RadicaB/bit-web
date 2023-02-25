function sum(num1, num2) {
    return num1 + num2;  
}


$(function () {

   $('div').toggleClass('active');  //selektuje sve divove var divElements =
    console.log($('body').html());
    console.log($('div').html('<span>Ovo smo setovali</span>'));  // na mesto svakog diva stavio ovaj tekst

    $('li').click(function () {
        $(this).remove();  //this predstavlja sam element na koji je neko kliknuo
    });

    $('li').on('click', function () {
        $(this).remove();  //this predstavlja sam element na koji je neko kliknuo
    });
   
    $('body').on('click', function (event) {
        var element = $('<p>').text(event.pageX + ',' + event.pageY);
        $('#click-history').append(element);
    });

  /*  var $ul = $('ul')
        setInterval(function() { 
            $ul.delay(200).fadeOut(200).delay(200).fadeIn(200);
        }, 800) */
    
        //var $ul = $('ul')
    console.log($('.active').attr('id'));

    var $newLi = $('<li>');  //dodajemo novi element
    $newLi.text('Novi Element')
    $newLi.addClass('test-clas')
    $newLi.attr('id', 'test-id')
    $('li:last').after($newLi);

    var $allLiElements = $('li');


    $allLiElements.each(function (i, element) {
        console.log(i);   // u konzoli se vidi 0,1,2,3,4 jer je peti tek dole ispod, ako pomerimo gore onda bude 5
        var jqueryEl = $(element);
        return false // break
        return true // continue
       
        if (jqueryEl.attr('class') === 'active') { 
            jqueryEl.css('backgroundcolor')
        }
        console.log(jqueryEl.text());
    });   
});