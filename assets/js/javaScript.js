const ball = document.querySelector('.ball')
const dropDownAbout = document.querySelectorAll('.about>div>div div')
const imageOfAbout = document.querySelector('.about>div>div:nth-of-type(2)>figure>img')
function mousePose(event){
   let mousePoseX = event.clientX
   let mousePoseY = event.clientY
    ball.style.top = mousePoseY+'px'
    ball.style.left = mousePoseX+'px'
}
document.querySelector('.banner').addEventListener('mousemove' , (event)=>{
   mousePose(event)
})

dropDownAbout.forEach((item)=>{
    item.addEventListener('click' , ()=>{
        const imageSrc = item.getAttribute('data-image')
        console.log(imageSrc)
        for(let i=0 ; i<dropDownAbout.length ; i++){
            dropDownAbout[i].style.backgroundColor = 'transparent'
            dropDownAbout[i].style.backdropFilter = 'none'
            dropDownAbout[i].querySelector('hgroup>p').style.display = 'none'
            dropDownAbout[i].querySelector('hgroup>p').style.height = null
        }
        item.style.backgroundColor = '#ffffff08'
        item.style.backdropFilter = 'blur(5px)'
        item.querySelector('hgroup>p').style.display = 'block'
        item.querySelector('hgroup>p').style.height = item.querySelector('hgroup>p').scrollHeight + 'px'
        imageOfAbout.setAttribute('src' , imageSrc)
    })
})

