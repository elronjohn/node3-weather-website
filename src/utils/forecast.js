const request = require('postman-request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4131fc0ae61d15211526583c5691e9ee&query='+ encodeURIComponent(longitude) +','+ encodeURIComponent(latitude) +'&units=f'
    request({url, json:true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather Services', undefined)
        }else if(body.error){
            callback('Unable to find Location', undefined)
        }else{
            callback(undefined, ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast