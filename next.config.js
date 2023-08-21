/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
        {
            protocol:'https',
            hostname:'raw.githubusercontent.com',
            port:'',
            pathname:'/JUNNY12/portfoliopost/main/image/**'
        }
        ]
    }
}

module.exports = nextConfig
