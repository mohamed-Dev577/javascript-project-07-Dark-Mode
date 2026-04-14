let btn = document.getElementById("modeBtn");

let isDark = false;

btn.onclick = function(){

  if(isDark === false){
    document.body.classList.add("dark");
    btn.textContent = "Light Mode";
    isDark = true;
  } else {
    document.body.classList.remove("dark");
    btn.textContent = "Dark Mode";
    isDark = false;
  }

}