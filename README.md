# chroma

# Pat, Jose, Luke, Maeve

# color game used for relaxation and problem solving. Take colors and align them in the proper order.

# bored? We have the perfect game for you, stimulate your curiosity with color by using Chroma! The game will give you a scrambled set of colors from a gradient, and the user will need to align them in order. 

# version 1.0.0

# "dependencies": 
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^8.1.0",
    "esm": "^3.2.25",
    "express": "^4.17.1",
    "jsdom": "^15.1.1",
    "jsonwebtoken": "^8.5.1",
    "morgan": "^1.9.1",
    "pg": "^7.12.1",
    "superagent": "^5.1.0"
 
 #"devDependencies": 
    "eslint": "^6.2.0",
    "nodemon": "^1.19.1"
  
  # Steps for install:
  *clone git repository,
  *npm i
  *npm i -D
  *see env.example for setting up own .env
  *will also need a live server download

  # Library:
    Animate CSS
    url: https://daneden.github.io/animate.css/

  # Color api :
  -http://www.thecolorapi.com
  -endpoint:/scheme
  -example url:http://www.thecolorapi.com/scheme?rgb=rgb(0,71,171)&mode=triad&count=2
  -example response: 
  ``` javascript
  {
"mode": "triad",
"count": "2",
"colors": [
{
"hex": {
"value": "#82093E",
"clean": "82093E"
},
"rgb": {
"fraction": {
"r": 0.5098039215686274,
"g": 0.03529411764705882,
"b": 0.24313725490196078
},
"r": 130,
"g": 9,
"b": 62,
"value": "rgb(130, 9, 62)"
},
"hsl": {
"fraction": {
"h": 0.9269972451790635,
"s": 0.8705035971223022,
"l": 0.2725490196078431
},
"h": 334,
"s": 87,
"l": 27,
"value": "hsl(334, 87%, 27%)"
},
"hsv": {
"fraction": {
"h": 0.9269972451790635,
"s": 0.9307692307692308,
"v": 0.5098039215686274
},
"value": "hsv(334, 93%, 51%)",
"h": 334,
"s": 93,
"v": 51
},
"name": {
"value": "Rose Bud Cherry",
"closest_named_hex": "#800B47",
"exact_match_name": false,
"distance": 205
},
"cmyk": {
"fraction": {
"c": 0,
"m": 0.9307692307692308,
"y": 0.523076923076923,
"k": 0.4901960784313726
},
"value": "cmyk(0, 93, 52, 49)",
"c": 0,
"m": 93,
"y": 52,
"k": 49
},
"XYZ": {
"fraction": {
"X": 0.2667505882352941,
"Y": 0.15118117647058824,
"Z": 0.24514823529411764
},
"value": "XYZ(27, 15, 25)",
"X": 27,
"Y": 15,
"Z": 25
},
"image": {
"bare": "http://www.thecolorapi.com/id?format=svg&named=false&hex=82093E",
"named": "http://www.thecolorapi.com/id?format=svg&hex=82093E"
},
"contrast": {
"value": "#000000"
},
"_links": {
"self": {
"href": "/id?hex=82093E"
}
},
"_embedded": {}
},
{
"hex": {
"value": "#45A605",
"clean": "45A605"
},
"rgb": {
"fraction": {
"r": 0.27058823529411763,
"g": 0.6509803921568628,
"b": 0.0196078431372549
},
"r": 69,
"g": 166,
"b": 5,
"value": "rgb(69, 166, 5)"
},
"hsl": {
"fraction": {
"h": 0.26708074534161486,
"s": 0.9415204678362572,
"l": 0.33529411764705885
},
"h": 96,
"s": 94,
"l": 34,
"value": "hsl(96, 94%, 34%)"
},
"hsv": {
"fraction": {
"h": 0.26708074534161486,
"s": 0.9698795180722891,
"v": 0.6509803921568628
},
"value": "hsv(96, 97%, 65%)",
"h": 96,
"s": 97,
"v": 65
},
"name": {
"value": "Limeade",
"closest_named_hex": "#6F9D02",
"exact_match_name": false,
"distance": 2392
},
"cmyk": {
"fraction": {
"c": 0.5843373493975905,
"m": 0,
"y": 0.9698795180722891,
"k": 0.34901960784313724
},
"value": "cmyk(58, 0, 97, 35)",
"c": 58,
"m": 0,
"y": 97,
"k": 35
},
"XYZ": {
"fraction": {
"X": 0.3479203921568627,
"Y": 0.5245239215686275,
"Z": 0.10145647058823529
},
"value": "XYZ(35, 52, 10)",
"X": 35,
"Y": 52,
"Z": 10
},
"image": {
"bare": "http://www.thecolorapi.com/id?format=svg&named=false&hex=45A605",
"named": "http://www.thecolorapi.com/id?format=svg&hex=45A605"
},
"contrast": {
"value": "#000000"
},
"_links": {
"self": {
"href": "/id?hex=45A605"
}
},
"_embedded": {}
},
{
"hex": {
"value": "#50CB00",
"clean": "50CB00"
},
"rgb": {
"fraction": {
"r": 0.3137254901960784,
"g": 0.796078431372549,
"b": 0
},
"r": 80,
"g": 203,
"b": 0,
"value": "rgb(80, 203, 0)"
},
"hsl": {
"fraction": {
"h": 0.2676518883415435,
"s": 1,
"l": 0.3980392156862745
},
"h": 96,
"s": 100,
"l": 40,
"value": "hsl(96, 100%, 40%)"
},
"hsv": {
"fraction": {
"h": 0.2676518883415435,
"s": 1,
"v": 0.796078431372549
},
"value": "hsv(96, 100%, 80%)",
"h": 96,
"s": 100,
"v": 80
},
"name": {
"value": "Alien Armpit",
"closest_named_hex": "#84DE02",
"exact_match_name": false,
"distance": 3523
},
"cmyk": {
"fraction": {
"c": 0.605911330049261,
"m": 0,
"y": 1,
"k": 0.20392156862745103
},
"value": "cmyk(61, 0, 100, 20)",
"c": 61,
"m": 0,
"y": 100,
"k": 20
},
"XYZ": {
"fraction": {
"X": 0.4140580392156862,
"Y": 0.6360533333333332,
"Z": 0.10094745098039215
},
"value": "XYZ(41, 64, 10)",
"X": 41,
"Y": 64,
"Z": 10
},
"image": {
"bare": "http://www.thecolorapi.com/id?format=svg&named=false&hex=50CB00",
"named": "http://www.thecolorapi.com/id?format=svg&hex=50CB00"
},
"contrast": {
"value": "#000000"
},
"_links": {
"self": {
"href": "/id?hex=50CB00"
}
},
"_embedded": {}
},
{
"hex": {
"value": "#0061EB",
"clean": "0061EB"
},
"rgb": {
"fraction": {
"r": 0,
"g": 0.3803921568627451,
"b": 0.9215686274509803
},
"r": 0,
"g": 97,
"b": 235,
"value": "rgb(0, 97, 235)"
},
"hsl": {
"fraction": {
"h": 0.5978723404255318,
"s": 1,
"l": 0.46078431372549017
},
"h": 215,
"s": 100,
"l": 46,
"value": "hsl(215, 100%, 46%)"
},
"hsv": {
"fraction": {
"h": 0.5978723404255318,
"s": 1,
"v": 0.9215686274509803
},
"value": "hsv(215, 100%, 92%)",
"h": 215,
"s": 100,
"v": 92
},
"name": {
"value": "Blue Ribbon",
"closest_named_hex": "#0066FF",
"exact_match_name": false,
"distance": 627
},
"cmyk": {
"fraction": {
"c": 1,
"m": 0.5872340425531914,
"y": 0,
"k": 0.07843137254901966
},
"value": "cmyk(100, 59, 0, 8)",
"c": 100,
"m": 59,
"y": 0,
"k": 8
},
"XYZ": {
"fraction": {
"X": 0.3023713725490196,
"Y": 0.338593725490196,
"Z": 0.9212937254901961
},
"value": "XYZ(30, 34, 92)",
"X": 30,
"Y": 34,
"Z": 92
},
"image": {
"bare": "http://www.thecolorapi.com/id?format=svg&named=false&hex=0061EB",
"named": "http://www.thecolorapi.com/id?format=svg&hex=0061EB"
},
"contrast": {
"value": "#000000"
},
"_links": {
"self": {
"href": "/id?hex=0061EB"
}
},
"_embedded": {}
}
],
"seed": {
"hex": {
"value": "#0047AB",
"clean": "0047AB"
},
"rgb": {
"fraction": {
"r": 0,
"g": 0.2784313725490196,
"b": 0.6705882352941176
},
"r": 0,
"g": 71,
"b": 171,
"value": "rgb(0, 71, 171)"
},
"hsl": {
"fraction": {
"h": 0.5974658869395711,
"s": 1,
"l": 0.3352941176470588
},
"h": 215,
"s": 100,
"l": 34,
"value": "hsl(215, 100%, 34%)"
},
"hsv": {
"fraction": {
"h": 0.5974658869395711,
"s": 1,
"v": 0.6705882352941176
},
"value": "hsv(215, 100%, 67%)",
"h": 215,
"s": 100,
"v": 67
},
"name": {
"value": "Cobalt",
"closest_named_hex": "#0047AB",
"exact_match_name": true,
"distance": 0
},
"cmyk": {
"fraction": {
"c": 1,
"m": 0.5847953216374269,
"y": 0,
"k": 0.3294117647058824
},
"value": "cmyk(100, 58, 0, 33)",
"c": 100,
"m": 58,
"y": 0,
"k": 33
},
"XYZ": {
"fraction": {
"X": 0.22060823529411763,
"Y": 0.2475505882352941,
"Z": 0.6705831372549019
},
"value": "XYZ(22, 25, 67)",
"X": 22,
"Y": 25,
"Z": 67
},
"image": {
"bare": "http://www.thecolorapi.com/id?format=svg&named=false&hex=0047AB",
"named": "http://www.thecolorapi.com/id?format=svg&hex=0047AB"
},
"contrast": {
"value": "#000000"
},
"_links": {
"self": {
"href": "/id?hex=0047AB"
}
},
"_embedded": {}
},
"image": {
"bare": "http://www.thecolorapi.com/scheme?format=svg&named=false&hex=0047AB&mode=triad&count=2",
"named": "http://www.thecolorapi.com/scheme?format=svg&hex=0047AB&mode=triad&count=2"
},
"_links": {
"self": "/scheme?hex=0047AB&mode=triad&count=2",
"schemes": {
"monochrome": "/scheme?hex=0047AB&mode=monochrome&count=2",
"monochrome-dark": "/scheme?hex=0047AB&mode=monochrome-dark&count=2",
"monochrome-light": "/scheme?hex=0047AB&mode=monochrome-light&count=2",
"analogic": "/scheme?hex=0047AB&mode=analogic&count=2",
"complement": "/scheme?hex=0047AB&mode=complement&count=2",
"analogic-complement": "/scheme?hex=0047AB&mode=analogic-complement&count=2",
"triad": "/scheme?hex=0047AB&mode=triad&count=2",
"quad": "/scheme?hex=0047AB&mode=quad&count=2"
}
},
"_embedded": {}
}
```