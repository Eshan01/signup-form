const para=document.querySelectorAll('.err');
const form=document.querySelector('form');

const regExp={
    firstName:/^\w+$/,
    lastName:/^\w+$/,
    email:/^([\w\d-\.]+)@([a-zA-Z\d-]{2,8})\.([a-z]{2,,8})(\.[a-z]{2,6})?$/,
    password:/^[.]+$/
};

function Validate(field,regex){
    if(field===""){
        field.nextElementSibling.classList.add('invalid');
        field.style.border='3px solid hsl(0, 100%, 74%)';
    }
    if(field==="email" && regex.test(field)===false){
        field.style.border='3px solid hsl(0, 100%, 74%)';
        field.nextElementSibling.textContent="Looks like this is not an email";
        // field.attributes.placeholder.value=`&#xF332;`;
    }
}


form.addEventListener('submit',event=>{
    event.preventDefault();
    console.log(event.target)
    Validate();
});

onload= ()=> {
    document.querySelectorAll('input').forEach(input_field=>{
        input_field.value='';
    });
}