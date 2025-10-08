export let imagebase64= ''

//image selector
const selectimage= document.getElementById("filechooser")
const postimage= document.getElementById("preview")


selectimage.addEventListener("change", function(){
    const file= selectimage.files[0]
    if(file){
        const reader= new FileReader()
        reader.onload = e => {
            imagebase64 = e.target.result
            postimage.src= imagebase64
            postimage.style.display="block"
        }
        reader.readAsDataURL(file)
        
    }else{
        postimage.src="spider-man-across.jpg"
    }
})


const addbtn = document.getElementById("post")

 addbtn.addEventListener("click", storeInPostsArray)
    function storeInPostsArray() {
            const storedPosts = JSON.parse(localStorage.getItem("postsArray")) || []
            const usernameInput = document.getElementById("username").value
            const postContentInput = document.getElementById('main-post').value
const imagprevsrc= document.getElementById("preview").src 
            if (usernameInput ==="" || postContentInput === "") {
                alert("Please fill in all fields")

            }
            else{
                storedPosts.push(
                    {
                        body: usernameInput,
                        username: postContentInput,
                        img: imagebase64,
                        date: new Date().toLocaleDateString('en-CA')
                    }
                )
                alert("Done!")
                localStorage.setItem("postsArray", JSON.stringify(storedPosts))

            }
        }
 

        


