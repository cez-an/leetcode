/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = (data)=>{
    let stack = [];
    for(let i=0; i<data.length; i++){
        let char = data[i];
        if(char==='(' || char==="[" || char==="{"){
            stack.push(char);
        }else if(char===")" || char==="]" || char==="}"){
            if(stack.length===0){
                return false;
            }
            
            let top = stack.pop();
            
            if(char===")" && top!=="(" ||
               char==="]" && top!=="[" ||
               char==="}" && top!=="{"){
                   return false;
               }
        }
    }
   
    return !stack.length;
}