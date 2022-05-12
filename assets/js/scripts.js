/* -------------------------------------------------------------------------- */
/*                             Información Arrays                             */
/* -------------------------------------------------------------------------- */
let radiologia = [
    {
        hora: '11:00',
        especialista: 'Ignacio Schulz',
        paciente: 'Francisca Rojas',
        rut: '9878782-1',
        prevision: 'Fonasa'
    },
    {
        hora: '11:30',
        especialista: 'Federico Subercaseaux',
        paciente: 'Pamela Estrada',
        rut: '15345241-3',
        prevision: 'Isapre'
    },
    {
        hora: '15:00',
        especialista: 'Fernando Wurthz',
        paciente: 'Armando Luna',
        rut: '16445345-9',
        prevision: 'Isapre'
    },
    {
        hora: '15:30',
        especialista: 'Ana María Godoy',
        paciente: 'Manuel Godoy',
        rut: '17666419-0',
        prevision: 'Fonasa'
    },
    {
        hora: '16:00',
        especialista: 'Patricia Suazo',
        paciente: 'Ramon Ulloa',
        rut: '14989389-K',
        prevision: 'Fonasa'
    },
]
let traumatologia = [
    {
        hora: '08:00',
        especialista: 'María Paz Altuzarra',
        paciente: 'Paula Sanchez',
        rut: '15554774-5',
        prevision: 'Fonasa'
    },
    {
        hora: '10:00',
        especialista: 'Raul Araya',
        paciente: 'Angélica Navas',
        rut: '15444147-9',
        prevision: 'Isapre'
    },
    {
        hora: '10:30',
        especialista: 'María Arriagada',
        paciente: 'Ana Klapp',
        rut: '17879423-9',
        prevision: 'Isapre'
    },
    {
        hora: '11:00',
        especialista: 'Alejandro Badilla',
        paciente: 'Felipe Mardones',
        rut: '1547423-6',
        prevision: 'Isapre'
    },
    {
        hora: '11:30',
        especialista: 'Cecilia Budnik',
        paciente: 'Diego Marre',
        rut: '16554741-K',
        prevision: 'Fonasa'
    },
    {
        hora: '12:00',
        especialista: 'Arturo Cavagnaro',
        paciente: 'Cecilia Mendez',
        rut: '9747535-8',
        prevision: 'Isapre'
    },
    {
        hora: '12:30',
        especialista: 'Andres Kanacri',
        paciente: 'Marcial Suazo',
        rut: '11254785-5',
        prevision: 'Isapre'
    },
]
let dental = [
    {
        hora: '08:30',
        especialista: 'Andrea Zuñiga',
        paciente: 'Marcela Retamal',
        rut: '11123425-6',
        prevision: 'Isapre'
    },
    {
        hora: '11:00',
        especialista: 'Maria Pia Zañartu',
        paciente: 'Angel Muñoz',
        rut: '9878789-2',
        prevision: 'Isapre'
    },
    {
        hora: '11:30',
        especialista: 'Scarlett Witting',
        paciente: 'Mario Kast',
        rut: '7998789-5',
        prevision: 'Fonasa'
    },
    {
        hora: '13:00',
        especialista: 'Francisco Von Teuber',
        paciente: 'Karin Fernandez',
        rut: '18887662-K',
        prevision: 'Fonasa'
    },
    {
        hora: '13:30',
        especialista: 'Eduardo Viñuela',
        paciente: 'Hugo Sanchez',
        rut: '17665461-4',
        prevision: 'Fonasa'
    },
    {
        hora: '14:00',
        especialista: 'Raquel Villaseca',
        paciente: 'Ana Sepulveda',
        rut: '14441281-0',
        prevision: 'Isapre'
    }
]

let especialidades = ['Radiología', 'Traumatología', 'Dental']


/* -------------------------------------------------------------------------- */
/*                     Agrego nuevas horas a Traumatología                    */
/* -------------------------------------------------------------------------- */
let nuevasHoras = [
    {
        hora: '09:00',
        especialista: 'René Poblete',
        paciente: 'Ana Gellona',
        rut: '13123329-7',
        prevision: 'Isapre'
    },
    {
        hora: '09:30',
        especialista: 'Maria Solar',
        paciente: 'Ramiro Andrade',
        rut: '12221451-K',
        prevision: 'Fonasa'
    },
    {
        hora: '10:00',
        especialista: 'Raul Loyola',
        paciente: 'Carmen Isla',
        rut: '10112348-3',
        prevision: 'Isapre'
    },
    {
        hora: '10:30',
        especialista: 'Antonio Larenas',
        paciente: 'Pablo Loayza',
        rut: '13453234-1',
        prevision: 'Isapre'
    },
    {
        hora: '12:00',
        especialista: 'Matias Aravena',
        paciente: 'Susana Poblete',
        rut: '14345656-6',
        prevision: 'Fonasa'
    }
]

let traumatologiaNew = traumatologia.concat(nuevasHoras)
let sortTraumatologia = traumatologiaNew.sort( (a, b) => {
    if ( a.hora > b.hora ) {
        return 1
    } else if ( a.hora < b.hora ) {
        return -1
    }
    return 0
})


/* -------------------------------------------------------------------------- */
/*               Elimino primer y último elemento de Radiología               */
/* -------------------------------------------------------------------------- */
radiologia.shift()
radiologia.pop()


/* -------------------------------------------------------------------------- */
/*                 Convierto los elementos de dental en string                */
/* -------------------------------------------------------------------------- */
function arrToString(arr, id) {
    let strWrapper = document.getElementById(id)
    let list = document.createElement('div')
    list.classList.add('pacientes-dental')

    arr.forEach( element => {
        let str = `<i class="fa-solid fa-circle-check"></i> ${element.hora} - ${element.especialista} - ${element.paciente} - ${element.rut} - ${element.prevision}`
        let parrafo = document.createElement('p')
        parrafo.innerHTML += str
        list.appendChild(parrafo)
    })
    strWrapper.appendChild(list)
    
}
arrToString(dental, 'horasDental')


/* -------------------------------------------------------------------------- */
/*                     Concateno arreglos y obtengo nombre                    */
/* -------------------------------------------------------------------------- */
function concatArr(arr1, arr2, arr3) {
    let globalArr = arr1.concat(arr2, arr3) 
    let list = document.createElement('ul')

    globalArr.forEach( element => {
        let listItem = document.createElement('li')
        listItem.innerHTML += `<i class="fa-solid fa-user"></i> ${element.paciente}`
        
        list.appendChild(listItem)
    })
    return list
}

let pacientesWrapper = document.getElementById('pacientesDia')
pacientesWrapper.appendChild(concatArr(radiologia, traumatologiaNew, dental))


/* -------------------------------------------------------------------------- */
/*                              Filtro por Isapre                             */
/* -------------------------------------------------------------------------- */
function filterIsapre(arr, id) {
    
    let pacientesIsapre = arr.filter( element => {
        if ( element.prevision == 'Isapre' ) {
            let paciente = `<p><i class="fa-solid fa-circle-check"></i> ${element.paciente} - ${element.prevision}</p>`
            let wrapper = document.getElementById(id)
            wrapper.innerHTML += paciente
        }
    })
}
filterIsapre(dental, 'dentalIsapre')

/* -------------------------------------------------------------------------- */
/*                              Filtro por Fonasa                             */
/* -------------------------------------------------------------------------- */
function filterFonasa(arr, id) {
    
    let pacientesIsapre = arr.filter( element => {
        if ( element.prevision == 'Fonasa' ) {
            let paciente = `<p><i class="fa-solid fa-circle-check"></i> ${element.paciente} - ${element.prevision}</p>`
            let wrapper = document.getElementById(id)
            wrapper.innerHTML += paciente
        }
    })
}
filterFonasa(traumatologiaNew, 'traumatologiaFonasa')


/* -------------------------------------------------------------------------- */
/*                 Obtengo primera y ultima hora de cada array                */
/* -------------------------------------------------------------------------- */

function getHoras(id, arr, name) {
    
    let last = arr.length-1
    let idWrapper = document.getElementById(id)

    let resumeContent = `
    <h3>${name}</h3>
    <div>
        <div class="atencion">
            <div class="atencion__header">
                <span>Primera Atención</span>
                <p><i class="fa-solid fa-clock"></i> ${arr[0].hora}</p>
            </div>
            <div class="atencion__content">
                <i class="fa-solid fa-user"></i>
                <p>${arr[0].paciente}</p>
                <p>-</p>
                <p>${arr[0].prevision}</p>
            </div>
        </div>
        <div class="atencion">
            <div class="atencion__header">
                <span>Última Atención</span>
                <p><i class="fa-solid fa-clock"></i> ${arr[last].hora}</p>
            </div>
            <div class="atencion__content">
                <i class="fa-solid fa-user"></i>
                <p>${arr[last].paciente}</p>
                <p>-</p>
                <p>${arr[last].prevision}</p>
            </div>
        </div>
    </div>
    ` 
    idWrapper.innerHTML = resumeContent
    
}

getHoras('radiologiaRes', radiologia, 'Radiología')
getHoras('traumatologiaRes', traumatologia, 'Traumatología')
getHoras('dentalRes', dental, 'Dental')


/* -------------------------------------------------------------------------- */
/*                    Creo tabs bootstrap para array y objetos                */
/* -------------------------------------------------------------------------- */

function createTab(arr) {
    let mainWrapper = document.getElementById('tabsWrapper')
    let tabHeadings = createHeadingTabs(arr)
    let tabContents = createContentTabs(arr)

    mainWrapper.appendChild(tabHeadings)
    mainWrapper.appendChild(tabContents)
}


function createHeadingTabs(list) {

    let tabHeadingWrapper = document.createElement('ul')
    tabHeadingWrapper.classList.add('nav', 'nav-tabs')
    tabHeadingWrapper.setAttribute('role', 'tablist')
    tabHeadingWrapper.setAttribute('id', 'especialidadesTabs')

    for ( let i = 0; i < list.length; i++ ) {
        
        let tabHeading = document.createElement('li')
        tabHeading.classList.add('nav-item')
        tabHeading.setAttribute('role', 'presentation')
        
        let tabHeadingBtn = document.createElement('button')
        
        tabHeadingBtn.classList.add('nav-link')
        tabHeadingBtn.setAttribute('data-bs-toggle', 'tab')
        tabHeadingBtn.setAttribute('data-bs-target', '#'+list[i])
        tabHeadingBtn.setAttribute('type', 'button')
        tabHeadingBtn.setAttribute('role', 'tab')
        tabHeadingBtn.setAttribute('aria-controls', list[i])
        tabHeadingBtn.setAttribute('aria-selected', 'false')

        if ( i == 0 ) {
            tabHeadingBtn.classList.add('active')
            tabHeadingBtn.setAttribute('aria-selected', 'true')
        }
        
        tabHeadingBtn.textContent = list[i]

        tabHeading.appendChild(tabHeadingBtn)
        tabHeadingWrapper.appendChild(tabHeading)
    }

    return tabHeadingWrapper

}


function createContentTabs(list) {
    let tabContentWrapper = document.createElement('div')
    tabContentWrapper.classList.add('tab-content')
    tabContentWrapper.setAttribute('id', 'especialidadesTabsContent')

    for ( let i = 0; i < list.length; i++ ) {
        let tabContent = document.createElement('div')
        tabContent.classList.add('tab-pane', 'fade')
        tabContent.setAttribute('id', list[i])
        tabContent.setAttribute('role', 'tabpanel')
        tabContent.setAttribute('aria-labelledby', list[i]+'-tabpanel')

        
        if ( i == 0 ) {
            tabContent.classList.add('show', 'active')
        }

        if ( tabContent.id == 'Radiología' ) {
            tabContent.append(createTable(radiologia))
        } else if ( tabContent.id == 'Traumatología' ) {
            tabContent.append(createTable(sortTraumatologia))
        } else if ( tabContent.id == 'Dental' ) {
            //tabContent.append(arrToString(dental, 'dental'))
            tabContent.append(createTable(dental))
        }

        //tabContent.append(createTable(table))
        tabContentWrapper.appendChild(tabContent)
    }

    return tabContentWrapper

}

/* -------------------------------------------------------------------------- */
/*                    Creo tabla bootstrap para array y objetos               */
/* -------------------------------------------------------------------------- */

function createTable(element) {
    let table = document.createElement('table')
    table.classList.add('table')
    let tableHeads = (createHeadingTable(getKeyArrObject(element)))
    let tableBodys = createBodyTable(element)

    table.appendChild(tableHeads)
    table.appendChild(tableBodys)

    return table
}

function createHeadingTable(arr) {
    let tableHead = document.createElement('thead')
    let tableHeadTr = document.createElement('tr')

    for ( let element of arr ) {
        let tableHeadTh = document.createElement('th')
        tableHeadTh.setAttribute('scope', 'col')

        tableHeadTh.textContent = element
        tableHeadTr.appendChild(tableHeadTh)
    }

    tableHead.appendChild(tableHeadTr)

    return tableHead
}

function createBodyTable(arr) {
    let tableBody = document.createElement('tbody')

    arr.forEach((element,index)=>{
        let tableBodyTr = document.createElement('tr')
        let tableBodyTh = document.createElement('th')
        tableBodyTh.setAttribute('scope','row')
        tableBodyTh.textContent = index +1
        tableBodyTr.appendChild(tableBodyTh)

        for(let prop in element){
            let tableBodyTd = document.createElement('td')
            tableBodyTd.textContent = element[prop]
            tableBodyTr.appendChild(tableBodyTd)
        }
        
        tableBody.appendChild(tableBodyTr)
    })
    return tableBody
}

function getKeyArrObject(arrObject) {
    keyArr = []
    keyArr.push('N°')

    for ( obj of arrObject ) {
        for ( key in obj ) {
            keyArr.push(key)
        }
        break
    }
    return keyArr
}



/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
createTab(especialidades)