var images = ['https://semprefuigeek.com.br/wp-content/uploads/2022/04/Naruto-Modo-Barion.jpg',
'https://sm.ign.com/ign_br/screenshot/default/naruto-shippuden_f134.png',
'https://www.animeunited.com.br/oomtumtu/2022/05/image-112.png',
'https://i.pinimg.com/originals/3a/52/f6/3a52f6174f3c1a48c66af4d71020766f.png'

];

const { el, img, injectImage } = {
    el: document.querySelector('#root'),
    img: images,
    
    injectImage(count) {
        el.innerHTML = `<img src="${img[0]}" >` // default
        el.addEventListener('click', () => {
            count = count + 1
            for (var i = 1; i < img.length; i++) {
                if (count >= img.length) {
                    return el.innerHTML = `<img src="${img[count-=count] }"  >`    
                }
               return el.innerHTML = `<img src="${img[count]}" >`
            }
        }) 

    }
}

const init = () => {
    injectImage(0)
}

init()