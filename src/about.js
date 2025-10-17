export {loadAbout}

function loadAbout()
{
    const content=document.querySelector('div#content');
    content.textContent="";
    const head=document.createElement('h1');
    head.textContent="About";
    content.appendChild(head);
}