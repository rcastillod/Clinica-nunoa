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
/*                 Obtengo primera y ultima hora de cada array                */
/* -------------------------------------------------------------------------- */

function getHoras(id, arr) {
    
    let last = arr.length-1
    let idWrapper = document.getElementById(id)

    let resumeContent = `
    <h3>${id}</h3>
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

getHoras('radiologia', radiologia)
getHoras('traumatologia', traumatologia)
getHoras('dental', dental)


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
            tabContent.append(createTable(radiologia)) // Table append
        } else if ( tabContent.id == 'Traumatología' ) {
            tabContent.append(createTable(traumatologia)) // Table append
        } else if ( tabContent.id == 'Dental' ) {
            tabContent.append(createTable(dental)) // Table append
        }
        console.log(tabContent.id)

        //tabContent.append(createTable(table)) // Table append
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
createTab(especialidades, radiologia)

