import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'My Express API',
            version: '1.0.0',
            description: 'Auto-generated Swagger from JSDoc',
        },
    },
    apis: ['./index.ts', './routes/*.ts']
};

const swaggerSpec = swaggerJsdoc(options);
export default swaggerSpec;
