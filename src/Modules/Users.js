let grid = $("#gridUsers").kendoGrid({
    toolbar: [
        {name: "add", text: "Nuevo Usuario"}
    ],
    columns: [
        {field: 'Id', title: 'User ID', filterable: { multi: true, search: true }},
        {field: 'Nombre', title: 'Nombre de Usuario', filterable: { multi: true, search: true }},
        {field: 'Apellidos', title: 'Apellidos', filterable: { multi: true, search: true }},
        {field: 'Edad', title: 'Edad', filterable: { multi: true, search: true }},

        {
            command: [
                {name: "edit", text: "Editar", iconClass:"fa-solid fa-pencil"}
            ]
        }
    ],
    dataSource: new kendo.data.DataSource({
        pageSize: 3,
        transport: {
            read: (e) => {
                let data = [
                    {Id: 1, Nombre: 'Erick', Apellidos: 'García Amaris', Edad: 25},
                    {Id: 2, Nombre: 'Juan de Dios', Apellidos: 'Londoño', Edad: 65},
                    {Id: 3, Nombre: 'Daniel', Apellidos: 'Alfonso', Edad: 55},
                    {Id: 4, Nombre: 'Andrés', Apellidos: 'Salazar', Edad: 33},
                    {Id: 5, Nombre: 'Walter', Apellidos: 'Mercado', Edad: 24},
                ]

                e.success(data)
            }
        },
        schema: {
            model: {
                id: "Id",
                fields: {
                    Nombre: { type: "string" },
                    Apellidos: { type: "string" },
                    Edad: { type: "number" },
                },
            },
        },
    }),
    editable: "inline",
    autoBind: true,
    filterable: true,
    pageable: true,
    sortable: true,
})