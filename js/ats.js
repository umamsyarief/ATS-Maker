const imageInput = document.querySelector("#imageFile");
const imageUpload = document.querySelector("#uploadBtn");
const img = document.querySelector("#imgOutput");

function btnInput(){
    imageInput.click();

}
imageInput.addEventListener("change", function(){
    const file = this.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = function(){
            const result = reader.result;
            img.src = result;
        }
        reader.readAsDataURL(file);
    }
})