let axios = {
    get() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    G: 2,
                    g3: 4,
                    message: "YoYoyo"
                });
            }, 3000)
        });

    }
};


let promise = axios.get()

promise.then((data) => {
    return data.message
}).then((data) => console.log(data))

/*
let pr2 = promise.then();
let pr3 = pr2.then();
let pr4 = pr3.then()*/

const greetings = () => console.log('hello, world')

greetings()


let fetch = (url) => {
    return new Promise((res, rej) => {
        switch (url) {
            case "google": {
                setTimeout(() => {
                    res({data: "from google"});
                }, 2000)
                break;
            }
            case "microsoft": {
                setTimeout(() => {
                    res({data: "from microsoft"})
                }, 3000)
                break;
            }
            case "it-kamasutra": {
                setTimeout(() => {
                    res({data: "it-kamasutra"})
                }, 4000)
                break;
            }
        }
    })
}


let makeRequests = () => {
    fetch("microsoft")
        .then(data => {
            console.log(data)
            return fetch("google")
        })
        .then(data => {
            console.log(data)
            return fetch("it-kamasutra")
        })
        .then(data => console.log(data));
}

let makeRequests2 = async () => {
    let dataFromMicrosoft = await fetch("microsoft")
    console.log(dataFromMicrosoft)
    let dataFromGoogle = await fetch("google")
    console.log(dataFromGoogle)
    let dataFromItKamasutra = await fetch("it-kamasutra")
    console.log(dataFromItKamasutra)
}

let makeRequestAtTheOneMoment =  async () => {
/*  let p1 = fetch("microsoft");
    let p2 = fetch("google");
    let p3 = fetch("it-kamasutra");
    Promise.all([p1,p2,p3]).then(data => console.log("all finished"));*/

    let promises = [fetch("microsoft"),fetch("google"),fetch("it-kamasutra")]
    Promise.all(promise)
    
    let data = await Promise.all(promises)
    console.log(data)
}

/*makeRequests2();*/

makeRequestAtTheOneMoment();