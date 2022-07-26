// const express= require('express')

const EventEmitter = require('events')

const event = new EventEmitter()

event.on(`discountPrice`,(originalPrice,discount)=>{
    var discountPrice = originalPrice-(originalPrice*discount/100)
    console.log(`Discounted Price is ${discountPrice}`)
})
event .emit('discountPrice',2000,20)
//func used to raise specified event
