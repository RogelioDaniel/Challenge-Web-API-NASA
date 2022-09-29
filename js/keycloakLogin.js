
var keycloak = Keycloak('../keycloak.json');
keycloak.init({  onLoad: 'login-required', 
responseMode: 'fragment',
        flow: 'standard',  promiseType: 'native', checkLoginIframe: false }).then(function(auth) {
        
    if(!auth) {
        window.location.reload();
    } else {
        console.info("Authenticated");
    }        


});


function loadUserInfo() {
    keycloak
      .loadUserInfo()
      .success(function (userInfo) {
        output(userInfo);
      })
      .error(function () {
        output("Failed to load user info");
      });
  }