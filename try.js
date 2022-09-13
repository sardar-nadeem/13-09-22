


const mySet= new Set([])

mySet.forEach(function(val){
    console.log(val)
})
mySet.forEach((pa)=>{
    console.log(pa);
})





mySet.forEach((pa)=>{
    document.getElementById('demo').innerHTML=pa;
})
mySet.delete('set')
mySet.forEach((pa)=>{
 
    console.log(pa)

})


console.log(mySet.size)



mySet.add('mobile')
mySet.add('phone')
mySet.add('marker')
mySet.add('pc')
mySet.add('cd')
mySet.add('dvd')
mySet.add('man')
var text=' '

for (let x of mySet.values ()) {
    document.getElementById('demo').innerHTML=(text+= x)
}


const iteam = new Map([
    ['tv',1,],
    ['pc',24,],
    ['pin',98],
    ['glass','chinee'],

    
])

console.log(iteam.has('glass'))

document.write(iteam.get('tv'))
document.write(iteam.get('pc'))
document.write(iteam.get('pin'))



console.log(iteam.get('tv'))
console.log(iteam.get('pc'))
console.log(iteam.get('pin'))
iteam.set('car','bmw')
var thename= 'asem';
iteam.set(thename,'asee')
iteam.set(23,78)
console.log(iteam.get('car'))
iteam.forEach((key,val)=>{
    console.log(val + ":" +  key)
})

for (let x of iteam.entries()) {
    console.log(x)
    
}











function myfunc(){
    const message=document.getElementById('themessage');
           
    let x = document.getElementById('thein').value;

    try {
         
        if(isNaN)  throw " number cant be upper case"
        if(x == ' ')throw "empty input box not allowed to destak bezani";
        if(isNaN(x)) throw "only number is viled";
        x = Number(x)
        if(x < 5) throw " it,s to small man don,t be stupid";
        if (x > 10) throw "bro what are u doing wtf"

    } catch (error) {
        message.innerHTML = error
    }
    finally{
        document.getElementById('thein').value = ' ';
    }
}

let x =1;

const message=document.getElementById('themessage');

try {
    x.toPrecision(500)
} catch (error) {
    message.innerHTML =error.name
    
}


