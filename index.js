const loadData=async(searchPhone,data1)=>{


    const url=`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`

    const res=await fetch(url);

    const data=await res.json();

    dispalydata(data.data,data1)
}


const dispalydata=(data,data1)=>{


  console.log(data)
   const divInput=document.getElementById('divInput') 
   divInput.innerHTML=" "
   const showAllButtonid=document.getElementById('showAllButtonid')
   if(data1 &&   data.length>10)
   {
    data=data.slice(0,10)

    showAllButtonid.classList.remove('d-none')


   }

   else{
    showAllButtonid.classList.add('d-none')

   }
   
 

   const textdisplaynone=document.getElementById('textdisplaynone')

   if(data.length==0)
   {


    textdisplaynone.classList.remove('d-none')

   }


   else{
            textdisplaynone.classList.add('d-none')

   }
  data.forEach(phone=>{
    


    
    const div=document.createElement('div')
    div.classList.add('col')

    div.innerHTML=`
                        <div class="card p-5">
                            <img src="${phone.image
                            }" class="card-img-top" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">${phone.phone_name}</h5>
                              <p class="card-text"></p>

                              <button onclick="ShowAllDetails('${phone.slug}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              Show All Details
                              </button>

                            </div>
                          </div>
    
    `

    divInput.appendChild(div)


  })


  spineerloaddata(false)
}




const spineerloaddata=data=>{

      const spnieer=document.getElementById('spnieer')
      if(data)
      {
        spnieer.classList.remove('d-none')
      }
      else
      {
        spnieer.classList.add('d-none')
      }



}

document.getElementById('buttonId').addEventListener('click',function(){

  processData(10)



})
const processData=data1=>{

  spineerloaddata(true)
  const inputgivensearch=document.getElementById('inputgivensearch').value;
  loadData(inputgivensearch,data1)

}

const ShowAllDetails=id=>{

      const url=`https://openapi.programming-hero.com/api/phone/${id}`
      fetch(url)
      .then(res=>res.json())
      .then(btn=>displayShowAllDetails(btn.data))


}


const displayShowAllDetails=showdatabutton=>{

      console.log(showdatabutton.releaseDate)

      document.getElementById('exampleModalLabel').innerText=`${showdatabutton.name}`
    
      const modelbody=document.getElementById('modelbody')

      modelbody.innerHTML=" "
      console.log(modelbody)

      const div=document.createElement('div')
      div.innerHTML=`
      
      <img class="d-flex justify-content-center m-auto" src="${showdatabutton.image}" alt="">

      <h1>MainFeatures:</h1>
      <h6>Storage: ${showdatabutton.mainFeatures.storage}</h6>
      <h6>displaySize: ${showdatabutton.mainFeatures.displaySize}</h6>
      <h6>chipSet: ${showdatabutton.mainFeatures.chipSet}</h6>
      <h6>memory: ${showdatabutton.mainFeatures.memory}</h6>
      <h6>sensors: ${showdatabutton.mainFeatures.sensors}</h6>
      <h6>releaseDate: ${showdatabutton.releaseDate ? showdatabutton.releaseDate : "RleaseDate data not found" }</h6>
      
      
      
      `
      modelbody.appendChild(div)
    
    
    }




document.getElementById('showallbutton').addEventListener('click',function(){

  processData()


})


// loadData()