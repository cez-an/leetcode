/**
 * @param {number[][]} events
 * @return {number}
 */
var buttonWithLongestTime = function(events) {
    let map = new Map();
    for(let i=0; i<events.length; i++){
        if(i===0){
            map.set(events[i][0],events[i][1]);
            continue;
        }
        if(map.has(events[i][0])){
            if(map.get(events[i][0])>Math.abs(events[i][1]-events[i-1][1])){
                continue;
            }
        }
        map.set(events[i][0],Math.abs(events[i][1]-events[i-1][1]));
                
    }
    let largest = 0;
    for(let value of map.values()){
        if(value>largest) largest = value;
    }
    let smallest = Infinity;
    for(let [key,value] of map.entries()){
        if(value===largest){
            if(key < smallest) smallest = key;  
        }
    }
    return smallest;
};