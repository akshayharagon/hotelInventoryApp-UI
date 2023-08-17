const band={
    bandName:'led zeppelin',
    famousSong:'stairway to heaven',
    year:1999,
    anotherSong:'kashmir'
}

// const {bandName, song}=band;
// console.log(bandName, song)

let {bandName:name, famousSong:song}=band;
console.log(name, ':', song)

let {bandName:name1, famousSong:song1, ...restProps}=band;

console.log(restProps)

