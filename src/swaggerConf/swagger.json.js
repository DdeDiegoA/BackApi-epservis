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
            description: "The users that will use the system",
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
                summary: "get the only the all client",
                description: "Return a list of the all clients in the system",
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
                        description: "Customer List Succesfully Obtained",
                        schema: {
                            type: "array",
                            items: {
                                $ref: "#/definitions/Client",
                            },
                        },
                    },
                    500: {
                        description: "Error getting customer list",
                    },
                },
            },
            post: {
                tags: ["Client"],
                summary: "Create a new client",
                description: "Create a new customer with the data provided",
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
                        description: "Client created successfully",
                    },
                    400: {
                        description: "Error creating client",
                    },
                },
            },
        },
        "/client/{id}": {
            get: {
                tags: ["Client"],
                summary: "Get a customer by ID",
                description: "Returns a specific customer based on their ID",
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
                        description: "Client successfully obtained",
                        schema: {
                            $ref: "#/definitions/Client",
                        },
                    },
                    404: {
                        description: "The client does not exist",
                    },
                    500: {
                        description: "Error getting client",
                    },
                },
            },
            put: {
                tags: ["Client"],
                summary: "Update a client",
                description: "Edit a specific customer based on their ID",
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
                        description: "Client Updated succesfully",
                    },
                    400: {
                        description: "Error updatting client",
                    },
                },
            },
            delete: {
                tags: ["Client"],
                summary: "Delete a client",
                description: "Delete a specific customer based on their ID",
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
                        description: "Client deleted succesfully",
                    },
                    401: {
                        description: "Error deletting client",
                    },
                },
            },
        },
        "/client-data": {
            get: {
                tags: ["Client"],
                summary: "Get all customers with their plan and company data",
                description:
                    "Returns a list of all customers with their plan and company data",
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
                        description: "Customer List Successfully Obtained",
                        schema: {
                            type: "array",
                            items: {
                                $ref: "#/definitions/ClientAllData",
                            },
                        },
                    },
                    500: {
                        description: "Error getting customer list",
                    },
                },
            },
        },
        "/client-data/{id}": {
            get: {
                tags: ["Client"],
                summary: "Get all data of a customer by ID",
                description:
                    "Returns all data for a specific customer based on their ID",
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
                        description: "Customer data successfully obtained",
                        schema: {
                            $ref: "#/definitions/ClientAllData",
                        },
                    },
                    404: {
                        description:
                            "The client with the specified ID does not exist",
                    },
                    500: {
                        description: "Error getting customer data",
                    },
                },
            },
        },
        "/user": {
            get: {
                tags: ["User"],
                summary: "get all users",
                description: "Returns a list of all users",

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
                        description: "User list fetched successfully",
                        schema: {
                            type: "array",
                            items: {
                                $ref: "#/definitions/User",
                            },
                        },
                    },
                    500: {
                        description: "Error getting user list",
                    },
                },
            },
        },
        "/user/{id}": {
            get: {
                tags: ["User"],
                summary: "Get a user by ID",
                description: "Returns a specific user based on their ID",
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
                        description: "User obtained successfully",
                        schema: {
                            $ref: "#/definitions/User",
                        },
                    },
                    404: {
                        description: "Username does not exist",
                    },
                    500: {
                        description: "Error getting user",
                    },
                },
            },
            put: {
                tags: ["User"],
                summary: "update a user",
                description: "Update a user based on their ID",
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
                        description: "User updated successfully",
                    },
                    400: {
                        description: "Failed to update user",
                    },
                },
            },
            delete: {
                tags: ["User"],
                summary: "Delete a user",
                description: "Delete a user based on their ID",
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
                        description: "User deleted successfully",
                    },
                    400: {
                        description: "Failed to delete user",
                    },
                },
            },
        },
        "/register": {
            post: {
                tags: ["User"],
                summary: "Create a new user",
                description: "Create a new user with the data provided",
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
                        description: "User created successfully",
                    },
                    400: {
                        description: "Error creating user",
                    },
                },
            },
        },
        "/login": {
            post: {
                tags: ["User"],
                summary: "login user",
                description: "Login a user with their email and password",
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
                        description: "Session started successfully",
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
                        description: "Username does not exist",
                    },
                    409: {
                        description: "Invalid password",
                    },
                    400: {
                        description: "failed to login",
                    },
                },
            },
        },
        "/plan": {
            get: {
                tags: ["Plans"],
                summary: "Get all plans",
                description: "Returns a list of all plans",
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
                        description: "List of plans obtained successfully",
                        schema: {
                            type: "array",
                            items: {
                                $ref: "#/definitions/Plan",
                            },
                        },
                    },
                    500: {
                        description: "Error getting list of plans",
                    },
                },
            },
            post: {
                tags: ["Plans"],
                summary: "Create a new plan",
                description: "Create a new plan with the data provided",
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
                        description: "Plan created successfully",
                    },
                    401: {
                        description: "Failed to create plan",
                    },
                },
            },
        },
        "/plan/{id}": {
            get: {
                tags: ["Plans"],
                summary: "Get a plan by ID",
                description: "Returns a specific plan based on its ID",
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
                        description: "plan obtained successfully",
                        schema: {
                            $ref: "#/definitions/Plan",
                        },
                    },
                    404: {
                        description:
                            "The plan with the specified ID does not exist",
                    },
                    500: {
                        description: "Failed to get plan",
                    },
                },
            },
            put: {
                tags: ["Plans"],
                summary: "Upgrade a plan by ID",
                description:
                    "Upgrade a specific plan based on your ID with the data provided",
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
                        description: "Plan updated successfully",
                    },
                    401: {
                        description: "Failed to update plan",
                    },
                },
            },
            delete: {
                tags: ["Plans"],
                summary: "Delete a plan by ID",
                description: "Delete a specific plan based on its ID",
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
                        description: "Plan removed successfully",
                    },
                    401: {
                        description: "Failed to delete plan",
                    },
                },
            },
        },
        "/plan/{id}/client": {
            get: {
                tags: ["Plans"],
                summary: "Get customers from a plan by ID",
                description:
                    "Returns a list of customers of a specific plan based on their ID",
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
                        description: "Successfully Obtained Plan Clients",
                        schema: {
                            type: "array",
                            items: {
                                $ref: "#/definitions/Client",
                            },
                        },
                    },
                    404: {
                        description: "Error getting plan customers",
                    },
                },
            },
        },
        "/company": {
            get: {
                tags: ["Company"],
                summary: "Get all companies",
                description: "Returns a list of all registered companies",
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
                        description: "Successfully obtained companies",
                        schema: {
                            type: "array",
                            items: {
                                $ref: "#/definitions/Company",
                            },
                        },
                    },
                    400: {
                        description: "Error getting companies",
                    },
                },
            },
            post: {
                tags: ["Company"],
                summary: "Create a new company",
                description: "Create a new company with the data provided",
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
                        description: "company created successfully",
                    },
                    401: {
                        description: "Error creating company",
                    },
                },
            },
        },
        "/company/{id}": {
            get: {
                tags: ["Company"],
                summary: "Get company by ID",
                description: "Returns a specific company based on its ID",
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
                        description: "company successfully obtained",
                        schema: {
                            $ref: "#/definitions/Company",
                        },
                    },
                    404: {
                        description:
                            "The company with the specified ID does not exist",
                    },
                    401: {
                        description: "Error getting company",
                    },
                },
            },
            put: {
                tags: ["Company"],
                summary: "Update a company by ID",
                description:
                    "Updates a specific company based on its ID with the data provided",
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
                        description: "Company successfully upgraded",
                    },
                    401: {
                        description: "Error updating company",
                    },
                },
            },
            delete: {
                tags: ["Company"],
                summary: "Delete a company by ID",
                description: "Delete a specific company based on its ID",
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
                        description: "Company successfully removed",
                    },
                    400: {
                        description: "Error deleting company",
                    },
                },
            },
        },
        "/level": {
            get: {
                tags: ["Level"],
                summary: "get all levels",
                description: "Returns a list of all levels",
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
                        description: "Tier List",
                        schema: {
                            type: "array",
                            items: { $ref: "#/definitions/Level" },
                        },
                    },
                    400: {
                        description: "Error getting levels",
                    },
                },
            },
            post: {
                tags: ["Level"],
                summary: "Create a new level",
                description: "Create a new level with the data provided",
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
                        description: "level created successfully",
                        schema: { $ref: "#/definitions/Level" },
                    },
                    400: {
                        description: "Error creating level",
                    },
                },
            },
        },
        "/level/{id}": {
            put: {
                tags: ["Level"],
                summary: "Update a level by ID",
                description: "Upgrade a specific level based on its ID",
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
                        description: "Level upgraded successfully",
                        schema: { $ref: "#/definitions/Level" },
                    },
                    400: {
                        description: "Error updating level",
                    },
                },
            },
            get: {
                tags: ["Level"],
                summary: "Get a level by ID",
                description: "Returns a specific level based on its ID",
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
                        description: "level found",
                        schema: { $ref: "#/definitions/Level" },
                    },
                    404: {
                        description: "level not found",
                    },
                },
            },
            delete: {
                tags: ["Level"],
                summary: "Delete a level by ID",
                description: "Delete a specific level based on its ID",
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
                        description: "level successfully removed",
                    },
                    500: {
                        description: "Error deleting level",
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
