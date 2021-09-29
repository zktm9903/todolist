function fetchTest(){
  //get
  fetch('http://localhost:3000')
  .then((response)=>(response.json()))
  .then((data)=>console.log(data))


  //posts
    fetch('http://localhost:3000',{
        method:"POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify({
          key : 'dfa',
          key1 : 'ddd',

        })
        }).then(response=>response.json())
        .then(data=>console.log(data))
        .catch(error=>console.log(error));
}

