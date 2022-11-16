        // Counter Program 
let countDown=setInterval(updateDown, 20);
        let down=0;
        function updateDown(){
            var countD= document.getElementById("counter-download");
            countD.innerHTML=++down;
            if(down===200)
            {
                clearInterval(countDown);
            }
        }

let countAct=setInterval(updateAct, 1);
        let act=0;
        function updateAct(){
            var countA= document.getElementById("counter-active");
            countA.innerHTML=++act;
            if(act===1000)
            {
                clearInterval(countAct);
            }
        }

let countClnt=setInterval(updateClnt, 50);
        let clnt=0;
        function updateClnt(){
            var countC= document.getElementById("counter-clients");
            countC.innerHTML=++clnt;
            if(clnt===80)
            {
                clearInterval(countClnt);
            }
        }

let countRtng=setInterval(updateRtng, 40);
        let rtng=0;
        function updateRtng(){
            var countR= document.getElementById("counter-rating");
            countR.innerHTML=++rtng;
            if(rtng===100)
            {
                clearInterval(countRtng);
            }
        }
            // Screenshot Carousel 
const panels = document.querySelectorAll('.panel')
        panels.forEach(panel => {
            panel.addEventListener('click', () => {
                removeActiveClasses()
                panel.classList.add('active')
                
               
            })
        
        })
        
        function removeActiveClasses() {
            panels.forEach(panel => {
                panel.classList.remove('active')
            })
        }  

window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
          if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("header").style.padding = "20px 10px";
            document.getElementById("header").style.boxShadow ="0 0 20px -10px #000";
            document.getElementById("header").style.background = "#000 linear-gradient(to right, #ff5f6d 0%, #ffb270 100%)";
          } else {
            document.getElementById("header").style.padding = "25px 10px";
            document.getElementById("header").style.boxShadow ="none";
            document.getElementById("header").style.background = "rgba(0, 0, 0, 0)";
          }
        }