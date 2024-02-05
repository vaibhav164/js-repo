/**
 Learning Object Destructuring
 */

 const singersList={
    singer1:{
    name:'mohit chauhan',
    songList:['Nada parinde','sheher','kun faya kun'],
    },
    singer2:{
        name:'lucky Ali',
        songList:['Sham savere', 'Ek palka Jeena', 'Aa bhi ja', 'Kitni haseen Zindagani hai'] 
    },
    date:'34/21/3454',
    type:null,
    price:453
 }
//below is a demo for object destructuring
//  const {singer1,singer2} = singersList;

//  console.log(singer1.name, singer1.songList);
//  console.log(singer2.name, singer2.songList);


const {singer1, singer2, ...restData}= singersList;

console.log("rest data after destructuting",restData);
/**
 giving anem to the key values in Destructuring of Objects
 */

//  const {singer1.name:firstSinger, singer2.name:SecondSinger}=singersList;

//  console.log(firstSinger,SecondSinger);

