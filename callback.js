
// setTimeout( () => {
//     console.log('Hola Mundo');
// } , 1000 );


const getUsuarioByID = ( id, callback ) => {

    const user = {
        id,
        nombre: 'Fernando'
    }
 
    setTimeout( () => {
        callback(user)
    }, 3500 )

}


getUsuarioByID( 10, ( usuario ) => {
    console.log( usuario);
});


