const currentLink = window.location.href;
const linker = document.getElementsByClassName("ill");
const form = document.getElementsByTagName("form")[0];

const apiCaller = link =>{
    return new Promise((resolve, reject)=>{
        const request = new XMLHttpRequest();
        request.addEventListener("readystatechange",()=>{
            if(request.readyState === 4 && request.status === 200){
                resolve(JSON.parse(request.responseText));
            }else{
                reject("No data found");
            }
        });
        request.open("GET",link);
        request.send();
    });
}

apiCaller("https://simple-swift-api.herokuapp.com/users").then(data => console.log(data)).catch(error => console.log(error));

linker[0].addEventListener("click",e => window.location.href = `${currentLink}users`);
linker[2].addEventListener("click",e => window.location.href = `${currentLink}users/6eea0d5b-c5db-4fea-99bb-6f31dce4ff3a`);

//
form.addEventListener("submit",e =>{
    //e.preventDefault();
    window.location.href = `${currentLink}users`
});