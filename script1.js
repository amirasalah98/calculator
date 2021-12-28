var output=document.getElementById("outputVal"),
equalBtn=document.getElementById("equal"),
nums=document.querySelectorAll(".num"),
reset=document.getElementById("reset"),
equalSign=String.fromCharCode(61),
typing,
arr1,
x,
arrCalc=[],
keyInputs,
// keycode,
arrkey=[1,2,3,4,5,6,7,8,9,0,".","/","*","+","-","="];

console.log(nums)
console.log(equalSign)

for (var i=0;i< nums.length;i++){
    console.log(nums)

    //Global Scope
    nums[i].addEventListener("click" , function () {
        console.log(nums)

        //Block Scope
        typing =  this.textContent
        arrCalc.push(typing)

    arr1= arrCalc.join("")


    output.innerHTML =arr1
})


 }
reset.onclick=function (){
    output.innerHTML=""

    }

equalBtn.addEventListener('click',function (){
    output.innerHTML=eval(output.innerHTML)
   let final =output.textContent
   arrCalc.splice(0)
   arrCalc.push(final)

    
})  


// for(var i=0;i<arrkey.length;i++){
window.addEventListener('keypress', function(event){
    // if(arrkey.includes(this)){
       
        
        arr1= arrCalc.join("")
        x=event.key;
        arrCalc.push(x)
        keyInputs=output.innerHTML =arr1+ x
       
})
window.addEventListener('keypress',function equality(e){
    keycode=e.which;
    if(keycode==61){
        output.innerHTML=eval(keyInputs)

        console.log("pressed")
    }

})

// function equalityKey(){
//     if(equalSign){
        
//         console.log(equalSign)
//     }
// }

// window.addEventListener('keypress',function equality(event){
    
//     equalSign= eval(output.innerHTML)
//     console.log(output.innerHTML)
// })    
// }

// function myFunction(event){
//     x=event.code;
//     window.output.innerHTML=x
//     console.log(x)
//     }

// window.addEventListener('keydown', function(event){
//     if (event.defaultPrevented) {
//         return;
// }
// // KeyboardEvent
// switch (event.code) {
//     case "Digit1":
//         output.innerHTML==1;
//         break;
//     case "key2":
//         output.innerHTML==2;

//         break;
//     case "key3":
//         output.innerHTML==3;

//         break;
//     case "key4":
//         output.innerHTML==4;

//         break;
//     case "key5":
//         output.innerHTML==5;

//         break;
//     case "key6":
//         output.innerHTML==6;

//         break;
//     case "key7":
//         output.innerHTML==7;

//         break;
//     case "key8":
//         output.innerHTML==8;

//         break;
//     case "key9":
//         output.innerHTML==9;

//         break;
//     case "key0":
//         output.innerHTML==0;

//         break;
//     case "key.":
//         output.innerHTML==".";

//         break;
//     case "key1+":
//         output.innerHTML=="+";

//         break;
//     case "key-":
//         output.innerHTML=="-";

//         break;
//     case "key*":
//         output.innerHTML=="*";

//         break;
//     case "key/":
//         output.innerHTML=="/";

//         break;
//     case "key=":
//         output.innerHTML=="=";

//         break;
                                                            
                                                                                                                                                                                                        
                                                                                                                                                                                                                            
//     default:
//         break;
// }
// event.preventDefault();

// },true);
    














// nums.onclick=function numsContent(){
//     numsVal=nums.textContent
//     console.log(numsVal)
//     for(var i=0;i<numsVal.length;i++){
//     dataClicked=numsVal[i].innerHTML
//     console.log(dataClicked)
    
// }
// return numsContent();
// console.log(numsContent())

// }
// nums.addEventListener('click',numsContent)

// reset.onclick=function (){
// output.innerHTML=0
// }

// // [output.innerHTML=input+operators+input
// // input=num.textContent
// // operators=operator.textContent]
////////////////////////////////
// clearThis.onclick=function clearFilter(e){
    //             if(e.target.className == 'clearThis'){
    //                 e.target.parentNode.remove()
    //                 console.log(e.target.parentNode.className)
    //                 text=e.target.parentNode.firstChild.textContent
    //                 // console.log(e.target.parentNode.firstChild.textContent)
    //                 console.log(contentName.contains(text))
    
    //                 allContent.removeAttribute("main-display")
    
    // //                 for(var i=0;i<allContent.length;i++){
    // //                     contentName=allContent[i].classList
    // // if(contentName.contains(text)){
    // //                    console.log("true")
    // //                    allContent.remove("main-display")
    // //                 // allContent[i].classList.remove("main-display")
    // // }
    //                 //      if(eachCategory.textContent===contentName.contains("main-display")){
    //                 //         console.log(eachCategory.textContent)
    
    //                 //     allContent[i].classList.remove("main-display")
    
    //                 // }
    //                     // console.log(eachCategory)
    
    //                 // console.log(allContent[i].classList)
    //             // }
    //         }
    //             // this.style.display="none"
    //             // console.log(categoryVal)
    //         }