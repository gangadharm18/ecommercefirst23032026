window.onFormSubmit = (event) => {
  event.preventDefault();
  const productName=event.target.productName.value;

  const obj={
    "productName":productName
  }

  axios.post('http://localhost:3000'+"/api/products",obj)
  .then(res=>{console.log(res)})
};
