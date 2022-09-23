window.onload=()=>{
    let status = document.querySelector("#container-2")
    container1_display()
    container2_display();
    function container1_display() {
        let make_post = document.querySelector("#make-post")
        make_post.addEventListener("click",()=>{
            status.classList.add("pop")
        })
    }
    function container2_display() {
        let back_home = document.querySelector("#exit");
        let back_options = document.querySelector("#back");
        let cancel = document.querySelector("#cancel");
        let discard = document.querySelector("#discard");
    
        discard.addEventListener("click",()=>{
            status.classList.remove("pop")
            back_options.classList.remove("pop")
        })
        cancel.addEventListener("click",()=>{
            back_options.classList.remove("pop")
        })
        back_home.addEventListener("click",()=>{
            back_options.classList.add("pop")
        })
    }
}
