'use strict';

let Profile=function(YourName,jobTitle,email,phoneNumber,category,profileContent,skillsRequired,projectName,projectDetails)
{
this.YourName=YourName;
this.jobTitle=jobTitle;
this.email=email;
this.phoneNumber=phoneNumber;
this.category=category;
this.profileImg = '';
this.profileContent=profileContent;
this.skillsRequired=skillsRequired;
this.projectName=projectName;
this.projectDetails=projectDetails;
Profile.all.push(this);

};

Profile.prototype.setProfileImg = function(profileImgURL){
this.profileImg = profileImgURL;

};



Profile.prototype.storeToLocalStorage = function(){
console.log(Profile.all);
localStorage.setItem('allProfiles', JSON.stringify(Profile.all));
};


 Profile.all = [];







// checks if there are Profiles already saved in local storage
let getProfilesFromLS = JSON.parse(localStorage.getItem('allProfiles'));
if(getProfilesFromLS){
  Profile.all = getProfilesFromLS;
}



// If no Profiles are saved in the local storage, create these 5 Profiles
if(Profile.all.length === 0){
  let Profile1Content = 'Whether you are a public figure or not, you’re always going to have to deal with people’s opinions of your work. Sometimes, it will be valid; other times, it won’t. Judge the judger, before you let their opinion get to you. Regardless of who is giving you the praise, or the criticism,  you should never allow someone else’s opinion to make you sad. I had a conversation with a caller on Tea With GaryVee about this very topic. I hope it resonates with you. 1. REALIZE THAT THEY DON’T KNOW YOU Whoever is leaving mean comments on your content most likely has no idea who you are. Michelle: I get really put down by people’s comments and I’ve been watching what you say about not listening to them…but I’m just a really soft person. I’m really sensitive, so I have a really hard time. Gary: Let me try to help.The biggest thing that you need to realize is they don’t know you. People criticize me all the time but they have no idea who I am or what I do. They read one quote or look at one clip, out of context, and they think they know me. I’m not too big on constructive criticism when it comes from people who have no idea what they’re talking about. Judge the judger who’s judging you. 2. EMPATHIZE WITH THEM Do you know how sad someone must be to take the time and leave a mean comment? Second, you have to be empathetic and feel compassion for them. Michelle, listen to me, do you know how sad of a place somebody has to be in for them to take the time to watch your video and say something to make you feel bad? Just so that you feel bad with them. Do you understand how sad they must feel?  I’m not joking, and I think people think i’m just trying to cheer you up, but I’m not joking. When people say shit about you like: you’re ugly, that’s stupid, you’re not funny, you’re dumb, that’s wrong– I don’t know how to do anything other than feel really bad for them.';
  let Profile2Content = 'Life before Profileging<br>I’m originally from Quebec, Canada. Back in the days, I used to be a social worker. I used to travel once a year for about a month and I was always spending my summers in Europe since I was 20 years old. In June 2014, I started my journey around the world at the age of 25.<br>Life on the road<br>I first started my journey in the Canadian Rockies where I hitch-hiked my way around. Then, I moved to Australia for two years. I started A Broken Backpack in July 2015. Back at the time, I was working on a farm in Australia, and I needed something to stay entertained. Quickly, A Broken Backpack became popular.<br>After Australia, I decided to go on a backpacking trip to Southeast Asia. Later on, I moved to the UK for a bit less than a year.<br>In October 2017, I decided to move to Southeast Asia. Bali became my home for about one and a half years.<br>Since 2019, I’ve been based mostly in Thailand. I spend about 2-3 months in a destination every time.<br>Of course, I do plan some occasional trips in and there, but since I’m running an online business and a few successful Profiles, I prefer slow travel.<br>And… I still spend my summers in Europe.<br>Which brings me to you<br>A Broken Backpack offers great travel tips to help you stay on the road longer. I left Canada with less than CAD 2,000 on my name (and a bunch of student debts).<br>I’m living proof that you don’t need tons of savings to make your travel dreams come true.<br>I learned how to travel on the very cheap, volunteered when I needed to, and created an online business to support myself abroad. I share all these tips here on A Broken Backpack.';

  let Profile3Content = 'Very recently, I used our social media channels to share some alarming statistics about the dangers of ‘silent’ heart attacks – cardiac episodes so mild that they go unnoticed until the patient requires an ECG.<br>The statistics themselves are sobering enough – around 45% of all heart attacks are silent and their long-term effect on heart health can be significant, with a major and possibly fatal cardiac event more likely with each episode.<br>But they become alarming when you add in other considerations.<br>For example, four in every ten people admit they either avoid making an appointment with their GP to have a heart check-up, or make the appointment but then cancel it at the last minute.<br>Add to this the fact that heart checks aren’t a standard element of a routine NHS or GP check and you begin to see an emerging picture of increasing risk.<br>One of the statistics that surprises most of the clients we see at The Natural Doctor® is that 50% of all heart attack victims havenormal cholesterol levels. No-one is going to tell you that lowering cholesterol is a bad thing; but if you’re someone who thinks lowering cholesterol is the whole answer to tackling the health of your heart then you could be in for a nasty surprise.<br>For a great many people – and especially for men who are more naturally predisposed to heart conditions – what stops them going through with an appointment is that age-old process of knowledge breeding fear.<br>Knowledge in the sense that they might recognise their lifestyle puts them at exponentially greater risk or, perhaps, that there is a history of heart disease in their family. Fear in the sense of having their worst suspicions confirmed.<br>Perversely, for those people, not knowing they have a problem means there’s no problem to deal with. Which works – but only until their heart doesn’t.<br>In reality, of course, we’d all logically agree that knowing is the better option, whether there is an identified risk or not, because it gives us time to take the necessary steps to make the changes that need to be made to protect our hearts.<br>Here at The Natural Doctor®, our PULs cardiovascular risk assessment is designed to do exactly that: assess your risk of a serious cardiac event and then beginning the process of giving you and/or your GP the information you need to stop it from ever happening.';

  let Profile1 = new Profile('Mariam','Web Developer',' mariam123@gmail.com','078362357','Employee', Profile1Content);
  let Profile2 = new Profile('Osama','Web Developer',' osama123@gmail.com','0787762357','Employee', Profile2Content);
  let Profile3 = new Profile('Hiba','Web Developer',' hiba123@gmail.com','078772357','Employee', Profile3Content);
 
  Profile1.setProfileImg('images/mariam.jpg');
  Profile2.setProfileImg('images/Osama.jpg');
  Profile3.setProfileImg('images/heba1.jpg');


 
  Profile1.storeToLocalStorage();
//   Profile2.storeToLocalStorage();
//   Profile3.storeToLocalStorage();
}

let a;
let b;
let y;