//const User = require('../models/User');
const axios = require('axios')


module.exports = {

    async searchGit(request, response) {
        let repository = {}; 
        let items = [];
        let returnJson = {
            id: 5,
            to: "1042221589186385@messenger.gw.msging.net",
            itemType: "application/vnd.lime.document-select+json",
            items: items
        };

        await axios.get('https://api.github.com/users/takenet/repos').then((res) =>{
            repository = res.data 
           //console.log(repository)
         } );
         
         repository.forEach(iten => {
             if(iten.language === 'C#'){
                console.log(iten)
                let itenBot = {
                    header: {
                        type: "application/vnd.lime.media-link+json",
                        value: {
                            title: iten.full_name,
                            text: iten.description,
                            type: "image/png",
                            uri: iten.owner.avatar_url
                        }
                    }
                }
                items.push(itenBot)
             }
             //repositoryProcess.push(iten)
         });
         axios.post('https://http.msging.net/messages',
          {
              data: returnJson
          },
          {
              header:
              {
                Authorization: "Key Y2xlYmluaG8yOklqUlVXTkN3U1Y3NGZBaXVnb0oz"
              }
          }
        )
        return response.json(returnJson);
    }
    
}