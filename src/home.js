export {loadPage}
import foodyimg from "./foody.jpeg";

function loadPage()
{
        
    const content=document.querySelector('div#content');
    const head=document.createElement('h1');
    const pic=document.createElement('img');
    const para=document.createElement('p');

    content.textContent="";
    head.textContent="Hey Foody";
    pic.src=foodyimg;
    para.textContent="The Best Restaurent in your city";

    content.appendChild(head);
    content.appendChild(pic);
    content.appendChild(para);
}