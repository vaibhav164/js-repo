var Stack = function(){
  this.count = 0;
  this.storage = {}

  this.push = function(val){
    this.storage[this.count]= val;
    this.count++
  }

  this.pop = function(){
    if(this.count == 0){
      return undefined
    }else {
      this.count--
      var result = this.storage[this.count];
      delete this.storage[this.count]
      return result
    }
  }

  this.size = function(){
    return this.count
  }
  this.peek = function(){
    return this.storage[this.count-1]
  }
  this.showArray = function(){
    let Value = Object.keys(this.storage).map(item=>{
      return this.storage[item]
    })
    return Value
  }
}

let StakE = new Stack();
StakE.push(5)
StakE.push(4)
StakE.push(3)
StakE.push(2)
console.log(StakE.showArray());
console.log(StakE.pop());
console.log("Peek____",StakE.peek())
console.log("Size__",StakE.size())
console.log(StakE.showArray());
