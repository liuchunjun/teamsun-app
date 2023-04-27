const server = {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    proxy: {
        '/v1/': {
            target: 'http://172.16.191.67:30200',
            changeOrigin: true,
            rewrite: (path) => path
        }
    }
}

export default server
