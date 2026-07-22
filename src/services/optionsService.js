export const getBraidStyles = () => {
    return fetch("http://localhost:8088/braidStyle").then(res=>res.json())
}

export const getNumberOfBraidsOptions = () => {
    return fetch("http://localhost:8088/numberOfDrops").then(res=>res.json())
}

export const getNeckStyles = () => {
    return fetch("http://localhost:8088/neckStyle").then(res=>res.json())
}

export const getBraidStylesById = (braidStyleId) => {
    return fetch(`http://localhost:8088/braidStyle?id=${braidStyleId}`).then(res=>res.json())
}

export const getNeckStylesById = (neckStyleId) => {
    return fetch(`http://localhost:8088/neckStyle?id=${neckStyleId}`).then(res=>res.json())
}