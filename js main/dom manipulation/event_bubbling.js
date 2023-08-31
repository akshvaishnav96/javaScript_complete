// // event bubbling in js

// let uldiv = document.querySelector('.uldiv')
// let ul = document.querySelector('ul');
// let liabout = document.querySelector('.about');

// uldiv.addEventListener('click',function(){
//     console.log('click on ul main div');
// })


// ul.addEventListener('click',function(){
//     console.log('click on ul');
// })


// liabout.addEventListener('click',function(){
//     console.log('click on about')
// })

// result :    click on about
//             click on ul
//             click on ul main div
            

// // the result is when click on about it log on console 'click on about'  and then 'click on ul' and then "click on ul main div its go like bubbling bottom to top like li then ul then div"

// // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let uldiv = document.querySelector('.uldiv')
// let ul = document.querySelector('ul');
// let liabout = document.querySelector('.about');

// uldiv.addEventListener('click',function(){
//     console.log('click on ul main div');
// },true)


// ul.addEventListener('click',function(){
//     console.log('click on ul');
// },true)


// liabout.addEventListener('click',function(){
//     console.log('click on about')
// },true)

// result :    click on ul main div
//             click on ul
//             click on about

// you can stop the bubbling of event bt giving true in default its always false

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++