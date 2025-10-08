// Import the functions you need from the SDKs you need
  


  

  async function loadPagePosts() {
    const postsList =  document.querySelector(".container")
    const snapshot= await get(ref(db , "posts"))
    if(snapshot.exists()){
        const data= snapshot.val()

        Object.entries(data).forEach(([id, note]) => {
            const postdiv= document.createElement("div")
            postdiv.classList='card'
            postdiv.innerHTML=`
            <img src="${note.imagePreviewSrc}" width="400px">
            <div class="cardtext">
                <h3>${note.usernameInput}</h3>
                <p>${note.postContentInput}</p>
            </div>
            <div class="timestamp">
                <span id="dot"></span>
                <p2><span class="time">${note.createdAt}</span></p2>
             </div>

            `
            postsList.appendChild(postdiv)
        })
    }
  }
loadPagePosts()
