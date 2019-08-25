module.exports= function(client){

    this.resizeToCurrentPageDimentions = function(){
        client.execute(function(){ return document.documentElement.scrollHeight }, [], (height) => {
            client.execute(function(){ return document.documentElement.scrollWidth }, [], (width) => {
              console.log("pageScrollWidth:" + JSON.stringify(width.value));
              console.log("pageScrollHeight:" + JSON.stringify(height.value));
              client.resizeWindow(JSON.stringify(width.value), JSON.stringify(height.value))
            })
          })
            return client;
        };
        
    return this;    
    }