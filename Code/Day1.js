let str="programming"
let arr={}
let arrDuplicate={}
for(let i=0;i<str.length;i++){
    let data=str[i]
    if(arr[data]){
        arr[data] +=1
    }else{
        arr[data] =1
    }
}

for(let i in arr){
    if(arr[i] >1){
        arrDuplicate[i]=arr[i]
    }
}
console.log("All Element ", arr)
console.log("Duplicate ELement ",arrDuplicate)

//Output 
// All Element  { p: 1, r: 2, o: 1, g: 2, a: 1, m: 2, i: 1, n: 1 }
// Duplicate ELement  { r: 2, g: 2, m: 2 }