const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    },
    {
        id: 4,
        nombre: 'Cristhian'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    },
    {
        id: 4,
        salario: 4000
    }
];

const getEmpleado = ( id ) => {

    return new Promise((resolve, reject) => {

        const empleado = empleados.find( e => e.id === id )?.nombre;

        (empleado)
            ?resolve (empleado)
            :reject(`no existe empleado con id ${id}`)
    });
}

const getSalario = () => {
    return new Promise(( resolve, reject ) => {

        const salario = salarios.find( s => s.id === id )?.salario;

        ( salario ) 
            ? resolve( salario )
            : reject( `No existe salario con id ${ id }` );
    });
}

const id = 4;

let nombre;

getEmpleado(id)
    .then( empleado => {
        nombre = empleado;
        return getSalario( id ) 
    })
    .then( salario => console.log( 'El empleado:', nombre, 'tiene un salario de:', salario ))
    .catch( err => console.log( err ) );