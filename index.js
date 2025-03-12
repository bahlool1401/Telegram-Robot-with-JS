const {Telegraf} = require('telegraf');

const bot = new Telegraf('7878032273:AAEogWl6kdsxkDarCfu-E81maK_jKMnx3RY')

bot.start((ctx)=>{
    ctx.reply('HI HONEY😍.WELCOME TO THE CHANELL🌹 \n our services include : **** \n /help ')
})

bot.help((ctx)=>{
    ctx.reply('our socials are \n Telegram \n Youtube \n 😍😎')
})

bot.hears('Youtube',(ctx)=>{
    ctx.reply('https://www.youtube.com')
})
bot.hears('shahr',(ctx)=>{
    ctx.reply('https://www.shahrekhabar.com')
})

bot.launch()