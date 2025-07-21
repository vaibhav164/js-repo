//set is same as array except it didn't have any repetetive element and the order of the elements is not defined

function mySet(){
    var Colleciton = []

    this.has = function(element){
        return Colleciton.indexOf(element) !== -1
    }

    this.values = function(){
        return Colleciton;
    }

    this.add = function(element){
        if(!this.has(element)){
            Colleciton.push(element)
            return true
        }
        return false
    }

    this.remove = function(element){
        if(this.has(element)){
            let index = Colleciton.indexOf(element);
            Colleciton.splice(index, 1);
            return true
        }
        return false
    }

    this.size = function(){
        return Colleciton.length
    }

    this.union = function(otherSet){
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(item=>{
            unionSet.add(item)
        })
        secondSet.forEach(item=>{
            unionSet.add(item)
        })
        return unionSet;
    }

    this.intersection = function(otherSet){
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach((element)=>{
            if(otherSet.has(element)){
                intersectionSet.add(element)
            }
        })
        return intersectionSet;
    }

    this.difference = function(otherSet){
        var differenceSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(item=>{
            if(!otherSet.has(item)){
                differenceSet.add(item)
            }
        })
        return differenceSet;
    }

    this.subSet = function(otherSet){
        var firstSet = this.values();

       return firstSet.every(item=>{
            otherSet.has(item)
        })

    }
}
var first = new mySet();
var second = new mySet();

first.add(1)
first.add(3)
first.add(5)
first.add(4)

second.add(2);
second.add(3);
second.add(4);
second.add(5);
second.add(6);

console.log(first.values())
console.log(second.values())
console.log(first.union(second).values())
console.log(first.intersection(second).values())
console.log(first.difference(second).values())