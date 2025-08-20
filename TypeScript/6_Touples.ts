//Touples is used in TS to define the squese of type of element in array in JS below is the example


let data :[number, string, boolean, string]

//Now TS will throw error if i shuffle the order of elements in data e.g.,

data = [3443,'dsfsf',false,'test'];

data = [344343, true, 'dsscc','ddtdg'];
//As you can see at L10 its giving error as its not matching to its touple

/**** Issue in touples in TS is that as below  as we can push any value to the data array even if we have defined its touples*/;
data.push("Test")
data.push(false)
data.push(43433434)

export {}