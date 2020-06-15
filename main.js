const btnBox = document.querySelector('.btn-box')

function addTransform(item, value) {
    item.style.transform = `skewX(40deg) translateX(${value}px)`
}

function mouseEvent(styleValues, animValue) {
    const values = styleValues
    for (let i = 0; i < btnBox.children.length; ++i) {
        if (i === 1) {
            btnBox.children[1].style.animation = animValue || 'bounceIn 1s infinite'
            continue
        } else {
            addTransform(btnBox.children[i], values[i])
        }
    }
}

btnBox.addEventListener('mouseover', () => {
    mouseEvent([135, null, -135], 'none')
})
btnBox.addEventListener('mouseout', () => {
    mouseEvent([0, null, 0])
})

btnBox.addEventListener('click', () => {
    btnBox.classList.add('close')
    let timer = 300
    for (let i = 0; i < 2; i++) {
        setTimeout(() => {
            switch (i) {
                case 0: 
                    btnBox.remove()
                    timer += 100
                    break
                case 1: 
                    main()
                    break
            }
        }, timer)
    }
})

const letters = document.querySelectorAll('.letters li'),
code = document.querySelector('code')

function opacityOne(index) {
    letters[index].classList.add('opacity-one')
}

function main() {
    letters[0].parentElement.classList.add('appear')

    let timer = 300
    opacityOne(0)
    setTimeout(() => {
        letters[0].style.transform = 'scale(1)'
    }, timer)
    timer *= 3

    const classNames = ['top', 'right', 'bottom', 'left']
    let index = 0
    opacityOne(1)
    setTimeout(() => {
        let classAdd = setInterval(() => {
            if (index <= 3) {
                letters[1].classList.add(classNames[index])
                ++index
            } else {
                clearInterval(classAdd)
                letters[1].classList.add('bg-n-color')
                index = 0
            }
        }, 200)
    }, timer)
    timer += timer * 2

    setTimeout(() => {
        write('document.write("a")', 2)
    }, timer)
    timer += timer * 1.8

    setTimeout(() => {
        opacityOne(3)
    }, timer)
    timer += 300

    setTimeout(() => {
        code.textContent = '>  '
        write('npm install k.js', 4)
    }, timer)
    timer += timer * 0.5

    setTimeout(() => {
        opacityOne(5)
    }, timer)
    timer += 400

    setTimeout(() => {
        letters[0].parentElement.classList.add('anim')
    }, timer)
}

function write(value, ind) {
    code.classList.add('open')
    let text = value.split('')
    let index = 0
    let writor = setInterval(() => {
        if (index <= text.length - 1) {
            code.textContent += text[index]
            ++index
        } else {
            clearInterval(writor)
            opacityOne(ind)
            setTimeout(() => {
                code.classList.remove('open')
            }, 200)
        }
    }, 200)
}