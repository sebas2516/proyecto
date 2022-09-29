// const API_URL='https://salty-temple-93564.herokuapp.com/api/v1/products'
const API_URL='http://localhost:5000/api/v1/products'
async function reload(){
    const res=await fetch(API_URL);
    const data=await res.json();
    console.log(data)
    const img1=document.getElementById('img1');
    const img2=document.getElementById('img2');
    const img3=document.getElementById('img3');
    img1.src=data[0].image; 
    img2.src=data[1].url;        
    img3.src=data[2].url;     
    img3.src=data[3].url;
    img3.src=data[4].url;
    img3.src=data[5].url;   
}

reload();