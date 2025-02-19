function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}

document.querySelectorAll('li').forEach(li=> {
    li.addEventListener("click",function(){
        this.style.color=getRandomColor();
        
    });
    
});
