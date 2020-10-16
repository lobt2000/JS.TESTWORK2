// Створюю зміну для вичислення кількості кліку на кнопку bold
let count = 0
// Створюю зміну для форми font
const font = document.forms.font
// Створюю зміну для форми sign
const sign = document.forms.sign

// накладаю подію клік на кнопку bold , де завдяки умовам вичисляється кількість кліків на неї, щоб при 1 кліку включати її, а при 2 виключати
// Кнопка cross робить текст жирним
$('.bold').click(function () {
    ++count
    if (count == 1) {
        $('.conteiner').css({
            fontWeight: 'bolder'
        })

    } else {
        $('.conteiner').css({
            fontWeight: 'normal'
        })
        count = 0
    }
})
// Створюю зміну для вичислення кількості кліку на кнопку italic
let italic = 0
// Створюю зміну для вичислення кількості кліку на кнопку under
let under = 0
// Створюю зміну для вичислення кількості кліку на кнопку cross
let cross = 0
// накладаю подію клік на кнопку italic , де завдяки умовам вичисляється кількість кліків на неї, щоб при 1 кліку включати її, а при 2 виключати
// Кнопка italic робить текст похилим
$('.italic').click(function () {
    ++italic
    if (italic == 1) {
        $('.conteiner').css({
            fontStyle: 'italic'
        })
    } else {
        $('.conteiner').css({
            fontStyle: 'normal'
        })
        italic = 0
    }
})
// накладаю подію клік на кнопку underline , де завдяки умовам вичисляється кількість кліків на неї, щоб при 1 кліку включати її, а при 2 виключати
// Кнопка cross робить текст підкресленим
$('.underline').click(function () {
    ++under
    if (under == 1) {
        $('.conteiner').css({
            textDecorationLine: 'underline'
        })
    } else {
        $('.conteiner').css({
            textDecorationLine: 'inherit'
        })
        under = 0
    }
})
// накладаю подію клік на кнопку cross , де завдяки умовам вичисляється кількість кліків на неї, щоб при 1 кліку включати її, а при 2 виключати
// Кнопка cross робить текст викресленим
$('.cross').click(function () {
    ++cross
    if (cross == 1) {
        $('.conteiner').css({
            textDecorationLine: 'line-through'
        })
    } else {
        $('.conteiner').css({
            textDecorationLine: 'inherit'
        })
        cross = 0
    }
})
// накладаю подію клік на кнопку left
// Кнопка left вирівнює текст по лівій стороні
$('.left').click(function () {
    $('.conteiner').css({
        textAlign: 'left'
    })
})
// накладаю подію клік на кнопку right
// Кнопка right вирівнює текст по правій стороні

$('.right').click(function () {
    $('.conteiner').css({
        textAlign: 'right'
    })
})
// накладаю подію клік на кнопку center
// Кнопка center вирівнює текст по центру
$('.center').click(function () {
    $('.conteiner').css({
        textAlign: 'center'
    })
})
// накладаю подію зміни на кнопку fontFamily
// Кнопка fontFAmily змінює шрифт тексту 
$('#fontFamily').change(function () {
    $('.conteiner').css({
        fontFamily: $(this).val()
    })
})
// накладаю подію клік на кнопку palit
// При кліку на palit появляється окремий блок
$('.palit').click(function () {
    $('.color').css({
        display: 'flex'
    })
    $('body').css({
        backgroundColor: 'lightgray'
    })
})
// накладаю подію клік на кнопку hrest
// При кліку на hrest закриваються окремі блоки
$('.hrest').click(function () {
    $('.color').css({
        display: 'none'
    })
    $('.bcolor').css({
        display: 'none'
    })
    $('body').css({
        backgroundColor: 'white'
    })
    $('.tableChoose').addClass('hide')
    $('.chooseListOl').addClass('hide')
    $('.chooseListUl').addClass('hide')
    $('textarea').css({
        backgroundColor: 'white'
    })
})

// накладаю подію клік на блок .colorBlock
// При кліку на певний елемент перевіряється чи він є дитиною цього блоку і витаягується backgroundColor цього елемента і передається в колір тексту блоку conteiner
$('.colorBlock').click(function () {
    for (let i = 0; i < document.querySelector('.colorBlock').children.length; i++) {
        if (event.target == document.querySelector('.colorBlock').children[i]) {
            $('.conteiner').css({
                color: `${event.target.style.backgroundColor}`
            })
        }
    }
})

$('.img').click(function () {
    $('.bcolor').css({
        display: 'flex'
    })
    if (document.querySelector('.colorBut').classList.contains('active')) {
        $('.bcolorBlock').css({
            display: 'flex'
        })
        // $('.colorBut').addClass('active')
        $('.imgBlock').css({
            display: 'none'
        })
        $('.imgBut').removeClass('active')
        $('.fileBlock').css({
            display: 'none'
        })
        $('.fileBut').removeClass('active')
    } else if (document.querySelector('.imgBut').classList.contains('active')) {
        $('.bcolorBlock').css({
            display: 'none'
        })
        $('.colorBut').removeClass('active')

        $('.imgBlock').css({
            display: 'flex'
        })
        $('.imgBut').addClass('active')

        $('.fileBlock').css({
            display: 'none'
        })
        $('.fileBut').removeClass('active')
    } else if (document.querySelector('.fileBut').classList.contains('active')) {
        $('.bcolorBlock').css({
            display: 'none'
        })
        $('.colorBut').removeClass('active')

        $('.imgBlock').css({
            display: 'none'
        })
        $('.imgBut').removeClass('active')

        $('.fileBlock').css({
            display: 'flex'
        })
        $('.fileBut').addClass('active')
    }
    $('body').css({
        backgroundColor: 'lightgray'
    })
})
$('.choise').click(function () {
    for (let i = 0; i < document.querySelectorAll('a').length; i++) {
        if (event.target == document.querySelectorAll('a')[0]) {
            $('.bcolorBlock').css({
                display: 'flex'
            })
            $('.colorBut').addClass('active')
            $('.imgBlock').css({
                display: 'none'
            })
            $('.imgBut').removeClass('active')
            $('.fileBlock').css({
                display: 'none'
            })
            $('.fileBut').removeClass('active')
        } else if (event.target == document.querySelectorAll('a')[1]) {
            $('.bcolorBlock').css({
                display: 'none'
            })
            $('.colorBut').removeClass('active')

            $('.imgBlock').css({
                display: 'flex'
            })
            $('.imgBut').addClass('active')

            $('.fileBlock').css({
                display: 'none'
            })
            $('.fileBut').removeClass('active')

        } else if (event.target == document.querySelectorAll('a')[2]) {
            $('.bcolorBlock').css({
                display: 'none'
            })
            $('.colorBut').removeClass('active')

            $('.imgBlock').css({
                display: 'none'
            })
            $('.imgBut').removeClass('active')

            $('.fileBlock').css({
                display: 'flex'
            })
            $('.fileBut').addClass('active')
        }
    }
})
// Витягую урлю з файлового інпута і передаю значення урли в бекграунд колір conteiner
let file = document.querySelector('.file')
file.addEventListener('change', function (event) {
    let urlImage = URL.createObjectURL(event.target.files[0])
    document.querySelector('.conteiner').style.backgroundImage = `url(${urlImage})`
    document.querySelector('.conteiner').style.backgroundColor = `none`
})
// накладаю подію клік на блок .bcolorBlock
// При кліку на певний елемент перевіряється чи він є дитиною цього блоку і витаягується backgroundColor цього елемента і передається в backgroundColor блоку conteiner
$('.bcolorBlock').click(function () {

    for (let i = 0; i < document.querySelector('.bcolorBlock').children.length; i++) {
        if (event.target == document.querySelector('.bcolorBlock').children[i]) {
            $('.conteiner').css({
                backgroundColor: `${event.target.style.backgroundColor}`,
                backgroundImage: `none`
            })
        }
    }
})
// накладаю подію клік на блок .bcolorBlock
// При кліку на певний елемент перевіряється чи він є дитиною цього блоку і витаягується backgroundImage цього елемента і передається в backgroundImage блоку conteiner
$('.imgBlock').click(function () {

    for (let i = 0; i < document.querySelector('.imgBlock').children.length; i++) {
        if (event.target == document.querySelector('.imgBlock').children[i]) {
            $('.conteiner').css({
                backgroundImage: `${event.target.style.backgroundImage}`,
                backgroundColor: 'none'
            })
        }
    }
})
// накладаю подію клік на кнопку imgFamily
// При кліку на imgFamily появляється окремий блок
$('.imgFamily').click(function () {
    $('.hidetext').removeClass('hide')
    $('.hidesize').addClass('hide')
})
// накладаю подію клік на блок .hidetext
// При кліку на певний елемент перевіряється чи він є дитиною цього блоку і витаягується textContent цього елемента і передається в font-family блоку conteiner
$('.hidetext').click(function () {

    for (let i = 0; i < document.querySelector('.hidetext').children.length; i++) {
        if (event.target == document.querySelector('.hidetext').children[i]) {
            $('.conteiner').css({
                'font-family': `${event.target.textContent}`
            })
            $('.hidetext').addClass('hide')
        }
    }
})
// накладаю подію клік на кнопку imgSize
// При кліку на imgSize появляється окремий блок
$('.imgSize').click(function () {
    $('.hidesize').removeClass('hide')
    $('.hidetext').addClass('hide')
})
// накладаю подію клік на блок .hidesize
// При кліку на певний елемент перевіряється чи він є дитиною цього блоку і витаягується textContent цього елемента і передається в font-size блоку conteiner
$('.hidesize').click(function () {

    for (let i = 0; i < document.querySelector('.hidesize').children.length; i++) {
        if (event.target == document.querySelector('.hidesize').children[i]) {
            $('.conteiner').css({
                'font-size': `${event.target.textContent}`
            })
            $('.hidesize').addClass('hide')
        }
    }
})
// накладаю подію клік на кнопку lock
// При кліку на lock появляється окремий блок 
$('.lock').click(function () {
    $('.signIn').removeClass('hide')
    $('body').css({
        backgroundColor: 'lightgray'
    })
})
// накладаю подію клік на блок .signBut
// При кліку на .signBut перевіряється чи правильно ввелися поля для паролю і логіна
$('.signBut').click(function () {
    if ($('#login').val() == 0 && $('#pass').val() == 0) {
        sign.login.style.borderColor = 'red';
        sign.pass.style.borderColor = 'red';
        $('.empty').removeClass('hide')
        $('.wrong').addClass('hide')
    } else if (login.value == 'admin' && pass.value == 'admin') {
        $('body').css({
            backgroundColor: 'white'
        })
        document.querySelector('.signIn').classList.add('hide')
        document.querySelector('.unlock').classList.remove('hide')
        document.querySelector('.lock').classList.add('hide')
        $('.add').css({
            backgroundColor: ' rgb(230, 230, 230)'
        })
        document.querySelector('.add').disabled = false
        sign.login.value = '';
        sign.pass.value = '';
    } else {
        $('.wrong').removeClass('hide')
        $('.empty').addClass('hide')
    }
})
// накладаю подію клік на кнопку unlock
// При кліку на unlock появляється окремий блок 
$('.unlock').click(function () {
    $('.signOut').removeClass('hide')
    $('body').css({
        backgroundColor: 'lightgray'
    })
})
// накладаю подію клік на кнопку cancel
// При кліку на cancel окремий блок зникає без змін
$('.cancel').click(function () {
    $('body').css({
        backgroundColor: 'white'
    })
    $('.signOut').addClass('hide')
})
// накладаю подію клік на кнопку signOutBut
// При кліку на signOutBut окремий блок зникає і кнопки unlock i lock міняються місцями 
$('.signOutBut').click(function () {
    $('body').css({
        backgroundColor: 'white'
    })
    $('.signOut').addClass('hide')
    document.querySelector('.add').disabled = true
    document.querySelector('.unlock').classList.add('hide')
    document.querySelector('.lock').classList.remove('hide')
    $('.add').css({
        backgroundColor: ' rgb(197, 190, 190)'
    })
})
// накладаю подію клік на кнопку add
// При кліку на кнопку add міняється хедер - там появляється 4 кнопки і міняється вміст контейнера - там появляється текстареа
$('.add').click(function () {
    $('.addChange').removeClass('hide')
    $('.fontChange').addClass('hide')
    $('.textContent').addClass('hide')
    $('.editContent').removeClass('hide')
    document.querySelector('textarea').value = document.querySelector('.textContent').innerHTML
})
// накладаю подію клік на кнопку add
// При натисканні на save відбувається передача данних з текстареа в блок textContent і йде зміна вмісту хедера
$('.save').click(function () {
    $('.addChange').addClass('hide')
    $('.fontChange').removeClass('hide')
    $('.textContent').removeClass('hide')
    $('.editContent').addClass('hide')
    document.querySelector('.textContent').innerHTML = document.querySelector('textarea').value
})
// створюю зміну для форми table
const table = document.forms.table
// накладаю подію клік на кнопку addTable
// При кліку на addTable появляється окремий блок з формою
$('.addTable').click(function () {
    $('.tableChoose').removeClass('hide')
    $('body').css({
        backgroundColor: 'lightgray'
    })
    $('textarea').css({
        backgroundColor: 'lightgray'
    })
})
// Створюю змінну з регулярним виразом
let reg = /^[0-9]{1,}$/;
// Накладаю подію клік на createTable
// При кліку на цю кнопку запусткається процес перевірок на правильність вводу і на заповненість
// при правильному вводі запускається цикл створення таблиці після створення таблиця переміщаться в value textarea
$('.createTable').click(function () {
    if (table.wtd.value == 0 && table.ctr.value == 0 && table.ctd.value == 0 && table.htd.value == 0 && table.wbd.value == 0 && table.htd.value == 0 && table.styleBorder.options[0].selected == true && table.colorBorder.options[0].selected == true && !reg.test(table.ctr.value) && !reg.test(table.ctd.value) && !reg.test(table.wtd.value) && !reg.test(table.htd.value) && !reg.test(table.wbd.value)) {
        table.wtd.style.borderColor = 'red';
        table.htd.style.borderColor = 'red';
        table.ctd.style.borderColor = 'red';
        table.ctr.style.borderColor = 'red';
        table.wbd.style.borderColor = 'red';
        table.colorBorder.style.borderColor = 'red';
        table.styleBorder.style.borderColor = 'red';
        $('.invalid').removeClass('hide')
    }
    if (table.ctr.value.length > 0 && reg.test(table.ctr.value)) {
        table.ctr.style.border = '1px solid gray';
    }
    if (table.ctd.value.length > 0 && reg.test(table.ctd.value)) {
        table.ctd.style.border = '1px solid gray';
    }
    if (table.wtd.value.length > 0 && reg.test(table.wtd.value)) {
        table.wtd.style.border = '1px solid gray';
    }
    if (table.htd.value.length > 0 && reg.test(table.htd.value)) {
        table.htd.style.border = '1px solid gray';
    }
    if (table.wbd.value.length > 0 && reg.test(table.wbd.value)) {
        table.wbd.style.border = '1px solid gray';
    }
    if (table.styleBorder.options[0].selected == false) {
        table.styleBorder.style.border = '1px solid gray';
    }
    if (table.colorBorder.options[0].selected == false) {
        table.colorBorder.style.border = '1px solid gray';
    }
    if (table.wtd.value != 0 && table.ctr.value != 0 && table.ctd.value != 0 && table.htd.value != 0 && table.wbd.value != 0 && table.htd.value != 0 && table.styleBorder.options[0].selected == false && table.colorBorder.options[0].selected == false && reg.test(table.ctr.value) && reg.test(table.ctd.value) && reg.test(table.wtd.value) && reg.test(table.htd.value) && reg.test(table.wbd.value)) {
        let t = document.createElement('table');
        for (let i = 0; i < table.ctr.value; i++) {
            let trTag = document.createElement('tr');
            for (let j = 0; j < +table.ctd.value; j++) {
                let tdTag = document.createElement('td');
                tdTag.textContent = 'TD'
                tdTag.style.width = table.wtd.value + 'px';
                tdTag.style.height = table.htd.value + 'px';
                tdTag.style.borderWidth = table.wbd.value + 'px';
                tdTag.style.borderStyle = `${table.styleBorder.value}`;
                tdTag.style.borderColor = `${table.colorBorder.value}`;
                trTag.appendChild(tdTag);
            }
            t.appendChild(trTag)
        }
        document.querySelector('textarea').value += t.outerHTML
        $('.invalid').addClass('hide')
    }
    if (table.colorBorder.options[0].selected == true) {
        table.colorBorder.style.border = '1px solid red';
    }
    if (table.styleBorder.options[0].selected == true) {
        table.styleBorder.style.border = '1px solid red';
    }
    if (table.wbd.style.value == 0 && !reg.test(table.wbd.value)) {
        table.wbd.style.border = '1px solid red';
    }
    if (table.htd.style.value == 0 && !reg.test(table.htd.value)) {
        table.htd.style.border = '1px solid red';
    }
    if (table.wtd.style.value == 0 && !reg.test(table.wtd.value)) {
        table.wtd.style.border = '1px solid red';
    }
    if (table.ctd.style.value == 0 && !reg.test(table.ctd.value)) {
        table.ctd.style.border = '1px solid red';
        $('.invalid').removeClass('hide')

    }
    if (table.ctr.style.value == 0 && !reg.test(table.ctr.value)) {
        table.ctr.style.border = '1px solid red';
        $('.invalid').removeClass('hide')

    }
})
// Накладаю подію клік на reset 
// При кліку на цю кнопку очищаються всі поля і скидуються всі селекти
$('.reset').click(function () {
    table.ctd.value = '';
    table.ctr.value = '';
    table.wtd.value = '';
    table.htd.value = '';
    table.wbd.value = '';
    table.styleBorder.options[0].selected = true;
    table.colorBorder.options[0].selected = true;
})
// Створбю змінну для форми listOl
const listOl = document.forms.listOl
// Накладаю подію клік на addOl
// При кліку на цю кнопку появляється окреми блок з формою
$('.addOl').click(function () {
    $('body').css({
        backgroundColor: 'lightgray'
    })
    $('textarea').css({
        backgroundColor: 'lightgray'
    })
    $('.chooseListOl').removeClass('hide')
})
// Накладаю подію клік на createListOl
// При кліку на цю кнопку запусткається процес перевірок на правильність вводу і на заповненість
// при правильному вводі запускається цикл створення діста типом ol після створення list переміщаться в value textarea
$('.createListOl').click(function () {
    if (listOl.cli.value == 0 && listOl.markOl.options[0].selected == true && !reg.test(listOl.cli.value)) {
        listOl.cli.style.borderColor = 'red';
        listOl.markOl.style.borderColor = 'red';
        $('.invalid1').removeClass('hide')
    }
    if (listOl.cli.value.length > 0 && reg.test(listOl.cli.value)) {
        listOl.cli.style.border = '1px solid gray';
    }
    if (listOl.markOl.options[0].selected == false) {
        listOl.markOl.style.border = '1px solid gray';
    }
    if (listOl.cli.value != 0 && listOl.markOl.options[0].selected == false && reg.test(listOl.cli.value)) {
        let ol = document.createElement('ol');
        ol.style.listStyleType = `${listOl.markOl.value}`;
        for (let i = 0; i < listOl.cli.value; i++) {
            let liTag = document.createElement('li');
            ol.appendChild(liTag);
            liTag.textContent = `item${i+1}`;
        }
        document.querySelector('textarea').value += ol.outerHTML
        $('.invalid1').addClass('hide')
    }
    if (listOl.markOl.options[0].selected == true) {
        
        $('.invalid').removeClass('hide')
        listOl.markOl.style.border = '1px solid red';
    }
    if (listOl.cli.style.value == 0 && !reg.test(listOl.cli.value)) {
        listOl.cli.style.border = '1px solid red';

    }
})
// Накладаю подію клік на reset1 
// При кліку на цю кнопку очищаються всі поля і скидуються всі селекти
$('.reset1').click(function () {
    listOl.cli.value = '';
    listOl.markOl.options[0].selected = true;
})
// Створюю змінну для форми listUl
const listUl = document.forms.listUl
// Накладаю подію клік на addUl
// При кліку на цю кнопку появляється окреми блок з формою
$('.addUl').click(function () {
    $('body').css({
        backgroundColor: 'lightgray'
    })
    $('textarea').css({
        backgroundColor: 'lightgray'
    })
    $('.chooseListUl').removeClass('hide')
})
// Накладаю подію клік на createListul
// При кліку на цю кнопку запусткається процес перевірок на правильність вводу і на заповненість
// при правильному вводі запускається цикл створення діста типом ul після створення list переміщаться в value textarea
$('.createListUl').click(function () {
    if (listUl.cli1.value == 0 && listUl.markUl.options[0].selected == true && !reg.test(listUl.cli1.value)) {
        listUl.cli1.style.borderColor = 'red';
        listUl.markUl.style.borderColor = 'red';
        $('.invalid2').removeClass('hide')
    }
    if (listUl.cli1.value.length > 0 && reg.test(listOl.cli.value)) {
        listUl.cli1.style.border = '1px solid gray';
    }
    if (listUl.markUl.options[0].selected == false) {
        listUl.markUl.style.border = '1px solid gray';
    }
    if (listUl.cli1.value != 0 && listUl.markUl.options[0].selected == false && reg.test(listUl.cli1.value)) {
        let ul = document.createElement('ul');
        ul.style.listStyleType = `${listUl.markUl.value}`;
        for (let i = 0; i < listUl.cli1.value; i++) {
            let liTag = document.createElement('li');
            ul.appendChild(liTag);
            liTag.textContent = `item${i+1}`;
        }
        document.querySelector('textarea').value += ul.outerHTML
        $('.invalid2').addClass('hide')
    }
    if (listUl.markUl.options[0].selected == true) {
        listUl.markUl.style.border = '1px solid red';
        $('.invalid').removeClass('hide')

    }
    if (listUl.cli1.style.value == 0 && !reg.test(listUl.cli1.value)) {
        listUl.cli1.style.border = '1px solid red';
    }
})
// Накладаю подію клік на reset2 
// При кліку на цю кнопку очищаються всі поля і скидуються всі селекти
$('.reset2').click(function () {
    listUl.cli1.value = '';
    listUl.markUl.options[0].selected = true;
})