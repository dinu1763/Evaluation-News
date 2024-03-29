let results = document.getElementById("results");
    function search(){
        let query = document.getElementById("query").value;
        fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=a89c36665d6644ad9e157a0f9ca834dc`)
        .then((res)=>{
            return res.json()
        })
        .then((res)=>{
            let data = res.articles;
            showSearch(data);
            console.log(data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    function showSearch(data){
        results.innerHTML = null
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
           
            window.location.href = url;
            console.log(url);
        };
        results.append(h2, img,p,btn);
        });
    }