import { useEffect } from 'react'
import { styles } from '../styles';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

const HackerText = () => {
  useEffect(() => {
    document.querySelector("#hacker_text").addEventListener("mouseover", (e) => {
      let iteration = 0;
      
      clearInterval(interval);
      
      interval = setInterval(() => {
        console.log(e.target.value)
        e.target.innerText = e.target.innerText
          .split("")
          .map((letter, index) => {
            if(index < iteration) {
              return e.target.dataset.value[index];
            }
          
            return letters[Math.floor(Math.random() * 26)]
          })
          .join("");
        
        if(iteration >= e.target.dataset.value.length){ 
          clearInterval(interval);
        }
        
        iteration += 1 / 5;
      }, 50);
    })
  })

  return (
    <h1 className={`${styles.heroHeadText} text-secondary`}>
      Hi, I'm <span id='hacker_text' data-value='Jerry' className='text-blue-out'>Jerry</span>
    </h1>
  )
}

export default HackerText