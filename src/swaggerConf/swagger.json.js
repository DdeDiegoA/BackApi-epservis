export const swaggerJson = {
    swagger: "2.0",
    info: {
        version: "1.0.0",
        title: "ApiServis v1",
        description: "Doc about ApiServis",
        contact: {
            email: "diegoarenas111@gmail.com",
            gitHub: "https://github.com/DdeDiegoA",
        },
    },
    host: "localHost:4000",
    basePath: "/",
    tags: [
        {
            name: "User",
            description: "users for the system",
        },
        {
            name: "Client",
            description: "Api for clients in the system",
        },
        {
            name: "Plans",
            description: "plan for clients",
        },
        {
            name: "Company",
            description: "Companies",
        },
        {
            name: "Level",
            description: "Levels of plans",
        },
    ],
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
    paths: {
        "/client": {
            get: {
                tags: ["Client"],
                summary: "Obtener todos los clientes",
                description: "Devuelve una lista de todos los clientes",
                parameters: [
                    {
                        name: "authorization",
                        in: "header",
                        required: true,
                        type: "string",
                        description: "Bearer token",
                    },
                ],
                responses: {
                    200: {
                        description: "Lista de clientes obtenida exitosamente",
                        schema: {
                            type: "array",
                            items: {
                                $ref: "#/definitions/Client",
                            },
                        },
                    },
                    500: {
                        description: "Error al obtener la lista de clientes",
                    },
                },
            },
            post: {
                tags: ["Client"],
                summary: "Crear un nuevo cliente",
                description:
                    "Crea un nuevo cliente con los datos proporcionados",
                parameters: [
                    {
                        name: "authorization",
                        in: "header",
                        required: true,
                        type: "string",
                        description: "Bearer token",
                    },
                    {
                        name: "body",
                        in: "body",
                        required: true,
                        schema: {
                            $ref: "#/definitions/NewClient",
                        },
                    },
                ],
                responses: {
                    201: {
                        description: "Cliente creado exitosamente",
                    },
                    400: {
                        description: "Error al crear el cliente",
                    },
                },
            },
        },
        "/client/{id}": {
            get: {
                tags: ["Client"],
                summary: "Obtener un cliente por ID",
                description: "Devuelve un cliente específico según su ID",
                parameters: [
                    {
                        name: "authorization",
                        in: "header",
                        required: true,
                        type: "string",
                        description: "Bearer token",
                    },
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        type: "integer",
                    },
                ],
                responses: {
                    200: {
                        description: "Cliente obtenido exitosamente",
                        schema: {
                            $ref: "#/definitions/Client",
                        },
                    },
                    404: {
                        description: "El cliente no existe",
                    },
                    500: {
                        description: "Error al obtener el cliente",
                    },
                },
            },
            put: {
                tags: ["Client"],
                summary: "Actualizar un cliente",
                description:
                    "Actualiza un cliente con los datos proporcionados",
                parameters: [
                    {
                        name: "authorization",
                        in: "header",
                        required: true,
                        type: "string",
                        description: "Bearer token",
                    },
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        type: "integer",
                    },
                    {
                        name: "body",
                        in: "body",
                        required: true,
                        schema: {
                            $ref: "#/definitions/UpdateClient",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "Cliente actualizado exitosamente",
                    },
                    400: {
                        description: "Error al actualizar el cliente",
                    },
                },
            },
            delete: {
                tags: ["Client"],
                summary: "Eliminar un cliente",
                description: "Elimina un cliente según su ID",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        require: true,
                        type: "integer",
                    },
                    {
                        name: "authorization",
                        in: "header",
                        required: true,
                        type: "string",
                        description: "Bearer token",
                    },
                ],
                responses: {
                    204: {
                        description: "Cliente eliminado exitosamente",
                    },
                    401: {
                        description: "Error al eliminar cliente",
                    },
                },
            },
        },
        "/client-data": {
            get: {
                tags: ["Client"],
                summary:
                    "Obtener todos los clientes con sus datos de plan y empresa",
                description:
                    "Devuelve una lista de todos los clientes con sus datos de plan y empresa",
                parameters: [
                    {
                        name: "authorization",
                        in: "header",
                        required: true,
                        type: "string",
                        description: "Bearer token",
                    },
                ],
                responses: {
                    200: {
                        description: "Lista de clientes obtenida exitosamente",
                        schema: {
                            type: "array",
                            items: {
                                $ref: "#/definitions/ClientAllData",
                            },
                        },
                    },
                    500: {
                        description: "Error al obtener la lista de clientes",
                    },
                },
            },
        },
        "/client-data/{id}": {
            get: {
                tags: ["Client"],
                summary: "Obtener todos los datos de un cliente por ID",
                description:
                    "Devuelve todos los datos de un cliente específico según su ID",
                parameters: [
                    {
                        name: "authorization",
                        in: "header",
                        required: true,
                        type: "string",
                        description: "Bearer token",
                    },
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        type: "integer",
                    },
                ],
                responses: {
                    200: {
                        description: "Datos del cliente obtenidos exitosamente",
                        schema: {
                            $ref: "#/definitions/ClientAllData",
                        },
                    },
                    404: {
                        description:
                            "El cliente con el ID especificado no existe",
                    },
                    500: {
                        description: "Error al obtener los datos del cliente",
                    },
                },
            },
        },
        "/user": {
            get: {
                tags: ["User"],
                summary: "Obtener todos los usuarios",
                description: "Devuelve una lista de todos los usuarios",

                parameters: [
                    {
                        name: "authorization",
                        in: "header",
                        required: true,
                        type: "string",
                        description: "Bearer token",
                    },
                ],
                responses: {
                    200: {
                        description: "Lista de usuarios obtenida exitosamente",
                        schema: {
                            type: "array",
                            items: {
                                $ref: "#/definitions/User",
                            },
                        },
                    },
                    500: {
                        description: "Error al obtener la lista de usuarios",
                    },
                },
            },
        },
        "/user/{id}": {
            get: {
                tags: ["User"],
                summary: "Obtener un usuario por ID",
                description: "Devuelve un usuario específico según su ID",
                parameters: [
                    {
                        name: "authorization",
                        in: "header",
                        required: true,
                        type: "string",
                        description: "Bearer token",
                    },
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        type: "integer",
                    },
                ],
                responses: {
                    200: {
                        description: "Usuario obtenido exitosamente",
                        schema: {
                            $ref: "#/definitions/User",
                        },
                    },
                    404: {
                        description: "El usuario no existe",
                    },
                    500: {
                        description: "Error al obtener el usuario",
                    },
                },
            },
            put: {
                tags: ["User"],
                summary: "Actualizar un usuario",
                description: "Actualiza un usuario según su ID",
                parameters: [
                    {
                        name: "authorization",
                        in: "header",
                        required: true,
                        type: "string",
                        description: "Bearer token",
                    },
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        type: "integer",
                    },
                    {
                        name: "body",
                        in: "body",
                        required: true,
                        schema: {
                            $ref: "#/definitions/UpdateUser",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "Usuario actualizado exitosamente",
                    },
                    400: {
                        description: "Error al actualizar el usuario",
                    },
                },
            },
            delete: {
                tags: ["User"],
                summary: "Eliminar un usuario",
                description: "Elimina un usuario según su ID",
                parameters: [
                    {
                        name: "authorization",
                        in: "header",
                        required: true,
                        type: "string",
                        description: "Bearer token",
                    },
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        type: "integer",
                    },
                ],
                responses: {
                    204: {
                        description: "Usuario eliminado exitosamente",
                    },
                    400: {
                        description: "Error al eliminar el usuario",
                    },
                },
            },
        },
        "/register": {
            post: {
                tags: ["User"],
                summary: "Crear un nuevo usuario",
                description:
                    "Crea un nuevo usuario con los datos proporcionados",
                parameters: [
                    {
                        name: "body",
                        in: "body",
                        required: true,
                        schema: {
                            $ref: "#/definitions/NewUser",
                        },
                    },
                ],
                responses: {
                    201: {
                        description: "Usuario creado exitosamente",
                    },
                    400: {
                        description: "Error al crear el usuario",
                    },
                },
            },
        },
        "/login": {
            post: {
                tags: ["User"],
                summary: "Iniciar sesión de usuario",
                description:
                    "Inicia sesión de un usuario con su correo electrónico y contraseña",
                parameters: [
                    {
                        name: "body",
                        in: "body",
                        required: true,
                        schema: {
                            type: "object",
                            properties: {
                                email: {
                                    type: "string",
                                },
                                password: {
                                    type: "string",
                                },
                            },
                            required: ["email", "password"],
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "Sesión iniciada exitosamente",
                        schema: {
                            type: "object",
                            properties: {
                                body: {
                                    $ref: "#/definitions/User",
                                },
                                tokenSession: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    404: {
                        description: "El usuario no existe",
                    },
                    409: {
                        description: "Contraseña inválida",
                    },
                    400: {
                        description: "Error al iniciar sesión",
                    },
                },
            },
        },
        "/plan": {
            get: {
                tags: ["Plans"],
                summary: "Obtener todos los planes",
                description: "Devuelve una lista de todos los planes",
                parameters: [
                    {
                        name: "authorization",
                        in: "header",
                        required: true,
                        type: "string",
                        description: "Bearer token",
                    },
                ],
                responses: {
                    200: {
                        description: "Lista de planes obtenida exitosamente",
                        schema: {
                            type: "array",
                            items: {
                                $ref: "#/definitions/Plan",
                            },
                        },
                    },
                    500: {
                        description: "Error al obtener la lista de planes",
                    },
                },
            },
            post: {
                tags: ["Plans"],
                summary: "Crear un nuevo plan",
                description: "Crea un nuevo plan con los datos proporcionados",
                parameters: [
                    {
                        name: "authorization",
                        in: "header",
                        required: true,
                        type: "string",
                        description: "Bearer token",
                    },
                    {
                        name: "body",
                        in: "body",
                        required: true,
                        schema: {
                            $ref: "#/definitions/NewPlan",
                        },
                    },
                ],
                responses: {
                    201: {
                        description: "Plan creado exitosamente",
                    },
                    401: {
                        description: "Error al crear el plan",
                    },
                },
            },
        },
        "/plan/{id}": {
            get: {
                tags: ["Plans"],
                summary: "Obtener un plan por ID",
                description: "Devuelve un plan específico según su ID",
                parameters: [
                    {
                        name: "authorization",
                        in: "header",
                        required: true,
                        type: "string",
                        description: "Bearer token",
                    },
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        type: "integer",
                    },
                ],
                responses: {
                    200: {
                        description: "Plan obtenido exitosamente",
                        schema: {
                            $ref: "#/definitions/Plan",
                        },
                    },
                    404: {
                        description: "El plan con el ID especificado no existe",
                    },
                    500: {
                        description: "Error al obtener el plan",
                    },
                },
            },
            put: {
                tags: ["Plans"],
                summary: "Actualizar un plan por ID",
                description:
                    "Actualiza un plan específico según su ID con los datos proporcionados",
                parameters: [
                    {
                        name: "authorization",
                        in: "header",
                        required: true,
                        type: "string",
                        description: "Bearer token",
                    },
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        type: "integer",
                    },
                    {
                        name: "body",
                        in: "body",
                        required: true,
                        schema: {
                            $ref: "#/definitions/UpdatePlan",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "Plan actualizado exitosamente",
                    },
                    401: {
                        description: "Error al actualizar el plan",
                    },
                },
            },
            delete: {
                tags: ["Plans"],
                summary: "Eliminar un plan por ID",
                description: "Elimina un plan específico según su ID",
                parameters: [
                    {
                        name: "authorization",
                        in: "header",
                        required: true,
                        type: "string",
                        description: "Bearer token",
                    },
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        type: "integer",
                    },
                ],
                responses: {
                    204: {
                        description: "Plan eliminado exitosamente",
                    },
                    401: {
                        description: "Error al eliminar el plan",
                    },
                },
            },
        },
        "/plan/{id}/client": {
            get: {
                tags: ["Plans"],
                summary: "Obtener clientes de un plan por ID",
                description:
                    "Devuelve una lista de clientes de un plan específico según su ID",
                parameters: [
                    {
                        name: "authorization",
                        in: "header",
                        required: true,
                        type: "string",
                        description: "Bearer token",
                    },
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        type: "integer",
                    },
                ],
                responses: {
                    200: {
                        description: "Clientes del plan obtenidos exitosamente",
                        schema: {
                            type: "array",
                            items: {
                                $ref: "#/definitions/Client",
                            },
                        },
                    },
                    404: {
                        description: "Error al obtener los clientes del plan",
                    },
                },
            },
        },
        "/company": {
            get: {
                tags: ["Company"],
                summary: "Obtener todas las empresas",
                description:
                    "Devuelve una lista de todas las empresas registradas",
                parameters: [
                    {
                        name: "authorization",
                        in: "header",
                        required: true,
                        type: "string",
                        description: "Bearer token",
                    },
                ],
                responses: {
                    200: {
                        description: "Empresas obtenidas exitosamente",
                        schema: {
                            type: "array",
                            items: {
                                $ref: "#/definitions/Company",
                            },
                        },
                    },
                    400: {
                        description: "Error al obtener las empresas",
                    },
                },
            },
            post: {
                tags: ["Company"],
                summary: "Crear una nueva empresa",
                description:
                    "Crea una nueva empresa con los datos proporcionados",
                parameters: [
                    {
                        name: "authorization",
                        in: "header",
                        required: true,
                        type: "string",
                        description: "Bearer token",
                    },
                    {
                        name: "body",
                        in: "body",
                        required: true,
                        schema: {
                            $ref: "#/definitions/NewCompany",
                        },
                    },
                ],
                responses: {
                    201: {
                        description: "Empresa creada exitosamente",
                    },
                    401: {
                        description: "Error al crear la empresa",
                    },
                },
            },
        },
        "/company/{id}": {
            get: {
                tags: ["Company"],
                summary: "Obtener empresa por ID",
                description: "Devuelve una empresa específica según su ID",
                parameters: [
                    {
                        name: "authorization",
                        in: "header",
                        required: true,
                        type: "string",
                        description: "Bearer token",
                    },
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        type: "integer",
                    },
                ],
                responses: {
                    200: {
                        description: "Empresa obtenida exitosamente",
                        schema: {
                            $ref: "#/definitions/Company",
                        },
                    },
                    404: {
                        description:
                            "La empresa con el ID especificado no existe",
                    },
                    401: {
                        description: "Error al obtener la empresa",
                    },
                },
            },
            put: {
                tags: ["Company"],
                summary: "Actualizar una empresa por ID",
                description:
                    "Actualiza una empresa específica según su ID con los datos proporcionados",
                parameters: [
                    {
                        name: "authorization",
                        in: "header",
                        required: true,
                        type: "string",
                        description: "Bearer token",
                    },
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        type: "integer",
                    },
                    {
                        name: "body",
                        in: "body",
                        required: true,
                        schema: {
                            $ref: "#/definitions/UpdateCompany",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "Empresa actualizada exitosamente",
                    },
                    401: {
                        description: "Error al actualizar la empresa",
                    },
                },
            },
            delete: {
                tags: ["Company"],
                summary: "Eliminar una empresa por ID",
                description: "Elimina una empresa específica según su ID",
                parameters: [
                    {
                        name: "authorization",
                        in: "header",
                        required: true,
                        type: "string",
                        description: "Bearer token",
                    },
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        type: "integer",
                    },
                ],
                responses: {
                    204: {
                        description: "Empresa eliminada exitosamente",
                    },
                    400: {
                        description: "Error al eliminar la empresa",
                    },
                },
            },
        },
        "/level": {
            get: {
                tags: ["Level"],
                summary: "Obtener todos los niveles",
                description: "Retorna una lista de todos los niveles",
                parameters: [
                    {
                        name: "authorization",
                        in: "header",
                        required: true,
                        type: "string",
                        description: "Bearer token",
                    },
                ],
                responses: {
                    200: {
                        description: "Lista de niveles",
                        schema: {
                            type: "array",
                            items: { $ref: "#/definitions/Level" },
                        },
                    },
                    400: {
                        description: "Error al obtener los niveles",
                    },
                },
            },
            post: {
                tags: ["Level"],
                summary: "Crear un nuevo nivel",
                description: "Crea un nuevo nivel con los datos proporcionados",
                parameters: [
                    {
                        name: "authorization",
                        in: "header",
                        required: true,
                        type: "string",
                        description: "Bearer token",
                    },
                    {
                        name: "level",
                        in: "body",
                        required: true,
                        schema: { $ref: "#/definitions/NewLevel" },
                    },
                ],
                responses: {
                    201: {
                        description: "Nivel creado exitosamente",
                        schema: { $ref: "#/definitions/Level" },
                    },
                    400: {
                        description: "Error al crear el nivel",
                    },
                },
            },
        },
        "/level/{id}": {
            put: {
                tags: ["Level"],
                summary: "Actualizar un nivel por ID",
                description: "Actualiza un nivel específico según su ID",
                parameters: [
                    {
                        name: "authorization",
                        in: "header",
                        required: true,
                        type: "string",
                        description: "Bearer token",
                    },
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        type: "integer",
                    },
                    {
                        name: "level",
                        in: "body",
                        required: true,
                        schema: { $ref: "#/definitions/UpdateLevel" },
                    },
                ],
                responses: {
                    200: {
                        description: "Nivel actualizado exitosamente",
                        schema: { $ref: "#/definitions/Level" },
                    },
                    400: {
                        description: "Error al actualizar el nivel",
                    },
                },
            },
            get: {
                tags: ["Level"],
                summary: "Obtener un nivel por ID",
                description: "Retorna un nivel específico según su ID",
                parameters: [
                    {
                        name: "authorization",
                        in: "header",
                        required: true,
                        type: "string",
                        description: "Bearer token",
                    },
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        type: "integer",
                    },
                ],
                responses: {
                    200: {
                        description: "Nivel encontrado",
                        schema: { $ref: "#/definitions/Level" },
                    },
                    404: {
                        description: "Nivel no encontrado",
                    },
                },
            },
            delete: {
                tags: ["Level"],
                summary: "Eliminar un nivel por ID",
                description: "Elimina un nivel específico según su ID",
                parameters: [
                    {
                        name: "authorization",
                        in: "header",
                        required: true,
                        type: "string",
                        description: "Bearer token",
                    },
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        type: "integer",
                    },
                ],
                responses: {
                    204: {
                        description: "Nivel eliminado exitosamente",
                    },
                    500: {
                        description: "Error al eliminar el nivel",
                    },
                },
            },
        },
    },
    definitions: {
        Client: {
            type: "object",
            properties: {
                client_id: { type: "integer" },
                fullName: { type: "string" },
                email: { type: "string" },
                phone: { type: "string" },
                planPlanId: { type: "integer" },
                companyCompanyId: { type: "integer" },
            },
        },
        NewClient: {
            type: "object",
            required: [
                "fullName",
                "email",
                "phone",
                "planPlanId",
                "companyCompanyId",
            ],
            properties: {
                fullName: { type: "string" },
                email: { type: "string" },
                phone: { type: "string" },
                planPlanId: { type: "integer" },
                companyCompanyId: { type: "integer" },
            },
        },
        User: {
            type: "object",
            properties: {
                id: { type: "integer" },
                fullName: { type: "string" },
                email: { type: "string" },
                role: { type: "string" },
                password: { type: "string" },
            },
            required: ["id", "fullName", "email", "role", "password"],
        },
        UpdateUser: {
            type: "object",
            properties: {
                fullName: { type: "string" },
                email: { type: "string" },
                role: { type: "string" },
                password: { type: "string" },
            },
        },
        NewUser: {
            type: "object",
            properties: {
                fullName: { type: "string" },
                email: { type: "string" },
                role: { type: "string" },
                password: { type: "string" },
            },
            required: ["fullName", "email", "role", "password"],
        },
        UpdateClient: {
            type: "object",
            properties: {
                fullName: { type: "string" },
                email: { type: "string" },
                phone: { type: "string" },
                planPlanId: { type: "integer" },
                companyCompanyId: { type: "integer" },
            },
        },
        ClientAllData: {
            type: "object",
            properties: {
                id: { type: "integer" },
                fullName: { type: "string" },
                email: { type: "string" },
                phone: { type: "string" },
                plan: {
                    type: "object",
                    properties: {
                        description: { type: "string" },
                        cost: { type: "string" },
                    },
                },
                company: {
                    type: "object",
                    properties: {
                        business_name: { type: "string" },
                        nit: { type: "string" },
                    },
                },
            },
        },
        Plan: {
            type: "object",
            properties: {
                plan_id: { type: "integer" },
                description: { type: "string" },
                cost: { type: "string" },
                levelLevelId: { type: "integer" },
            },
        },
        NewPlan: {
            type: "object",
            properties: {
                description: { type: "string" },
                cost: { type: "string" },
                levelLevelId: { type: "integer" },
            },
            required: ["description", "cost", "levelLevelId"],
        },
        UpdatePlan: {
            type: "object",
            properties: {
                description: { type: "string" },
                cost: { type: "string" },
                levelLevelId: { type: "integer" },
            },
        },
        Company: {
            type: "object",
            properties: {
                company_id: { type: "integer" },
                business_name: { type: "string" },
                nit: { type: "string" },
            },
        },
        NewCompany: {
            type: "object",
            properties: {
                business_name: { type: "string" },
                nit: { type: "string" },
            },
            required: ["business_name", "nit"],
        },
        UpdateCompany: {
            type: "object",
            properties: {
                business_name: { type: "string" },
                nit: { type: "string" },
            },
        },
        Level: {
            type: "object",
            properties: {
                id: { type: "integer" },
                level_type: { type: "string" },
            },
        },
        NewLevel: {
            type: "object",
            properties: {
                level_type: { type: "string" },
            },
        },
        UpdateLevel: {
            type: "object",
            properties: {
                level_type: { type: "string" },
            },
        },
    },
};
