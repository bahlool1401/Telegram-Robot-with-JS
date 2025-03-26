const { Telegraf } = require('telegraf')
const { default: axios } = require('axios')


const bot = new Telegraf('7878032273:AAEogWl6kdsxkDarCfu-E81maK_jKMnx3RY')

bot.start((ctx) => {
    ctx.reply('Welcome to my bot dear🌹😍 \n for more information,use this item \n /help')
})

bot.help((ctx) => {
    ctx.reply('The defined words for me are \n -Youtube \n -telegram')
})

bot.hears('Youtube', (ctx) => {
    ctx.reply("https://www.youtube.com")
})
bot.hears('Telegram', (ctx) => {
    ctx.reply("https://www.shahrekhabar.com")
})

// Commands*********
bot.command('say', (ctx) => {
    msg = ctx.message.text
    msgArray = msg.split(' ')
    if (msgArray.length < 2) {
        ctx.reply('say what i tell you 🤳')
    } else {
        msgArray.shift()
        newMsg = msgArray.join(' ')
        // console.log(newMsg).
        ctx.reply(newMsg)
    }
})

bot.command('sum', (ctx) => {
    msg = ctx.message.text
    msgArray = msg.split(' ')
    if (msgArray.length < 2) {
        ctx.reply('please enter the numbers with space')
    } else {
        msgArray.shift()
        sum = 0
        for (i = 0; i < msgArray.length; i++) {
            sum = parseInt(msgArray[i]) + parseInt(sum)
        }
        ctx.reply(sum.toString())
    }
})

// Weather Condition***********
bot.command('weather', (ctx) => {
    msg = ctx.message.text
    msgArray = msg.split(' ')
    if (msgArray.length < 2) {
        ctx.reply('please enter a city')
    } else {
        msgArray.shift()
        newMsg = msgArray.join(' ')
        const apiKey = '8e094e7ced99b4d09061aa23a64d076d'
        const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?unit=metric&q=' + newMsg + `&appid=${apiKey}`
        axios.get(apiUrl)
        .then((res)=>{
            ctx.reply('the temperator of ' + newMsg + '\n' + res.data.main.temp.toString() + '℃')
        })
    }
})

// Menu ********


bot.launch()