// 
// document.addEventListener('keydown', function(event) {
//     const asciiCode = event.key.charCodeAt(0)
//     let special =''

//     if (event.ctrlKey) {
//         special="Ctrl"
//         document.removeEventListener('keydown', {})
//     }
//     if (event.altKey) {special="Alt"}
//     if (event.shiftKey) {special="Shift"}

//     alert(asciiCode+special)
// });


function numberFilter(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
}