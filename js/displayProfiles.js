// Add event listener to the form of filtering
let catArray = ['Employee', 'Employeer'];

// The function that is responsible of filtering blogs by category
let categoriesDropDownList = document.getElementById('selectCat');
// for (let i = 0; i < Profile.all.length; i++) {

//   catArray.push(Profile.all[i].category);
// }
for (let i = 0; i < catArray.length; i++) {
  let option = document.createElement('option');
  categoriesDropDownList.append(option);
  option.textContent = catArray[i];
}



// for (let i = 0; i < categoriesArray.length; i++) {
//   let option = document.createElement('option');
//   categoriesDropDownList.append(option);
//   option.textContent = categoriesArray[i];
// }

// Retreives all blogs from local storage and display them on the blogs page
function getProfiles() {
  let mainSection = document.getElementById('profilesRender');
  mainSection.innerHTML = '';
  for (let i = 0; i < Profile.all.length; i++) {
    let YourName = document.createElement('h6');

    let profileContent = document.createElement('p');
    let profileTitle = document.createElement('h3');
    let profileCat = document.createElement('h6');
    // let readBtn = document.createElement('button');
    let profileNameDiv = document.createElement('div');
    let profileContentDiv = document.createElement('div');
    let profileTitleDiv = document.createElement('div');
    let profileCatDiv = document.createElement('div');
    // let readBtnDiv = document.createElement('div');
    let blogCatAndBlogger = document.createElement('div');
    let YourNamePrefix = document.createElement('span');
    let blogCatPrefix = document.createElement('span');
    let phoneNumberPrefix= document.createElement('span')
    let emailPrefix=document.createElement('span')


    let email=document.createElement('h6');
    let phoneNumber=document.createElement('p');
    let profileEmailDiv=document.createElement('div');
    let profileNumberDiv=document.createElement('div');
    phoneNumberPrefix.textContent='Phone Number';
    emailPrefix.textContent='Email';
    profileEmailDiv.appendChild(email);
    profileNumberDiv.appendChild(phoneNumber);
    email.textContent=Profile.all[i].email;
    phoneNumber.textContent=Profile.all[i].phoneNumber;
    blogCatAndBlogger.appendChild(profileEmailDiv);
    blogCatAndBlogger.appendChild(profileNumberDiv);
    
    profileNumberDiv.appendChild(phoneNumberPrefix);
    profileEmailDiv.appendChild(emailPrefix);
    


    // readBtnDiv.classList.add('readMoreButton');
    YourNamePrefix.textContent = 'Written by ';
    blogCatPrefix.textContent = 'Category: ';
    profileNameDiv.appendChild(YourNamePrefix);
    profileCatDiv.appendChild(blogCatPrefix);
    profileNameDiv.appendChild(YourName);

    profileContentDiv.appendChild(profileContent);
    profileTitleDiv.appendChild(profileTitle);
    profileCatDiv.appendChild(profileCat);
    // readBtnDiv.appendChild(readBtn);


    YourName.textContent = Profile.all[i].YourName;
    
    profileContent.innerHTML = Profile.all[i].profileContent;
    profileTitle.textContent = Profile.all[i].jobTitle;  
    profileCat.textContent = Profile.all[i].category;

    console.log(Profile.all[i].category);

    // readBtn.textContent = 'View Profiles';
    // readBtn.setAttribute('id', i);
    // readBtn.addEventListener('click', saveIdLs);

    let profileInfoDiv = document.createElement('div');
    let profileImgDiv = document.createElement('div');
    profileInfoDiv.appendChild(profileTitleDiv);
    blogCatAndBlogger.appendChild(profileNameDiv);
    blogCatAndBlogger.appendChild(profileCatDiv);
    profileInfoDiv.appendChild(blogCatAndBlogger);
    profileInfoDiv.appendChild(profileContentDiv);
    // profileInfoDiv.appendChild(readBtnDiv);

    /* Class lists */
    profileInfoDiv.classList.add('profileLeftDiv');
    profileContentDiv.classList.add('profileContentDiv');
    profileNameDiv.classList.add('profileNameDiv');
    profileTitleDiv.classList.add('profileTitleDiv');
    profileCatDiv.classList.add('profileCatDiv');
    blogCatAndBlogger.classList.add('blogCatAndBlogger');
    profileNumberDiv.classList.add('profileNumberDiv');
    profileEmailDiv.classList.add('profileEmailDiv');


    let profileImg = document.createElement('img');

    profileImg.setAttribute('src', Profile.all[i].profileImg);

    profileImgDiv.appendChild(profileImg);
    
    let profilesRender = document.createElement('section');
    let mainSection = document.getElementById('profilesRender');

    let profileMainContainer = document.createElement('div');
    profileMainContainer.classList.add('profileMainContainer');  

    let hrElement = document.createElement('hr');
    hrElement.classList.add('hrElement');
    profileMainContainer.appendChild(profileInfoDiv);
    profileMainContainer.appendChild(profileImgDiv);
    profilesRender.appendChild(profileMainContainer);
    profilesRender.appendChild(hrElement);
    mainSection.appendChild(profilesRender);

    profileImgDiv.classList.add('profileRightDiv');
    profilesRender.classList.add('profileContentRow');

  }

}

function saveIdLs(event) {
  let selectedId = event.target.id;
  localStorage.setItem('Profile-Id', JSON.stringify(selectedId));
  // window.location.replace('myprofile.html');

}

getProfiles();