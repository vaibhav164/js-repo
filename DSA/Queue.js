
function Queue (){
    collection = [];

    this.print = function(){
        console.log(collection)
    }
    this.enqueue = function(item){
        collection.push(item)
    }
    this.dequeue =function(){
        return collection.shift()
    }
    this.front = function(){
        return collection[0]
    }
    this.size = function(){
        return collection.length;
    }
    this.isEmpty = function(){
        return (collection.length === 0)
    }
}


function PriorityQueue (){
    var colleciton = [];
    this.printCollection = function(){
        console.log(colleciton);
    }
    this.isEmpty = function(){
        return (colleciton.length === 0)
    }
    this.enqueue = function(element){
        if(this.isEmpty()){
            colleciton.push()
        }else {
            var added = false;
            for(var i =0; i<colleciton.length; i++){
                if(element[1] < colleciton[i][1]){
                    colleciton.splice(i, 0 , element)
                    added = true;
                    break;
                }
            }
            if(!added){
                colleciton.push(element)
            }
        }
    }
    this.dequeue =function(){
        var value = colleciton.shift();
        return value[0]
    }
    this.front = function(){
        return colleciton[0]
    }
    this.size = function(){
        return colleciton.length;
    }
}