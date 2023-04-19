
let btn = document.getElementById('submit')
btn.addEventListener('click',Storage)
function Storage(event) {
    event.preventDefault();
    const name= document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password =document.getElementById('password').value;


  const obj={
  name,
  email,
  password
  }

  console.log(obj)
  axios.post("http://localhost:4000/user/signup",obj)
  .then((response) => {
     // showUserOnScreen(response.data.newExpenseDetails)
      console.log(response)
  }).catch((err) => {
   
      document.body.innerHTML =document.body.innerHTML + "<h4>Email Already Exist</h4>"
  })
}