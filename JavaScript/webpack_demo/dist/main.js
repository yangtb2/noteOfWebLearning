!async function(n,t,e){for(let o=0;o<n.length;o++){await e(n[o]);let l=(o+1)/n.length*100;t.style.width=l+"%",t.innerHTML=Math.round(l)+"%"}}([1,2,3,4,5],loading,(n=>new Promise((t=>{setTimeout((()=>{console.log(n),t()}),500+500*Math.random())}))));