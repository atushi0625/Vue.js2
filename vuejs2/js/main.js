new Vue({
    el: '#app',
    data: {
        message: 'HelloWord! Japan',
message2: 'こんにちは',

html: '<h1>v-htmlについて</h1>',

url: 'https://google.com',  /*v-bindについて(コロンだけでも使える)*/

// urlTwitter: 'https://twitter.com',
// number: 31,

attribute: 'href',

twitterObject: { /*オブジェクトにもできる*/
    href: 'https://twitter.com',
    id: 31
},

number: 0,
x:0,
y:0,
// event:'click'
counter:0,
otherCounter:0,
isActive: true

},

methods: { /*メソッドは（）をつける*/
    lessThanThreeMethod: function(){
        console.log('Method');
        return this.counter > 3 ? '3より上'　:　'3以下'
    },


// sayHi(){
    //     this.message = 'Hello VueJS'
    //     return 'Haaaaaai'
    //    },
       
    countUp: function(){
        this.number += 6;
    },
        
    // countUp:function(timeee){  /*関数でできる　v-on:click、*/
        //     // 引数名はなんでもいい
    //     this.number +=1*timeee
    // },

    changeMousePosition: function(divideNumber,event){
      this.x = event.clientX / divideNumber;
      this.y = event.clientY / divideNumber; 
      console.log(event);
    },
    
    myAlert(){
        alert('アラート!');
    },
    
    
    noEvent: function(event){
        event.preventDefault();
    },
        
    sayHi: function(){
                   return 'this.message';
                },
                reverseMessage: function(){
                    this.message = 
                    this.message.split('').reverse().join('')
            },
            
            
            computed: {  /*動的に使いたい場合はcomputedを使う*/
                lessThanThreeComputed: function(){
                    console.log('Computed');
                    return this.counter > 3 ? '3より上'　:　'3以下'
                }
            },
            watch:{  /* カウント３秒後に０にもどる*/
                counter:function(){
                var vm = this;
                setTimeout(function(){
                vm.counter =0
                }, 3000)
             }
            },

            computed: {
                classObject: function() {
                  return {
                    red: this.isActive,
                    // データを扱う場合はthisを使う
                    'bg-blue': !this.isActive
                    // ケバブケースの場合は''で囲む
                  }
                }
              }

        }
    })
