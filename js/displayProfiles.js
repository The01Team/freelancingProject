// Add event listener to the form of filtering
let catArray = ['Employee', 'Employer'];

// The function that is responsible of filtering blogs by category
let categoriesDropDownList = document.getElementById('selectCat');
for (let i = 0; i < Profile.all.length; i++) {

  catArray.push(Profile.all[i].category);
}
for (let i = 0; i < catArray.length; i++) {
  let option = document.createElement('option');
  categoriesDropDownList.append(option);
  option.textContent = catArray[i];
}


// Retreives all blogs from local storage and display them on the blogs page
function getProfiles() {
  let mainSection = document.getElementById('profilesRender');
  mainSection.innerHTML = '';
  for (let i = 0; i < Profile.all.length; i++) {
    let YourName = document.createElement('h6');
            let profileContent = document.createElement('p');
            let profileTitle = document.createElement('h3');
            let profileCat = document.createElement('h6');
            let email = document.createElement('p');
            let phoneNumber = document.createElement('p');


            let readBtn = document.createElement('button');
            let profileNameDiv = document.createElement('div');
            let profileContentDiv = document.createElement('div');
            let profileTitleDiv = document.createElement('div');
            let profileCatDiv = document.createElement('div');
            let emailDiv = document.createElement('div');
            let phoneNumberDiv = document.createElement('div');

            let readBtnDiv = document.createElement('div');
            let profileCatAndName = document.createElement('div');
            
            let YourNamePrefix = document.createElement('span');
            let profileCatPrefix = document.createElement('span');
            let profileContact = document.createElement('div');
            let emailPrefix = document.createElement('span');
            let phoneNumberPrefix = document.createElement('span');

            readBtnDiv.classList.add('readMoreButton');
            YourNamePrefix.textContent = 'Name ';
            profileCatPrefix.textContent = 'Category: ';

            emailPrefix.textContent = 'Email:  ';
            phoneNumberPrefix.textContent = 'Phone Number : ';
           

            profileNameDiv.appendChild(YourNamePrefix);
            profileNameDiv.appendChild(YourName);

            profileCatDiv.appendChild(profileCatPrefix);
            profileCatDiv.appendChild(profileCat);

            emailDiv.appendChild(emailPrefix);
            emailDiv.appendChild(email);

            phoneNumberDiv.appendChild(phoneNumberPrefix);
            phoneNumberDiv.appendChild(phoneNumber);

            profileContentDiv.appendChild(profileContent);

            profileTitleDiv.appendChild(profileTitle);
            
            
            readBtnDiv.appendChild(readBtn);


            YourName.textContent = Profile.all[i].YourName;

            profileContent.innerHTML = Profile.all[i].profileContent;
            profileTitle.textContent = Profile.all[i].jobTitle;
            profileCat.textContent = Profile.all[i].category;
            email .textContent = Profile.all[i].email ;
            phoneNumber .textContent = Profile.all[i].phoneNumber ;
            
            console.log(Profile.all[i].category);

            readBtn.textContent = 'View Profiles';
            readBtn.setAttribute('id', i);
            readBtn.addEventListener('click', saveIdLs);

            let profileInfoDiv = document.createElement('div');
            let profileImgDiv = document.createElement('div');
            profileInfoDiv.appendChild(profileTitleDiv);
            profileCatAndName.appendChild(profileNameDiv);
            profileCatAndName.appendChild(profileCatDiv);
            profileInfoDiv.appendChild(profileCatAndName);

            profileContact.appendChild(emailDiv);
            profileContact.appendChild(phoneNumberDiv);
            profileInfoDiv.appendChild(profileContact);
            
            profileInfoDiv.appendChild(profileContentDiv);
            profileInfoDiv.appendChild(readBtnDiv);

            /* Class lists */
            profileInfoDiv.classList.add('profileLeftDiv');
            profileContentDiv.classList.add('profileContentDiv');
            profileNameDiv.classList.add('profileNameDiv');
            profileTitleDiv.classList.add('profileTitleDiv');
            profileCatDiv.classList.add('profileCatDiv');
            profileCatAndName.classList.add('profileCatAndName');

            emailDiv.classList.add('emailDiv');
            phoneNumberDiv.classList.add('phoneNumberDiv');
            profileContact.classList.add('profileContact');
            

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
  window.location.replace('myprofile.html');

}

getProfiles();