var output=document.getElementById("outputVal"),
equalBtn=document.getElementById("equal"),
nums=document.querySelectorAll(".num"),
reset=document.getElementById("reset"),
equalSign=String.fromCharCode(61),
typing,
arr1,
x,
arrCalc=[],
keyInputs;
// keycode,
// arrkey=[1,2,3,4,5,6,7,8,9,0,".","/","*","+","-","="];

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

