module.exports.ZapLink = function ZapLink(contactNumber){

    return `https://api.whatsapp.com/send/?phone=55${contactNumber}&text&type=phone_number&app_absent=0`

} 