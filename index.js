// var myCar={
//     maxSpeed:70,
//     driver:"Net Ninja",
//     drive:function(speed,time){
//         console.log(speed*time);

//     },
//     test:function(){
//         console.log(this);
//     }
// };
// myCar.test();
// //{maxSpeed: 70, driver: 'Net Ninja', drive: ƒ, test: ƒ}
// console.log(myCar.maxSpeed);//70
// myCar.drive(50,3); //

// let bod=document.getElementById("body");
// let newUl=document.createElement("ul");
// let newLi=document.createElement("li");
// bod.appendChild(newUl);
// newUl.appendChild(newLi);
// let Newlink=document.createElement("a");
// newLi.appendChild(Newlink);
// Newlink.innerHTML="Home";
// Newlink.setAttribute("style","relative");
// Newlink.style.color="red";
// Newlink.style.fontSize="xx-large";
// newLi.style.listStyle="none";


let more=document.getElementById("more");
let btn=document.getElementById("show-more");
btn.onclick=function(){
if(more.className=="open"){
    //shrink the box
    more.className="";
    btn.innerHTML="Show More";
}else{
//expand the box;
more.className="open";
btn.innerHTML="Show Less";
}

}


