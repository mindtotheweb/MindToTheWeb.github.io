"use strict";
$(".service .item").on({
  mouseenter: function() {
  $(this).find("img").animate({//hide
    height: "hide"
  }, 250, function() {
    // Animation complete.
  });
  $(this).find(".hide").animate({//show
    height: "show"
  }, 250, function() {
    // Animation complete.
  });  
}, mouseleave: function(){
  $(this).find("img").animate({//show
    height: "show"
  }, 250, function() {
    // Animation complete.
  });
  $(this).find(".hide").animate({
    height: "hide"
  }, 250, function() {
    // Animation complete.
  });
}});

$(document).ready(function() {
   $("a.order").click(function () { 
     var elementClick = $(this).attr("href");
     var destination = $(elementClick).offset().top;
     $('html,body').animate( { scrollTop: destination }, 500 );
     return false;
   });
   $("a.down").click(function () { 
     var elementClick = $(this).attr("href");
     var destination = $(elementClick).offset().top;
     $('html,body').animate( { scrollTop: destination }, 500 );
     return false;
   });
 });

//form
// var parent = $("#flex")

//   if(typeof cFM_classError === 'undefined')//сюда запишем css-класс, приписывающийся неправильным полям
//     var cFM_classError='classError';
//     
// function cFM_checktrueAttr(parent)//подготавливает данные к обработке
// //(parent – jq-указатель на форму, или объединяющий блок)
// {
//     var error=true;
//      
//     //подчищаем за вызванной ранее функцией
//     $('div.'+cFM_classError).remove();//убираем подсказки
//     $('.'+cFM_classError).each(function(){//убираем подсветку ошибок
//         $(this).removeClass(cFM_classError);
//     });
//      
//     //ищем поля для проверки
//     var inputsToHandle=false;
//     if(typeof parent !== 'undefined')
//         inputsToHandle=parent.find('[cFM_check]');
//     else
//         inputsToHandle=$('[cFM_check]');//ну, а если родитель не задан – давайте уж все проверим
//      
//     //хватаем найденные элементы и наблюдаем их
//     inputsToHandle.each(function(){
//         if(error) error=cFM_prepareChecking(this);//проверяем объекты, ищем хотя бы единственную ошибку
//         else cFM_prepareChecking(this);
//     }); 
//      
//     return error;//возвращаем true, если все элементы прошли ошибку, и false, если кто-то завалился
// }
//  
// function checkName(handle)// запускает проверку конкретного элемента и маркерует ошибочные
// {
//     var error=true;/*возвращаемое значение; смысл - просто показать, что есть ошибка принимает значение: 
//     true - нет ошибок; 
//     false - поле не заполнено; 
//     'wrong' - поле заполнено неправильно;*/
//      
//     //определяемся с подписью поля в случае обнаружения в нем ошибки. По умолчанию будет выводиться 
//     //"Укажите значение поля", если title не задан
//     var title = "Пожалуйста, введите ваше имя";
//     if(typeof $(handle).attr('title') !== 'undefined' && $(handle).attr('title').length>0)
//         title=$(handle).attr('title');
//          
//     var after = handle;//куда лепить сообщение об ошибке
//     var attribute = $(handle).attr('cFM_check');//значение великого атрибута cFM_check
//      
//     //а не задали ли какую хитрую функцию для проверки поля?
//     if(typeof $(handle).attr('cFM_function') !== 'undefined')
//         var chkFunk=$(handle).attr('cFM_function');
//          
//     //наконец, проверяем поле
//     if(typeof chkFunk !== 'undefined')
//         error=window[chkFunk]($(handle));
//     else
//         error=cFM_checkFullness(handle);
//      
//     //коль ошибка закралась к нам
//     if(error!==true)
//     {
//         //определяем, куда лепим сообщение об ошибке    
//         if(typeof $(handle).attr('cFM_confirmInfo') !== 'undefined')
//         {
//             after=$(handle).attr('cFM_confirmInfo');
//             if(after.indexOf('self')===0)//если вдруг селфы непойми зачем прилепили
//             after=after.substr(4);
//         }
//  
//         if(error==='wrong')//коль поле заполнено неправильно
//             $(after).after("<div class=""+cFM_classError+"">Неверное значение поля</div>");
//         else{
//             if(error===false)//коль не заполнено вообще
//                 $(after).after("<div class=""+cFM_classError+"">Укажите "+title+"</div>");//html ошибки
//             else//если особая проверка с особой html
//                 $(after).after("<div class=""+cFM_classError+"">"+error+"</div>"); 
//         }
//         $(handle).addClass(cFM_classError);//добавление класса ошибки
//         if($(handle).attr('type')=='radio')//дорабатываем радиокнопки
//             $('[name="'+$(handle).attr('name')+'"]').addClass(cFM_classError);
//         error=false;
//     }
//     return error;
// }
//  
// function cFM_checkFullness(handle)//а это стандартная функция проверки
// {
//     var error = true;
//      
//     //считываем данные с атрибутов
//     var attribute = $(handle).attr('cFM_check');
//     //флаг обязательности
//     var required = true;
//     if(attribute.indexOf('Y')===-1)
//         required=false;
//     //проверка на формат
//     var format=attribute;
//     if(required)
//         format=attribute.substr(2);
//     switch($(handle).attr('type'))//смотрим, что же у нас за элемент такой
//     {
//         case 'checkbox': 
//             if(!$(handle).prop('checked'))  error=false;
//             break;
//         case 'radio'://обещанная проблема с radio
//             if(!$(handle).prop('checked') && $('[name="'+$(handle).attr('name')+'"]:checked').length==0)
//                 error=false;
//             else
//                 error=true;
//             break;
//          //и text, и select, и textarea здесь идентичны
//         default:
//             if(($(handle).val().trim().length==0 || $(handle).val()=='0') && required)          
//                 error=false;
//             else
//             {
//                 if(format==='num')//проверка на число
//                 {
//                     var regCheck = new RegExp('[^0-9\s-]+');
//                     if(regCheck.test($(handle).val()))
//                         error='wrong';
//                 }
//                 if(format==='email')//проверка на е-мейл
//                 {
//                     var regCheck = new RegExp("^([0-9a-zA-Z]+[-._+&])*[0-9a-zA-Z]+@([-0-9a-zA-Z]+[.])+[a-zA-Z]{2,6}$");
//                     if(!regCheck.test($(handle).val()))
//                         error='wrong';
//                 }
//             }
//             break;
//     }
//     return error;
// }