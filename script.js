const form = document.getElementById('myForm')
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    //Get data from the form
    let formData =new FormData(form);
    
    let email = formData.get('email')
    let result = document.getElementById('success')
    if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gm)){
        alert("Try again!");
        return;
    }
        
    result.innerHTML= `<span><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FF6A3A"/><stop offset="100%" stop-color="#FF527B"/></linearGradient></defs><g fill="none"><circle cx="32" cy="32" r="32" fill="url(#a)"/><path stroke="#FFF" stroke-width="4" d="m18.286 34.686 8.334 7.98 19.094-18.285"/></g></svg></span>`
    result.innerHTML = `<h1>Success ${email}</h1>`
    
});


