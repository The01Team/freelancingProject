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

let submitBtn = document.getElementById('createForm');
submitBtn.addEventListener('submit', createProfile);


function createProfile(event) {
  let createForm = document.getElementById('createForm');


  event.preventDefault();
  let YourName = event.target.YourName.value;

  let jobTitle = event.target.jobTitle.value;
  let email = event.target.email.value;
  let phoneNumber = event.target.phoneNumber.value;
  let profileContent = event.target.profileContent.value;

  // let url = event.target.image.value;
  let url = imgFile
  let list = event.target.categoryOptions.value;

  let newObj = new Profile(YourName, jobTitle, email, phoneNumber, list, profileContent, url);
  newObj.setProfileImg(url);
  console.log(url);
  newObj.storeToLocalStorage();
  createForm.reset();
  let newProfileId = Profile.all.length - 1;
  localStorage.setItem('ProfileId', JSON.stringify(newProfileId));
  console.log(newProfileId);
  window.location.replace('ourCommunity.html');

}




