module.exports = {

    'facebookAuth' : {
        'clientID'      : '173489109936826', // your App ID
        'clientSecret'  : '7fb0d6682a8774aeccb1a4a75a87f0eb', // your App Secret
        'callbackURL'   : 'https://servicenowhex.herokuapp.com/fb/callback',
        'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields' : ['id', 'email', 'name'] // For requesting permissions from Facebook API
    },

    'twitterAuth' : {
        'consumerKey'       : 'UQv3D3lLvTcfg6UtmX8DAkMEx',
        'consumerSecret'    : 'CC234I55MYFnWY6wGKpB6LmCMIzaEhnzpVij9dzqBMtV6YquZs',
        'callbackURL'       : 'https://servicenowhex.herokuapp.com/tw/callback'
    },

    'googleAuth' : {
        'clientID'      : '1096250870035-7bdfg2fjgi3dma1p6b0ptqg39h7cq4gs.apps.googleusercontent.com',
        'clientSecret'  : '8eTkES-l6fVXNyop8TA5839T',
        'callbackURL'   : 'https://servicenowhex.herokuapp.com/go/callback'
    }

};