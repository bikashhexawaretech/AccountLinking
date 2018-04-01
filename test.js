var facebookAuthEndpoint="https://accounts.google.com/o/oauth2/token?";
var clientId = "1096250870035-f72i9rckit64qpejr89ronu7s4m3qd9j.apps.googleusercontent.com";  //service now
//var redirectUrl = "https://servicenowhex.herokuapp.com";
var Accesstokenurl="accounts.google.com/o/oauth2/token";
var AuthUrl="accounts.google.com/o/oauth2/auth";
var scope="www.googleapis.com/auth/admin.directory.customer";
var clientSecret="x6BASc1hfrEY6pyAbYV_o7Nr";
//var url=facebookAuthEndpoint+'client_id='+clientId+'&redirect_uri='+redirectUrl+'&approval_prompt=force&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email&access_type=offline';
//var url=facebookAuthEndpoint+'client_id='+clientId+'&access_token_url='+Accesstokenurl+'&auth_url='+AuthUrl+'&scope='+scope+'&redirect_uri='+redirectUrl+'&approval_prompt=force&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email&access_type=offline';
//var url=facebookAuthEndpoint+'client_id='+clientId+'&redirect_uri='+redirectUrl+'&response_type=code'+'&scope='+scope+'&login_hint=jsmith@example.com&openid.realm=example.com&nonce=0394852-3190485-2490358&hd=example.com';
var url=facebookAuthEndpoint+'client_secret='+clientSecret+'&auth_url='+AuthUrl+'&client_id='+clientId+'&response_type=code'+'&scope='+scope+'&grant_type=authorization_code';
console.log(url);