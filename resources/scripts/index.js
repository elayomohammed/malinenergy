







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
});
document.getElementById('close-menu').addEventListener('click', () =>{
    document.getElementById('nav-container').style.display = 'none';
    document.getElementById('close-menu').style.display = 'none';
    document.getElementById('open-menu').style.display = 'inline';
});