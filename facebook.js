

 var fbQuickReply =function fbQuick(){
    var facebookResponse={
        "speech": "",
      "messages": [
        {
          "type": 1,
          "platform": "facebook",
          "title": "Select Category",
          "subtitle": "",
          "imageUrl": "http://www.cromacampus.com/wp-content/uploads/2017/05/servicenow-tool-training.png",
          "buttons": [
            {
              "text": "Hardware",
              "postback": "Hardware"
            },
            {
              "text": "Software",
              "postback": "Software"
            },
            {
              "text": "Network",
              "postback": "Network"
            }
          ]
        }
        
        
      ]
     }
     return facebookResponse;
  }


  var fbCard =function Card(){
    var facebookResponse={
        "speech": "",
      "messages": [
        {
            "type": 1,
            "platform": "facebook",
            "title": "Service Now",
            "subtitle": "Service Now",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuMtsITwe5WS-AQVOvxrB3ZZ14_l2lLei0J6oOFYtHjLqv6oyxEA",
            "buttons": [
              {
                "text": "Hardware",
                "postback": "Hardware"
              },
              {
                "text": "Software",
                "postback": "Software"
              }
            ]
        }
        
        
      ]
     }
     return facebookResponse;
  }

var fbList=function list(){
    var facebookResponse={
        "speech":"",
        "messages":[
            {
                "type": 4,
                "platform": "facebook",
                "payload": {
                  "facebook": {
                    "attachment": {
                      "type": "template",
                      "payload": {
                        "template_type": "list",
                        "top_element_style": "large",
                        "elements": [
                          {
                            "title": "Classic White T-Shirt",
                            "image_url": "http://doughnutkitten.com/PNGs/1_doughnut_kitten_Tania_Hennessy.png",
                            "subtitle": "Soft white cotton t-shirt is back in style",
                            "buttons": [
                              {
                                "type": "web_url",
                                "url": "https://petersapparel.parseapp.com/view_item?item_id=100",
                                "title": "View Item"
                              }
                            ]
                          },
                          {
                            "title": "Classic Grey T-Shirt",
                            "image_url": "http://doughnutkitten.com/PNGs/1_doughnut_kitten_Tania_Hennessy.png",
                            "subtitle": "Soft gray cotton t-shirt is back in style",
                            "buttons": [
                              {
                                "type": "web_url",
                                "url": "https://petersapparel.parseapp.com/view_item?item_id=101",
                                "title": "View Item"
                              }
                            ]
                          }
                        ]
                      }
                    }
                  }
                }
              }
        ]
    }
    return facebookResponse;
}

var fbGeneric=function Generic(){
  var facebookResponse={
    "speech":"",
    "messages":[
      {
        "type": 4,
        "platform": "facebook",
        "payload": {
          "facebook": {
            "attachment": {
              "type": "template",
              "payload": {
                "template_type": "generic",
                "elements": [
                  {
                    "title": "Smurfs: The Lost Village (2017)",
                    "image_url": "https://www.moovrika.com/ext/makeimg.php?tbl=movies&id=15666&img=1&type=image&movie=Smurfs+The+Lost+Village&fs=400",
                    "subtitle": "Smurfette attempts to find her purpose in the village. When she encounters a creature in the Forbidden Forest who drops a mysterious map, she sets off with her friends Brainy, Clumsy, and Hefty on an adventure to find the Lost Village before the evil wizard Gargamel does.",
                    "default_action": {
                      "type": "web_url",
                      "url": "https://www.moovrika.com/m/15666",
                      "webview_height_ratio": "tall"
                    },
                    "buttons": [
                      {
                        "title": "more info",
                        "type": "web_url",
                        "url": "https://www.moovrika.com/m/4082",
                        "webview_height_ratio": "tall"
                      },
                      {
                        "title": "View trailer",
                        "type": "web_url",
                        "url": "https://www.moovrika.com/m/4082",
                        "webview_height_ratio": "tall"
                      }
                    ]
                  },
                  {
                    "title": "Resident Evil: The Final Chapter (2017)",
                    "image_url": "https://www.moovrika.com/ext/makeimg.php?tbl=movies&id=4167&img=1&type=image&movie=Resident+Evil+The+Final+Chapter&fs=400",
                    "subtitle": "Resident Evil: The Final Chapter is an upcoming science fiction action horror film written and directed by Paul W. S. Anderson. It is the sequel to Resident Evil: Retribution (2012), and will be the sixth and final installment in the Resident Evil film series, which is very loosely based on the Capcom survival horror video game series Resident Evil.",
                    "default_action": {
                      "type": "web_url",
                      "url": "https://www.moovrika.com/m/4167",
                      "webview_height_ratio": "tall"
                    },
                    "buttons": [
                      {
                        "title": "more info",
                        "type": "web_url",
                        "url": "https://www.moovrika.com/m/4082",
                        "webview_height_ratio": "tall"
                      }
                    ]
                  }
                ]
              }
            }
          }
        }
      },
      {
        "type": 4,
        "platform": "facebook",
        "payload": {
          "facebook": {
            "attachment": {
              "type": "template",
              "payload": {
                "template_type": "button",
                "text": "Try the log out button!",
                "buttons": [
                  {
                    "type": "account_unlink"
                    }
                ]
              }
            }
          }
        }
      }
    ]
}
  return facebookResponse;
}
 



function logout() {
  var facebookResponse={ 
  "speech":"",
  "messages":[
      {
    "type": 4,
    "platform": "facebook",
    "payload": {
      "facebook": {
        "attachment": {
          "type": "template",
          "payload": {
            "template_type": "button",
            "text": "Log Out!",
            "buttons": [
              {
                "type": "account_unlink"
              }
            ]
          }
        }
      }
    }
      }
    ]
  }
  return facebookResponse;
}

var facebookAuthEndpoint = "https://www.facebook.com/v2.10/dialog/oauth?";
var clientId = "173489109936826";  //service now
var redirectUrl = "https://servicenowhex.herokuapp.com/callback";
var url=facebookAuthEndpoint+'app_id='+clientId+'&redirect_uri='+redirectUrl;




/*
var facebookAuthEndpoint="https://accounts.google.com/o/oauth2/token?";
var clientId = "1096250870035-7bdfg2fjgi3dma1p6b0ptqg39h7cq4gs.apps.googleusercontent.com";  //service now
//var redirectUrl = "https://servicenowhex.herokuapp.com";
var Accesstokenurl="accounts.google.com/o/oauth2/token";
var AuthUrl="accounts.google.com/o/oauth2/auth";
var scope="https://www.googleapis.com/auth/userinfo.email";
var clientSecret="qo9_ipjpykVrpjsjiozy6a6y";
//var url=facebookAuthEndpoint+'client_id='+clientId+'&redirect_uri='+redirectUrl+'&approval_prompt=force&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email&access_type=offline';
//var url=facebookAuthEndpoint+'client_id='+clientId+'&access_token_url='+Accesstokenurl+'&auth_url='+AuthUrl+'&scope='+scope+'&redirect_uri='+redirectUrl+'&approval_prompt=force&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email&access_type=offline';
//var url=facebookAuthEndpoint+'client_id='+clientId+'&redirect_uri='+redirectUrl+'&response_type=code'+'&scope='+scope+'&login_hint=jsmith@example.com&openid.realm=example.com&nonce=0394852-3190485-2490358&hd=example.com';
//var url=facebookAuthEndpoint+'client_secret='+clientSecret+'&client_id='+clientId+'&response_type=code'+'&scope='+scope+'&grant_type=authorization_code';
var url='https://accounts.google.com/o/oauth2/auth?client_id=1096250870035-f72i9rckit64qpejr89ronu7s4m3qd9j.apps.googleusercontent.com&response_type=code&redirect_uri=https://servicenowhex.herokuapp.com&scope=https://www.googleapis.com/auth/userinfo.email&access_type=offline';

*/

var fbWebView=function webView(){
  var facebookResponse={
    "speech":"",
    "messages":[
      {
        "type": 4,
        "platform": "facebook",
        "payload": {
          "facebook": {
            "attachment": {
              "type": "template",
              "payload": {
                "template_type": "button",
                "text": "Please login to continue!",
                "buttons": [
                  {
                    "type":"account_link",
                    "url":'https://servicenowhex.herokuapp.com/login'
                  }
                ]
              }
            }
          }
        }
      }
     
      
    ]
}
  return facebookResponse;
}


  module.exports.fbQuickReply=fbQuickReply;
  module.exports.fbCard=fbCard;
  module.exports.fbList=fbList;
  module.exports.fbGeneric=fbGeneric;
  module.exports.fbWebView=fbWebView;
  module.exports.logout=logout;
   
  // Custom payload

  //List

  /*

  {
    "facebook": {
      "attachment":{
        "type":"template",
        "payload":{
          "template_type":"receipt",
          "recipient_name":"Stephane Crozatier",
          "order_number":"12345678902",
          "currency":"USD",
          "payment_method":"Visa 2345",        
          "order_url":"http://petersapparel.parseapp.com/order?order_id=123456",
          "timestamp":"1428444852",         
          "address":{
            "street_1":"1 Hacker Way",
            "street_2":"",
            "city":"Menlo Park",
            "postal_code":"94025",
            "state":"CA",
            "country":"US"
          },
          "summary":{
            "subtotal":75.00,
            "shipping_cost":4.95,
            "total_tax":6.19,
            "total_cost":56.14
          },
          "adjustments":[
            {
              "name":"New Customer Discount",
              "amount":20
            },
            {
              "name":"$10 Off Coupon",
              "amount":10
            }
          ],
          "elements":[
            {
              "title":"Classic White T-Shirt",
              "subtitle":"100% Soft and Luxurious Cotton",
              "quantity":2,
              "price":50,
              "currency":"USD",
              "image_url":"http://petersapparel.parseapp.com/img/whiteshirt.png"
            },
            {
              "title":"Classic Gray T-Shirt",
              "subtitle":"100% Soft and Luxurious Cotton",
              "quantity":1,
              "price":25,
              "currency":"USD",
              "image_url":"http://petersapparel.parseapp.com/img/grayshirt.png"
            }
          ]
        }
      }
    
    }
  }



  
  */


  //button template-custome payload

  /*
  {
    "facebook": {
      
        "attachment":{
        "type":"template",
        "payload":{
          "template_type":"button",
          "text":"What do you want to do next?",
          "buttons":[
            {
              "type":"web_url",
              "url":"https://www.messenger.com",
              "title":"Visit Messenger"
            }
             
          ]
        }
      }
    
    
    
    }
  }
  */


  //open graph

  /*


  "attachment":{
      "type":"template",
      "payload":{
        "template_type":"open_graph",
        "elements":[
           {
            "url":"https://open.spotify.com/track/7GhIk7Il098yCjg4BQjzvb",
            "buttons":[
              {
                "type":"web_url",
                "url":"https://en.wikipedia.org/wiki/Rickrolling",
                "title":"View More"
              }              
            ]      
          }
        ]
      }
    }
  }

  */


  //airline pass

  /*

  {
  "facebook": {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type": "airline_boardingpass",
        "intro_message": "You are checked in.",
        "locale": "en_US",
        "boarding_pass": [
          {
            "passenger_name": "SMITH\/NICOLAS",
            "pnr_number": "CG4X7U",
            "seat": "74J",            
            "logo_image_url": "https:\/\/www.example.com\/en\/logo.png",
            "header_image_url": "https:\/\/www.example.com\/en\/fb\/header.png",
            "qr_code": "M1SMITH\/NICOLAS  CG4X7U nawouehgawgnapwi3jfa0wfh",
            "above_bar_code_image_url": "https:\/\/www.example.com\/en\/PLAT.png",
            "auxiliary_fields": [
              {
                "label": "Terminal",
                "value": "T1"
              },
              {
                "label": "Departure",
                "value": "30OCT 19:05"
              }
            ],
            "secondary_fields": [
              {
                "label": "Boarding",
                "value": "18:30"
              },
              {
                "label": "Gate",
                "value": "D57"
              },
              {
                "label": "Seat",
                "value": "74J"
              },
              {
                "label": "Sec.Nr.",
                "value": "003"
              }
            ],
            "flight_info": {
              "flight_number": "KL0642",
              "departure_airport": {
                "airport_code": "JFK",
                "city": "New York",
                "terminal": "T1",
                "gate": "D57"
              },
              "arrival_airport": {
                "airport_code": "AMS",
                "city": "Amsterdam"
              },
              "flight_schedule": {
                "departure_time": "2016-01-02T19:05",
                "arrival_time": "2016-01-05T17:30"
              }
            }
          }
        ]
      }
    }
  }
  }


  */

  //Generic

  /*

  {
  "facebook": {
   "attachment": {

    "type": "template",
    "payload": {
        "template_type": "generic",
        "elements": [
            {
                "title": "Smurfs: The Lost Village (2017)",
                "image_url": "https://www.moovrika.com/ext/makeimg.php?tbl=movies&id=15666&img=1&type=image&movie=Smurfs+The+Lost+Village&fs=400",
                "subtitle": "Smurfette attempts to find her purpose in the village. When she encounters a creature in the Forbidden Forest who drops a mysterious map, she sets off with her friends Brainy, Clumsy, and Hefty on an adventure to find the Lost Village before the evil wizard Gargamel does.",
                "default_action": {
                    "type": "web_url",
                    "url": "https://www.moovrika.com/m/15666",
                    "webview_height_ratio": "tall"
                },
                "buttons": [
                    {
                        "title": "more info",
                        "type": "web_url",
                        "url": "https://www.moovrika.com/m/4082",
                        "webview_height_ratio": "tall"
                    },
                   {
                        "title": "View trailer",
                        "type": "web_url",
                        "url": "https://www.moovrika.com/m/4082",
                        "webview_height_ratio": "tall"
                    }
                ]
            },
            {
                "title": "Resident Evil: The Final Chapter (2017)",
                "image_url": "https://www.moovrika.com/ext/makeimg.php?tbl=movies&id=4167&img=1&type=image&movie=Resident+Evil+The+Final+Chapter&fs=400",
                "subtitle": "Resident Evil: The Final Chapter is an upcoming science fiction action horror film written and directed by Paul W. S. Anderson. It is the sequel to Resident Evil: Retribution (2012), and will be the sixth and final installment in the Resident Evil film series, which is very loosely based on the Capcom survival horror video game series Resident Evil.",
                "default_action": {
                    "type": "web_url",
                    "url": "https://www.moovrika.com/m/4167",
                    "webview_height_ratio": "tall"
                },
                "buttons": [
                    {
                        "title": "more info",
                        "type": "web_url",
                        "url": "https://www.moovrika.com/m/4082",
                        "webview_height_ratio": "tall"
                    }
                ]
            }
        ]
    }

}  
  }
}

*/


//List -Custom payload

/*

{
  "facebook": {
          
"attachment":{
          "type":"template",
          "payload":{
            "template_type":"list",
            "top_element_style":"large",
            "elements":[
              {
                "title":"Classic White T-Shirt",
                "image_url":"http://doughnutkitten.com/PNGs/1_doughnut_kitten_Tania_Hennessy.png",
                "subtitle":"Soft white cotton t-shirt is back in style",
                "buttons":[
                  {
                    "type":"web_url",
                    "url":"https://petersapparel.parseapp.com/view_item?item_id=100",
                    "title":"View Item"
                  }
                ]
              },
              {
                "title":"Classic Grey T-Shirt",
                "image_url":"http://doughnutkitten.com/PNGs/1_doughnut_kitten_Tania_Hennessy.png",
                "subtitle":"Soft gray cotton t-shirt is back in style",
                "buttons":[
                  {
                    "type":"web_url",
                    "url":"https://petersapparel.parseapp.com/view_item?item_id=101",
                    "title":"View Item"
                  }
                ]
              }
            ]
          }
}
}
}
        
      
    
  
  
*/

//Media

/*


{
  "facebook": {
    "attachment": {
      "type": "template",
      "payload": {
         "template_type": "media",
         "elements": [
            {
               "media_type": "image",
               "url": "https://www.facebook.com/ProgrammersCreateLife/photos/a.241809332534619.55240.241806149201604/1615456278503244/?type=3"
            }
         ]
      }
    }    
  
  
  }
}


*/