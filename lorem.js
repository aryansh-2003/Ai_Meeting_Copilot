const s = "{[()]}"

    const map = new Map([
        [']','['],
        ['}','{'],
        [')','('],
    ])
    const stack = []
    let result;
    for(let i = 0 ; i < s.length-1 ; i++){
        const char = s.charAt(i)
        console.log(char,map.get(char),stack.length)
        if(map[char]){
            const top_element = stack.length > 0 ? stack.pop() : "#"
            
            if(top_element !== map.get(char)){
                result = "YES"
            }else{
                result =  "NO"
            }
        }else{
            stack.push(char)
        }
    }
    
    console.log(result)
