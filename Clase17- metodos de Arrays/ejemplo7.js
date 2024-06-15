const datosUsuarios = [
    {
        nombre:"Flavia",
        password: "1234",

    },
    {    nombre:"Laura",
        password: "5678",

    },
    {    nombre:"Sandra",
        password: "2589",

    },

    {    nombre:"Virginia",
        password: "9874",

    },
    {    nombre:"Clara",
        password: "6974",

    },


]
console.log(datosUsuarios)

const soloPassword = datosUsuarios.map(function(p){
    return p.password
})

console.log(soloPassword)



