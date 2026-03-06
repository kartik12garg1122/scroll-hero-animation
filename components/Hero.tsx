/* eslint-disable @next/next/no-img-element */
"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Hero(){

const carRef = useRef<HTMLImageElement | null>(null)
const titleRef = useRef<HTMLHeadingElement | null>(null)

useEffect(()=>{

gsap.from(titleRef.current,{
opacity:0,
y:80,
duration:1.2
})

const handleScroll = () => {

const scroll = window.scrollY

if (carRef.current) {
  gsap.to(carRef.current, {
    x: scroll * 0.4,
    rotation: scroll * 0.02,
    duration: 0.3
  })
}

}

window.addEventListener("scroll",handleScroll)

return ()=>window.removeEventListener("scroll",handleScroll)

},[])

return(

<section style={{
height:"100vh",
display:"flex",
flexDirection:"column",
alignItems:"center",
justifyContent:"center",
backgroundColor:"black",
color:"white",
position:"relative"
}}>

<h1 ref={titleRef} style={{
textAlign:"center",
fontSize:"60px",
letterSpacing:"8px"
}}>
WELCOME ITZFIZZ
</h1>

<div style={{
display:"flex",
gap:"60px",
marginTop:"30px",
textAlign:"center"
}}>

<div>
<h2>85%</h2>
<p>Performance Boost</p>
</div>

<div>
<h2>120%</h2>
<p>User Engagement</p>
</div>

<div>
<h2>3x</h2>
<p>Faster Experience</p>
</div>

</div>

<img
  ref={carRef}
  src="/download.jpg"
  alt="car"
  style={{
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "200px"
  }}
/>

</section>

)

}