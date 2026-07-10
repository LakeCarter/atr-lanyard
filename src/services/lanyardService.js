export const saveNewLanyard = (newLanyard) =>{
    return fetch("http://localhost:8088/lanyard",{
        method:"POST",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify(newLanyard)
    }).then(res => res.json())
}

export const getAllLanyards = () =>{
    return fetch("http://localhost:8088/lanyard").then(res => res.json())
}