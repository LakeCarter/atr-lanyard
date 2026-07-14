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

export const getLanyardsById = (id) =>{
    return fetch(`http://localhost:8088/lanyard?id=${id}&_expand=user`).then(res => res.json())
}

export const saveEditedLanyard = (editedLanyard) => {
    return fetch(`http://localhost:8088/lanyard/${editedLanyard.id}`,{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(editedLanyard)

    }).then(res => res.json())
}

export const deleteLanyard = (lanyardId) =>{
    return fetch(`http://localhost:8088/lanyard/${lanyardId}`,{
        method:"Delete"
    }).then(res => res.json())
}

export const getLanyardsByUserId = (userId) =>{
    return fetch(`http://localhost:8088/lanyard?userId=${userId}`).then(res => res.json())}