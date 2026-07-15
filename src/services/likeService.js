export const getLanyardLikes = (lanyardId) => {
  return fetch(`http://localhost:8088/likes?lanyardId=${lanyardId}`).then(
    (res) => res.json(),
  )
}

export const postNewLike = (likeObj) => {
  return fetch(`http://localhost:8088/likes`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(likeObj),
  }).then((res) => res.json())
}

export const removeLike = (likeId) =>{
  return fetch(`http://localhost:8088/likes/${likeId}`,{
    method:"Delete"
  }).then((res) => res.json())
}

export const getUsersLikedLanyards = (userId) =>{
    return fetch(`http://localhost:8088/likes?userId=${userId}&_expand=lanyard`).then(res => res.json())}