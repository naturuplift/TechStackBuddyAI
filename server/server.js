require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const axios = require('axios');
const logger = require('morgan');
const db = require('./config/connection');

let InMemoryLRUCache;
try {
    const caching = require('apollo-server-caching');
    InMemoryLRUCache = caching.InMemoryLRUCache;
} catch (err) {
    console.error('Failed to load apollo-server-caching:', err);
    process.exit(1);
}

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
// const { formatError, errorLoggingPlugin } = require('./utils/apolloBugHunter');

const corsOptions = {
    origin: process.env.CORS_ORIGIN || 'http://localhost:3001',
    optionsSuccessStatus: 200
};

async function startApolloServer() {
    const PORT = process.env.PORT || 3001;
    const app = express();
    
    app.use(cors(corsOptions));
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.static('public'));

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: async ({ req }) => ({ ...authMiddleware(req) }),
        introspection: process.env.NODE_ENV !== 'production',
        playground: process.env.NODE_ENV !== 'production',
        cache: new InMemoryLRUCache ? new InMemoryLRUCache({
            maxSize: 10000000,
            ttl: 600000
        }) : undefined
    });

    await server.start();
    server.applyMiddleware({ app, path: '/graphql' });

    app.post('/openai', async (req, res) => {
        const { query } = req.body;
        try {
            const response = await axios.post('https://api.openai.com/v1/chat/completions', {
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "The assistant is a senior software engineer helping project managers and developers." },
                    { role: "user", content: query }
                ],
                temperature: 0.7,
                max_tokens: 150,
                top_p: 1.0,
                frequency_penalty: 0.0,
                presence_penalty: 0.0
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
                }
            });
            res.json({ message: response.data.choices[0].message.content });
        } catch (error) {
            console.error('Error calling OpenAI API:', error);
            res.status(500).send('Failed to get response from OpenAI');
        }
    });

    db.once('open', () => {
        app.listen(PORT, '0.0.0.0', () => {
            console.log(`🚀 Server ready at http://0.0.0.0:${PORT}${server.graphqlPath}`);
        });
    }).on('error', (error) => {
        console.error('Database connection error:', error);
        process.exit(1);
    });
}

startApolloServer(typeDefs, resolvers);
