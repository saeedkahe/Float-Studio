const ball = document.querySelector('.ball')
const dropDownAbout = document.querySelectorAll('.about>div>div div')
const imageOfAbout = document.querySelector('.about>div>div:nth-of-type(2)>figure>img')
const questionsDropDown = document.querySelectorAll('.questions>div>div:nth-of-type(2)>ul>li')
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
questionsDropDown.forEach((item)=>{
    item.addEventListener('click' , ()=>{
        const questionsDropDownDiv = item.querySelector('div')
     if(questionsDropDownDiv.style.height){
      questionsDropDownDiv.style.height = null
      questionsDropDownDiv.style.overflow='hidden'
      setTimeout(()=>{
        questionsDropDownDiv.style.display='none'
      },200)
      
     }else{
     
        item.style.height='auto'
        questionsDropDownDiv.style.display = 'block'
        questionsDropDownDiv.style.height = questionsDropDownDiv.scrollHeight+'px' 
     }
                
    })
})

