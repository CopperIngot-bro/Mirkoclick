//--RUN THIS IN JS COMPILER AND VIEW CONSOLE TO GET A VALUE
function getDailyDigitsSimple() {
  const now = new Date();
  
  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  
  const seed = day + month*100 + year*10000;

  let state = seed;
  
  function nextDigit() {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return Math.abs(state) % 10;
  }

 
  nextDigit();
  nextDigit();
  nextDigit();
  const d4 = nextDigit();

  return { d4 };
}

const { d4 } = getDailyDigitsSimple();
console.log(d4);
