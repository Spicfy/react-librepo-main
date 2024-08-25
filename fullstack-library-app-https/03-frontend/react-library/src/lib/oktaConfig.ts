export const oktaConfig = {
    clientId: '0oain4u2pd2LwHHxu5d7',
    issuer: 'https://dev-51543302.okta.com/oauth2/default',
    redirectUri: 'https://libraryrepo.duckdns.org/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}