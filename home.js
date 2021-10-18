let news = document.getElementById("container");
//    a89c36665d6644ad9e157a0f9ca834dc 
function fetchNews(){
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=a89c36665d6644ad9e157a0f9ca834dc")
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
       let data = res.articles;
       console.log(data);
       showNews(data);
       
        
    })
    .catch((err)=>{
        console.log(err);
    })
    
}

function showNews(data){
    news.innerHTML = null
   
    data.forEach(({title,description,urlToImage,url})=>{
        let h2 = document.createElement('h2');
        let img = document.createElement("img");
        let p = document.createElement("p");
        let btn = document.createElement("button");
        img.src = urlToImage;
        img.style.width = "30%";
        img.style.height = "30%";
        p.innerText = description;
        h2.innerText = title;
        h2.style.marginTop = "30px";
        btn.innerText = "Read More";
        btn.onclick = ()=>{
            // details(url);
            window.location.href = url;
            console.log(url);
        };
        
        news.append(h2, img,p,btn);
    });
    
}

function details(data){
    window.location.href = "news.html";
            console.log(data)
}
function navigate(){
    window.location.href = "search.html";
}
fetchNews()