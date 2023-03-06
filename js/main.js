let imgCon = document.querySelector(".imgs")
let prev = document.querySelector(".prev")
let next = document.querySelector(".next")
let bulletCon = document.querySelector(".bullets")
let count = 0

for(let i=0;i<50;i++){
  let img=document.createElement("img")
  img.src=`https://picsum.photos/id/${i}/300/200`
  imgCon.appendChild(img)
}
let imgs = document.querySelectorAll(".imgs img")
imgs[0].classList.add("active")
imgs.forEach((e, i)=>{
  let bullet = document.createElement("span")
  bullet.dataset.index=i
  bullet.innerText= i+1
  bulletCon.appendChild(bullet)
})
let bullets = document.querySelectorAll(".bullets span")
bullets.forEach((e, i, arr)=>{
  if(i==0 || i< 3){
    if(i==0){
      arr[48].classList.add("inline")
      arr[49].classList.add("inline")
      arr[0].classList.add("inline")
      arr[1].classList.add("inline")
      arr[2].classList.add("inline")
    }
  }
  e.onclick=()=>{
    count= i
    show()
  }
})
prev.onclick=()=>{
  if(count <= 0){
    count =bullets.length - 1
    show()
  }else{
    count--
    show()
  }
}
next.onclick=()=>{
  if(count >= imgs.length -1){
    count=0
    show()
  }else{
    count++
    show()
  }
}
let show =()=>{
  console.log(count)
  imgs.forEach((e, i)=>{
    e.classList.remove("active")
  })
  bullets.forEach((e, i, arr)=>{
    if(i<=count+2 && i>=count-2){
      e.classList.add("inline")
    }else{
      e.classList.remove("inline")
    }
  })
  imgs[count].classList.add("active")
}