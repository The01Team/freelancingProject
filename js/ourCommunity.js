'use strict';



// all profiles

getProfiles(); 

// Add event listener to the form of filtering
let catForm = document.getElementById('categoryForm');
catForm.addEventListener('submit', changeCatHandler);

// The function that is responsible of filtering profiles by category
function changeCatHandler(event) {
    event.preventDefault();
    let valueDropDown = event.target.selectCat.value;
    let mainSection = document.getElementById('profilesRender');
    mainSection.innerHTML = '';
    for (let i = 0; i < Profile.all.length; i++) {


        // if (valueDropDown==='all'){

        //   getBlogPosts();

        // }


        if (valueDropDown === Profile.all[i].category) {

          let cover=document.createElement('img');
          cover.setAttribute('src',"https://lifeskills.ge/wp-content/uploads/2019/06/Things_successful_freelancers_do_at_home_body-1.jpg")
          let projectDetails=document.createElement('p');
          let skillsRequired=document.createElement('h2');
          let projectName=document.createElement('h2');
          let YourName = document.createElement('h4');
      
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
          // let YourNamePrefix = document.createElement('span');
          let projectNamePrefix = document.createElement('span');
          let skillsRequiredPrefix= document.createElement('span')
          let projectDetailsPrefix=document.createElement('span')
      
      
          let email=document.createElement('h6');
          let phoneNumber=document.createElement('h6');
          let profileEmailDiv=document.createElement('div');
          let profileNumberDiv=document.createElement('div');
      
          projectNamePrefix.textContent='Project name:';
          // skillsRequiredPrefix.textContent='Skills Required';
          // projectDetailsPrefix.textContent='Project Details';
      
          // profileNumberDiv.appendChild(phoneNumberPrefix);
          // profileEmailDiv.appendChild(emailPrefix);
          
          profileEmailDiv.appendChild(email);
          profileNumberDiv.appendChild(phoneNumber);
          email.textContent=`Email: ${Profile.all[i].email}`;
          phoneNumber.textContent=`Phone Number: ${Profile.all[i].phoneNumber}`;
          
          
      
      
          // readBtnDiv.classList.add('readMoreButton');
          // YourNamePrefix.textContent = 'Written by ';
          // blogCatPrefix.textContent = 'Category: ';
          // profileNameDiv.appendChild(YourNamePrefix);
          // profileCatDiv.appendChild(blogCatPrefix);
          profileNameDiv.appendChild(YourName);
          // profileContentDiv.appendChild(projectName);
          // profileContentDiv.appendChild(skillsRequired);
          
          profileContentDiv.appendChild(projectDetails);
          
      
          profileContentDiv.appendChild(profileContent);
          profileTitleDiv.appendChild(profileTitle);
          profileCatDiv.appendChild(profileCat);
          // readBtnDiv.appendChild(readBtn);
      
      
          YourName.textContent = Profile.all[i].YourName;
          profileContent.innerHTML = Profile.all[i].profileContent;
          profileTitle.textContent = Profile.all[i].jobTitle;  
          profileCat.textContent = `Category is : ${Profile.all[i].category}`;
          projectName.textContent=Profile.all[i].projectName;
                skillsRequired.textContent= Profile.all[i].skillsRequired;
                projectDetails.textContent= Profile.all[i].projectDetails;
      
      
          console.log(Profile.all[i].category);
      
          // readBtn.textContent = 'View Profiles';
          // readBtn.setAttribute('id', i);
          // readBtn.addEventListener('click', saveIdLs);
      
          let profileInfoDiv = document.createElement('div');
          let profileImgDiv = document.createElement('div');
          blogCatAndBlogger.appendChild(profileNameDiv);
          blogCatAndBlogger.appendChild(projectNamePrefix);
          blogCatAndBlogger.appendChild(projectName);
          profileInfoDiv.appendChild(profileTitleDiv);
          blogCatAndBlogger.appendChild(profileEmailDiv);
          blogCatAndBlogger.appendChild(profileNumberDiv);
          
          
          
          blogCatAndBlogger.appendChild(profileCatDiv);
          // profileInfoDiv.appendChild(profileTitleDiv);
          profileInfoDiv.appendChild(blogCatAndBlogger);
          // profileInfoDiv.appendChild(profileTitleDiv);
          // blogCatAndBlogger.appendChild(projectDetailsPrefix);
          profileInfoDiv.appendChild(profileContentDiv);
          // profileInfoDiv.appendChild(readBtnDiv);
          // blogCatAndBlogger.appendChild(skillsRequiredPrefix);
          blogCatAndBlogger.appendChild(skillsRequired);
      
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
          // profileImg.classList.add('profileImg');
          profileImg.setAttribute('class','profileImg')
          
          profileImgDiv.appendChild(profileImg);
          
          let profilesRender = document.createElement('section');
          let mainSection = document.getElementById('profilesRender');
      
          let profileMainContainer = document.createElement('div');
          profileMainContainer.classList.add('profileMainContainer');  
      
          // let hrElement = document.createElement('hr');
          // hrElement.classList.add('hrElement');
          profileMainContainer.appendChild(profileImgDiv);
          profileMainContainer.appendChild(profileInfoDiv);
          
          profilesRender.appendChild(cover);
          profilesRender.appendChild(profileMainContainer);
          // profilesRender.appendChild(hrElement);
          // profilesRender.appendChild(cover);
          mainSection.appendChild(profilesRender);
         cover.classList.add('cover');
          profileImgDiv.classList.add('profileRightDiv');
          
          profilesRender.classList.add('profileContentRow');
}}

}

// for (let i = 0; i < categoriesArray.length; i++) {
//   let option = document.createElement('option');
//   categoriesDropDownList.append(option);
//   option.textContent = categoriesArray[i];
// }

// Retreives all blogs from local storage and display them on the blogs page


    
