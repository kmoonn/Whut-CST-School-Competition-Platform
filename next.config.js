module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',  // 支持 http 协议
                hostname: '**',    // 支持所有域名
                port: '',          // 默认端口
                pathname: '**',    // 支持所有路径
            },
            {
                protocol: 'https', // 支持 https 协议
                hostname: '**',    // 支持所有域名
                port: '',          // 默认端口
                pathname: '**',    // 支持所有路径
            }
        ],
    },
    output: 'export',
}