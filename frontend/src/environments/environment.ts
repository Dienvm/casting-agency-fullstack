/* @DONE replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: "https://casting-agency-fullstack.onrender.com", // the running FLASK api server url
  auth0: {
    url: "dev-grlenktqc7tpvttd.us", // the auth0 domain prefix
    audience: "dev", // the audience set for the auth0 app
    clientId: "7xfZ0qhJqdjuTT3lGEQPkDyQlXjSxi67", // the client id generated for the auth0 app
    callbackURL: "https://casting-agency-fullstack-1.onrender.com", // the base url of the running ionic application.
  },
};
