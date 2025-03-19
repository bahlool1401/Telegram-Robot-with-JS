const { Telegraf } = require("telegraf");
const {default:axios} = require('axios');

const bot = new Telegraf("7878032273:AAEogWl6kdsxkDarCfu-E81maK_jKMnx3RY");

bot.start((ctx) => {
  ctx.reply(
    "HI HONEY😍.WELCOME TO THE CHANELL🌹 \n our services include : **** \n /help "
  );
});

bot.help((ctx) => {
  ctx.reply("our socials are \n Telegram \n Youtube \n 😍😎");
});

bot.hears("Youtube", (ctx) => {
  ctx.reply("https://www.youtube.com");
});
bot.hears("shahr", (ctx) => {
  ctx.reply("https://www.shahrekhabar.com");
});

//COMMAND************
bot.command('say' , (ctx) => {
  msg = ctx.message.text;
  msgArray = msg.split(" ");

  if (msgArray.length < 2) {
    ctx.reply("write what i say.");
  } else {
    msgArray.shift();
    newMsg = msgArray.join(" ");
    ctx.reply(newMsg);
  }
});

bot.command('sum',(ctx)=>{
    msg = ctx.message.text
    msgArray = msg.split(' ')
    if(msgArray<2){
        ctx.reply('enter numbers with spaces.')
    }else{
        msgArray.shift()
        sum = 0 
        for(i=0 ; i<msgArray.length;i++){
            sum = parseInt(msgArray(i))+parseInt(sum)
        }
        ctx.reply(sum.toString())
    }    
})

botot.command('weather',(ctx)=>{
  msg = ctx.message.text
  msgArray = msg.split(' ')
    if(msgArray<2){
        ctx.reply('please enter the city')
    }else{
        msgArray.shift()
        newMsg = msgArray.join('')
        const apiKey = ''
        const apiUrl = ''
        axios.get(apiUrl)
        .then((res)=>{
          ctx.reply('')
        })
    }    
})


// MENU******
bot.command('menu',(ctx)=>{
  ctx.reply('hello😎😎🙌',{
    reply_narkup:{
      inline_keyboard:{
        [{text:'welcomeeeeeeeeeee',callback_data:'btn-1'},{text:'tap on it',callback_data:'btn-2'}],
        [{text:'instruction',callback_data:'btn-3'}],
        [{text:'😍my university😍',url:'https://www.youtube.com'}]
      }
    }
  })
})

bot.action('btn-1',(ctx)=>{
  ctx.reply("❤")
})

bot.action('btn-2',(ctx)=>{
  ctx.answerCbQuery("you are reading instruction😎😎😎")
})

bot.action('btn-3',(ctx)=>{
  ctx.reply("this is the last one🤔")
})

// Chatgpt*********
bot.command('chat',async( ctx)=>{
  msg=ctx.message.text
  msgArray = msg.split( )
  if(msgArray<2){
    ctx.reply('please enter your question')
  }else{
    msgArray.shift()
    newMsg = msgArray.join(' ')
  }
})

bot.launch();
