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
bot.command('menu',(ctx)=>{
    ctx.reply('hello dear. welcome here😍',{
        reply_markup:{
            inline_keyboard:[
                [{text:'please tap here🙌',callback_data:'btn-1'},{text:'please tap here✌',callback_data:'btn-2'}],
                [{text:'teaching important thing',callback_data:'btn-3'}],
                [{text:'my chanel😃✔',url:'https://www.varzesh3.com'}]
            ]
        }
    })
})
// when clicked on btn-1👇
bot.action('btn-1',(ctx)=>{
    ctx.reply('❤')
})

// respond a popup(notif) when clicked on btn-2👇
bot.action('btn-2',(ctx)=>{
    ctx.answerCbQuery('this is for you🎉')
})


bot.action('btn-3',(ctx)=>{
    ctx.reply('we will teach you very important thing🔄')
})


/// working with CHATGPT✔✔✔✔✔ 
bot.command('chat', async(cyx)=>{
    msg = ctx.message.text
    msgArray = msg.split(' ')
    if (msgArray.length < 2) {
        ctx.reply('please enter your order to reply you🤷‍♂️')
    } else {
        msgArray.shift()
        newMsg = msgArray.join(' ')
        const apiKey = 'vjnjfdvndjfndjfneeen;rjnwaesfklwmkefmwkemwk',
        const options = {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${apiKey}`
            },
            body:JSON.stringify({
                "model":"gpt-3.5-turbo",
                "messages":[{
                    "role":"system",
                    "content": newMsg
                }]
            })
        }
        try {
            const response =await fetch("https://api.openai.com/v1/chat/completions", option)
            const data = response.json()
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
})

bot.launch()