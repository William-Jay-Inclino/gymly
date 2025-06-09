module.exports = {
    apps: [
        {
            name: 'gymly-backend',
            script: './scripts/start_gymly.sh',
            cwd: __dirname, 
            listen_timeout: 10000,
        },
    ]
};
