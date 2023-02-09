

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click",() => {
    dayNight.querySelector("i").classList.toggle("uil-sun");
    dayNight.querySelector("i").classList.toggle("uil-moon");
    document.body.classList.toggle("dark");
}
  )
window.addEventListener("load", () => {
if(document.body.classList.contains("dark"))
{
    dayNight.querySelector("i").classList.add("uil-sun");
}
else{
    dayNight.querySelector("i").classList.add("uil-moon");
}
})
