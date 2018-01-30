var h1 =$('h1');
h1.html();
h1.html('hello world from javascripshakil');
h1.on('click',function(){
    alert('hello world');
})
function hello(){
    console.log('hello world');
}
hello();
var parvaz = hello;
parvaz();
// $('button.hide').on('click', function (){
//     $('p').hide(3000);
// })
// $('button.show').on('click', function(){
//     $('p').show(5000)
// })
$('button.hide').on('click', function(){
    $('p').fadeOut(5000);
})
$('button.show').on('click',function(){
    $('p').fadeIn(5000);
})
$('button.toggle').on('click',function(){
    $('p').toggle(5000);
})
