let lis = document.querySelectorAll("ul li");
let div = document.getElementsByClassName("experiment")[0];
if(window.localStorage.getItem("color")){
    /*add color form localstorage into div */
    div.style.backgroundColor=window.localStorage.getItem("color");
    /*remove class active from any element */
    lis.forEach((li)=>{
        li.classList.remove('active');
    });
    /*add class active into li that has color from localstorage */
    document.querySelector(`[data-color="${window.localStorage.getItem('color')}"]`).classList.add("active");
}
lis.forEach((list)=>{
    list.addEventListener('click',(e)=>{
        lis.forEach((li)=>{
            li.classList.remove("active");
        })
        e.currentTarget.classList.add("active");
        window.localStorage.setItem("color",e.currentTarget.dataset.color);
        div.style.backgroundColor=e.currentTarget.dataset.color;
    })
})