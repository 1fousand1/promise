/*console.log(1);
let pr = new Promise((res, rej) => {
    res("Alex")
    console.log(2);
})
pr.then(value => console.log(3));
pr.then(value => console.log(4));
console.log(5)

Promise.all([Promise.resolve(3), Promise.resolve(5)])
    .then((res) => {
        console.log(res[0])
        console.log(res[1])
    })*/
/*

let pr = new Promise((res, rej) => {
    rej("Alex")

})

pr.then(() => console.log(1))
    .catch(() => console.log(2))
    .catch(() => console.log(3))
    .then(() => console.log(4))
*/

/*async function yo(){
    return "yo"
}


(async function(){
    let result = await yo()
    console.log(result)
})();*/


/*
let pr = new Promise((res,rej)=>{
    res(0)
})

pr
    .then(res => 1)
    .then(res => Promise.resolve(res + 2))
    .then(res => Promise.resolve(res - 1))
    .then(res => res + 2)
    .then(res => console.log(res))*/

/*
let pr = new Promise((res, rej) => {
    rej("Oleg")
})

pr.then((r1) => {}, (r2) => {})
*/


let pr = new Promise((res, rej) => rej("Sasha"));

(async function(){
    try {
        let res = await pr;
        console.log(res)
    } catch (error) {
        console.log()
    }
})();

console.log(console.log, 1000, 10);
setInterval(console.log, 1000, 10)

window.addEventListener("unhandledrejection", (error)=>{
    console.error(error)
});