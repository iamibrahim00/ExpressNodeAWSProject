let btn = document.getElementById('submit')
btn.addEventListener('click',Storage)
function Storage(event) {
    event.preventDefault();
    const Name= document.getElementById('name').value;
    const Email = document.getElementById('email').value;
    const Password =document.getElementById('password').value;


  const obj={
  Name,
  Email,
  Password
  }
  console.log(obj)
  axios.post("http://localhost:3000/user/signup",obj)
  .then((response) => {
      console.log(newExpenseDetails)
     // console.log(newExpenseDetails)
  }).catch(err => {
      document.body.innerHTML =document.body.innerHTML + "<h4>Something Went wrong </h4>"
  })

}