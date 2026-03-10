function hexColors() {
    let colors = []
    for (let j = 0; j < 6; j++) {
        let str = '0123456789abcdef'
        let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    colors.push('#' + color)
}
return colors;
}

export default hexColors