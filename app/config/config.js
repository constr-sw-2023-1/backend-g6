module.exports = {
    port: process.env.PORT || 3000,
    baseApiUrl: process.env.BASE_API_URL || 'http://localhost:8090/auth/realms/Grupo-06',
    clientId: process.env.CLIENT_ID || 'grupo06',
    clientSecret: process.env.CLIENT_SECRET || 'KDP40Ue5YHJQDFuSD8bfVCRqcus44nq8',
    grantType: process.env.GRANT_TYPE || 'password',
};
