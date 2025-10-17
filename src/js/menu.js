export {loadMenu}

function loadMenu()
{
    const content=document.querySelector('div#content');
    content.textContent="";
    const head=document.createElement('h1');
    head.textContent="Menu";
    content.appendChild(head);
}