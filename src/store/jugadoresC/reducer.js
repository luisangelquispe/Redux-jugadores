const initialState = {
    jugadores: [
        {
            id: 1,
            nombre: "Messi",
            foto: "https://media.ultimahora.com/adjuntos/169/imagenes/008/316/0008316937.jpg"
        },
        {
            id: 2,
            nombre: "Iniesta",
            foto: "https://fotosdemujeresyhombres.com/wp-content/uploads/2018/11/andres-iniesta-joven-new-andres-iniesta-quottodava-me-siento-jovenquot-of-andres-iniesta-joven.jpg"
        },
        {
            id: 3,
            nombre: "Ronaldinho",
            foto: "https://th.bing.com/th/id/R.887382bd51c376029b79db2a508d608a?rik=l%2b9wIpZBl%2bBFBQ&riu=http%3a%2f%2fsfwallpaper.com%2fimages%2fronaldinho-22.jpg&ehk=zn3hlKCugvsP4YBAgLN4l5lRaviv49kdvxwp8%2bn%2beTg%3d&risl=&pid=ImgRaw&r=0"
        }
    ],
    titulares: [],
    suplentes: []
}

export const reducerEntrenador = (state = initialState, action) => {
    return state;
}