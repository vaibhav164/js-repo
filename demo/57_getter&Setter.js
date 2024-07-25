//Getter and Setter
 class UserName{
    constructor(fName,lName, age,height){
        this.FirstName=fName
        this.LastName=lName
        this.age=age
        this.height=height
    }

    fullname(){
        return `${this.FirstName} ${this.LastName}`
    }
    get userDetail(){
        return `${this.FirstName} is ${this.height}feet tall and ${this.age} years Old`
    }
 }

 const person =new UserName('Vaishnav','tunna',12,8.6)
 /***************Remember that you cannot invoke calls without using new
  keywoard
  */

//  console.log(person.fullname());
 /*To call method fullName we need to add "()" but if we wanr to use it as
 person.full name we can add get keywoard before fullname method as i did
 in userDetail below you can see
 */
 
//  console.log(person.userDetail)

 //by setting we can use method of object as key as we get other keys


 /**********************************Setters */

 class Home{
    constructor(area, size,type,floor){
        this.locality= area
        this.size = size
        this.type = type
        this.floors = floor
    }

   get getHouseDetails(){
        return `House is in ${this.locality} of size ${this.size} and type ${this.type} has ${this.floors} floors`
    }
    set newDimensions(dimensions){
        const [locality,type]=dimensions.split(" ");
        this.locality=locality;
        this.type=type;
    }
 }

 const House1= new Home("Chennai",4600,'bunglow',5);

 console.log(House1.getHouseDetails)
 House1.newDimensions = 'Mumbai Appartment'
 console.log(House1.getHouseDetails)

 //Methods with set keyword in Object only take Single parameter which 
//  mostly as string