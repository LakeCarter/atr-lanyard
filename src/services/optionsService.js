export const getBraidStyles = () => {
    return fetch("http://localhost:8088/braidStyle").then(res=>res.json())
}

export const getNumberOfBraidsOptions = () => {
    return fetch("http://localhost:8088/numberOfDrops").then(res=>res.json())
}

export const getNeckStyles = () => {
    return fetch("http://localhost:8088/neckStyle").then(res=>res.json())
}