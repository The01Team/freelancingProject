'use strict';

// Categories array
let categoriesArray = ['Employee', 'Employeer'];

// To fill up the select list with categories
let categoriesDropDownList = document.getElementById('categoryOptions');


console.log(categoriesArray);


for (let i = 0; i < categoriesArray.length; i++) {
  let option = document.createElement('option');
  categoriesDropDownList.append(option);
  option.textContent = categoriesArray[i];
}

let imgFile;
let choose="Employee";

let submitBtn = document.getElementById('createForm');
submitBtn.addEventListener('submit', createProfile);
categoriesDropDownList.addEventListener("change",function(event ){
  
  choose=event.target.value
  if(choose==="Employeer"){
    document.getElementById("swich").innerHTML="";
    let newLabel=document.getElementById('swich');
    // let lab1=document.getElementById('lab1')
    let label1=document.createElement('label')
    newLabel.appendChild(label1);
    label1.classList.add('require'); 
    label1.textContent='Project name';
    let input1=document.createElement('input');
    newLabel.appendChild(input1);
    input1.setAttribute("type", "text");
    input1.setAttribute("id", "input1");
    

    let label2=document.createElement('label')
    newLabel.appendChild(label2);
    label2.classList.add('require'); 
    label2.textContent='Skills requiered';
    let input2=document.createElement('input');
    newLabel.appendChild(input2);
    input2.setAttribute("type", "text");
    input2.setAttribute("id", "input2");
    input2.setAttribute("placeholder","Java ,Paython,PHP....")

    let label3=document.createElement('label')
    newLabel.appendChild(label3);
    label3.classList.add('require'); 
    label3.textContent='Project Details';
    let input3=document.createElement('textarea');
    newLabel.appendChild(input3);
    input3.setAttribute("type", "text");
    input3.setAttribute("id", "input3");
    

    
    // Profile.profileContent = event.target.input2.value;
    // let a =event.target.input1.value;
    // let b =event.target.input2.value;
    //  event.target.profileContent? event.target.profileContent.value : event.target.input2.value ;

  }else{
    location.reload();
  }
  
  y=choose;
  
})


function createProfile(event) {
  let createForm = document.getElementById('createForm');


  event.preventDefault();
  let YourName = event.target.YourName.value;
  let jobTitle = event.target.jobTitle.value;
  let email = event.target.email.value;
  let phoneNumber = event.target.phoneNumber.value;
  let profileContent = event.target.profileContent? event.target.profileContent.value : '';
  // let skillsRequired=event.target.input2.value;
  // let projectName=event.target.input1.value;
  let projectName=event.target.input1? event.target.input1.value: '----';
  let skillsRequired=event.target.input2? event.target.input2.value: '';
  let projectDetails=event.target.input3? event.target.input3.value: '';
  
  // let profileContent=event.target.profileContent.value;

  // let url = event.target.image.value;
  let url = imgFile;
  let list = event.target.categoryOptions.value;
  

  let newObj = new Profile(YourName, jobTitle, email, phoneNumber, list, profileContent, skillsRequired,projectName,projectDetails,url);
  newObj.setProfileImg(url);
  console.log(url);
  newObj.storeToLocalStorage();
  createForm.reset();
  let newProfileId = Profile.all.length - 1;
  localStorage.setItem('ProfileId', JSON.stringify(newProfileId));
  console.log(newProfileId);
  window.location.replace('ourCommunity.html');

}




