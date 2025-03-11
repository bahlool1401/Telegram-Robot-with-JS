const form =document.querySelector('#form')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    var text= document.querySelector('#text').value;
    console.log("🚀 ~ form.addEventListener ~ text:", text);
    var token = '7878032273:AAEogWl6kdsxkDarCfu-E81maK_jKMnx3RY';
    var chat_id = '109784232';
    var apiUrl = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}`;
    const response = fetch (apiUrl).then(data => console.log(data))
    .catch(error => console.error(error));
    console.log("🚀 ~ form.addEventListener ~ response:", response)
})