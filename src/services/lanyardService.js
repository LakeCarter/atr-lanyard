export const saveNewLanyard = (newLanyard) =>{
    return fetch("http://localhost:8088/lanyards",{
        method:"POST",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify(newLanyard)
    }).then(res => res.json())
}

export const getAllLanyards = () =>{
    return fetch("http://localhost:8088/lanyards").then(res => res.json())
}

export const getLanyardsById = (id) =>{
    return fetch(`http://localhost:8088/lanyards?id=${id}&_expand=user`).then(res => res.json())
}

export const saveEditedLanyard = (editedLanyard) => {
    return fetch(`http://localhost:8088/lanyards/${editedLanyard.id}`,{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(editedLanyard)

    }).then(res => res.json())
}

export const deleteLanyard = (lanyardId) =>{
    return fetch(`http://localhost:8088/lanyards/${lanyardId}`,{
        method:"Delete"
    }).then(res => res.json())
}

export const getLanyardsByUserId = (userId) =>{
    return fetch(`http://localhost:8088/lanyards?userId=${userId}`).then(res => res.json())}

export const getFeatured = () =>{
    return fetch(`http://localhost:8088/lanyards?featured=true`).then(res => res.json())}