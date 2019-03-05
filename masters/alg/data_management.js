class Data {
  constructor() {
  
  }
  
  static hex2bin(hex)
    {
        var bytes = [], str;

        for(var i=0; i< hex.length-1; i+=2)
            bytes.push(parseInt(hex.substr(i, 2), 16));

        return String.fromCharCode.apply(String, bytes);    
    }

  static bin2hex (bin)
    {

      var i = 0, l = bin.length, chr, hex = '';

      for (i; i < l; ++i)
      {

        chr = bin.charCodeAt(i).toString(16);

        hex += chr.length < 2 ? '0' + chr : chr;

      }

      return hex;

    }
   static hex2rgba(hex) {
      var r = parseInt(hex.slice(0, 2), 16),
          g = parseInt(hex.slice(2, 4), 16),
          b = parseInt(hex.slice(4, 6), 16);

         return [r, g, b, 1];
    }
}
