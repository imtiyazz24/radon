const info = '               Welcome To Radon Batch My Name Is Md Imtiyaz Ansari                        '

function trim(){
    let a = info.trim()
    console.log('trim '+a)
}

  function upperCase() {
  let b = info.toUpperCase()
  console.log('upperCase '+b)
}

function lowerCase() {
    let c = info.toLowerCase()
    console.log('lowerCase '+c)
    
}

module.exports.trim=trim
module.exports.upperCase=upperCase
module.exports.lowerCase=lowerCase
