type Numberarr = number[];
//we cannot do with interface here 
function arrays(arry: Numberarr): number {
    let max = 0;
    for (let i = 0; i < arry.length; i++) {
        if (arry[i] > max) {
            max = arry[i];
        } 
    }
    return max;
}

console.log(arrays([1, 2, 3])); // Output should be 3


interface user{
    firstname:string,
    lastname:string;
}
function filter(sher:user[]){
    let max = 0;
        for (let i = 0; i < filter.length; i++) {
            if (filter[i] > max) {
                max = filter[i];
            } 
        }
        return max;
}

const users:user[]=[
    // {firstname:"shubham",lastname:"varshney"},
]
console.log(users)


interface user{
    age:number;
}

interface Manager extends user{
    name:string
}
interface Employe extends user{
    name:string
}

