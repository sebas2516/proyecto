import fetch from 'node-fetch';
const url= 'ttps://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${param}'
fetch(url)
.then(res=>res.json())
.then(data=>{
    let vec=Object.values(data);
    vec.forEach(element => {
        console.log(element);
    }
    );
})


for (let i=0; i<vec.length; i++) {
    for (let j=0; j<vec[3].length; j++) {
        console.log(vec[3][j]).name};

}


async function loader(){
    const res=await fetch(url);
    const data=await res.json();
    console.log('.......................')
    console.log(data);
}

loader()