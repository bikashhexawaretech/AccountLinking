var request = require("request");

module.exports = {
    'logIncident' : function(desc, severity,category, callback){

        console.log("Post");
        var options = { method: 'POST',
          url: 'https://dev18442.service-now.com/api/now/v1/table/incident',
          headers:
           { 'postman-token': 'd6253bf3-ff31-fb21-7741-3dd02c84e8bb',
             'cache-control': 'no-cache',
             authorization: 'Basic MzMyMzg6YWJjMTIz',
             'content-type': 'application/json' },
          body:
           { short_description: desc,
             caller_id: 'Pourab Karchaudhuri',
             urgency: severity ,
             comments: 'Chatbot Testing',
            category:category
           },
          json: true };

        request(options, function (error, response, body) {
          if (error) throw new Error(error);

         // console.log("Success : "+body);
          callback(null, body);
        });
    },
    'statusIncident' : function(ticketnumber, callback){

        console.log("Get");
        var options = { method: 'GET',
          url: 'https://dev18442.service-now.com/api/now/v1/table/incident',
          qs: { number: ticketnumber },
          headers:
           { 'postman-token': '5441f224-d11a-2f78-69cd-51e58e2fbdb6',
             'cache-control': 'no-cache',
             authorization: 'Basic MzMyMzg6YWJjMTIz',
             'content-type': 'application/json'  } };

        request(options, function (error, response, body) {
          if (error) throw new Error(error);

          //console.log("Success : "+body);
          callback(null, body);
        });
    },
    'GOOGLEAPIPOSTCALL' : function(code, callback){

      console.log("Post");
      var options = { method: 'POST',
        url: 'https://accounts.google.com/o/oauth2/token',
        headers:
         {  
           'content-type': 'application/x-www-form-urlencoded' },
        body:
         {
          grant_type:'authorization_code', 
          code: code,
          client_id: '657702593596-95ainiutsgmm95eipvf5f6eqe7t45rhu.apps.googleusercontent.com',
          client_secret: 'qo9_ipjpykVrpjsjiozy6a6y' ,
          redirect_uri: "https://servicenowhex.herokuapp.com"
         
         },
        json: true };

      request(options, function (error, response, body) {
        if (error) throw new Error(error);

       // console.log("Success : "+body);
        callback(null, body);
      });
  }


}


function getProfile (cb) {
  request({
   method: 'GET',
   uri: 'https://graph.facebook.com/me',
   qs: {
    
 access_token: 'EAACdyZATFKroBAEd9NSDzM4ck602h96GoEHeUrFtfKmqYMKV22T5z2n14tvHUn97WDzOBepZAhZAeVSFSdPIj8A68AmZAfTZBVwUWZAaZChmNMAkvbaJjuPrjo69q8B7CU0ME3MjEMEuDNmYDWfsabHXsYH53IJqH95KQuwdN2YR1TNd3YpBFpd4ZBOE7BkwgM0ZD'
 },
  json: true
  }, (err, res, body) => {
   if (err) return cb(err)
   if (body.error) return cb(body.error)
   cb(null, body)
  })
 }

 


 

 module.exports.getProfile=getProfile;
 