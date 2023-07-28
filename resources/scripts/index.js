







//handling home nav drop-down list
document.getElementById('home-nav').addEventListener('mouseover', ()=>{
    document.getElementById('home-nav-dropdown-list').style.display = 'inline';
});
document.getElementById('home-nav').addEventListener('mouseout', ()=>{
    document.getElementById('home-nav-dropdown-list').style.display = 'none';
});

// handling site menu open and close button
document.getElementById('open-menu').addEventListener('click', () =>{
    document.getElementById('nav-container').style.display = 'flex';
    document.getElementById('open-menu').style.display = 'none';
    document.getElementById('close-menu').style.display = 'block';
    document.getElementById('welcomeMsg-top-container').style.filter = 'blur(1px)';
    document.getElementById('aboutVisionMission-top-container').style.filter = 'blur(1px)';
    document.getElementById('top-service-container').style.filter = 'blur(1px)';
    document.getElementById('top-experience-container').style.filter = 'blur(1px)';
    document.getElementById('top-team-container').style.filter = 'blur(1px)';
    document.getElementById('top-contact-container').style.filter = 'blur(1px)';
    document.getElementById('footer-section').style.filter = 'blur(1px)';
});
document.getElementById('close-menu').addEventListener('click', () =>{
    document.getElementById('nav-container').style.display = 'none';
    document.getElementById('close-menu').style.display = 'none';
    document.getElementById('open-menu').style.display = 'inline';
    document.getElementById('welcomeMsg-top-container').style.filter = 'none';
    document.getElementById('aboutVisionMission-top-container').style.filter = 'none';
    document.getElementById('top-service-container').style.filter = 'none';
    document.getElementById('top-experience-container').style.filter = 'none';
    document.getElementById('top-team-container').style.filter = 'none';
    document.getElementById('top-contact-container').style.filter = 'none';
    document.getElementById('footer-section').style.filter = 'none';
});

const mobileMediaQuery = window.matchMedia('(max-width: 615px)');
const handleMobileMediaQuery = (mobileMediaQuery) => {
    if(mobileMediaQuery.matches){
        const navList = document.getElementsByClassName('nav-list-item');
        for(let i = 0; i < navList.length; i++){
            navList[i].addEventListener('click', () =>{
                document.getElementById('nav-container').style.display = 'none';
                document.getElementById('close-menu').style.display = 'none';
                document.getElementById('open-menu').style.display = 'inline';
                document.getElementById('welcomeMsg-top-container').style.filter = 'none';
                document.getElementById('aboutVisionMission-top-container').style.filter = 'none';
                document.getElementById('top-service-container').style.filter = 'none';
                document.getElementById('top-experience-container').style.filter = 'none';
                document.getElementById('top-team-container').style.filter = 'none';
                document.getElementById('top-contact-container').style.filter = 'none';
                document.getElementById('footer-section').style.filter = 'none';
            });
        }
    }
}
handleMobileMediaQuery(mobileMediaQuery);

// handiling viewing and closing welcome note
document.getElementById('view-welcome-msg').addEventListener('click', () =>{
    document.getElementById('welcomeMsg-container').style.display = 'block';
    //document.getElementById('welcomeMsg-container').focus();
    document.getElementById('header').style.filter = 'blur(1.5px)';
    document.getElementById('aboutVisionMission-top-container').style.filter = 'blur(1px)';
    document.getElementById('top-service-container').style.filter = 'blur(1px)';
    document.getElementById('top-experience-container').style.filter = 'blur(1px)';
    document.getElementById('top-team-container').style.filter = 'blur(1px)';
    document.getElementById('top-contact-container').style.filter = 'blur(1px)';
    document.getElementById('footer-section').style.filter = 'blur(1px)';
});
document.getElementById('msg-close-menu').addEventListener('click', () =>{
    document.getElementById('welcomeMsg-container').style.display = 'none';
    document.getElementById('header').style.filter = 'none';
    document.getElementById('aboutVisionMission-top-container').style.filter = 'none';
    document.getElementById('top-service-container').style.filter = 'none';
    document.getElementById('top-experience-container').style.filter = 'none';
    document.getElementById('top-team-container').style.filter = 'none';
    document.getElementById('top-contact-container').style.filter = 'none';
    document.getElementById('footer-section').style.filter = 'none';
});
