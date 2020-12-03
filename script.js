var caesar = caesar || (function() {
			var doStaff = function (txt, desp, action) {
				var replace = (function() {
					var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
						'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
					var l = abc.length;
					return function(c) {
						var i = abc.indexOf(c.toLowerCase());
						if (i != -1) {
							var pos = i;
							if (action) {
								// forward
								pos += desp;
								pos -= (pos >= l)?l:0;
							} else {
								// backward
								pos -= desp;
								pos += (pos < 0)?l:0;
							}
							return abc[pos];
						}
						return c;
					};
				})();
				var re = (/([a-z])/ig);
				return String(txt).replace(re, function (match) {
					return replace(match);
				});
			};
 
			return {
					encode: function(txt, desp) {
					return doStaff(txt, desp, true);
				},
					decode: function(txt, desp) {
					return doStaff(txt, desp, false);
				}
			};
		})();
 
		function codificar()
		{
      var b = document.getElementById("numero").value;
			document.getElementById("resultado").innerHTML=caesar.encode(document.getElementById("texto").value, parseInt(b,10) );
		}
		function decodificar()
		{
			var b = document.getElementById("numero").value;
      document.getElementById("resultado").innerHTML=caesar.decode(document.getElementById("texto").value, parseInt(b,10));
		}


function polybios() {
    var normal = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' '];
    var cifrado = ['AA', 'AB', 'AC', 'AD', 'AE', 'BA', 'BB', 'BC', 'BD', 'BD', 'BE', 'CA', 'CB', 'CC', 'CD', 'CE', 'DA', 'DB', 'DC', 'DD', 'DE', 'EA', 'EB', 'EC', 'ED', 'EE', ' '];
    var resultado = [];


    var valor = document.getElementById("texto").value;
    var texto = valor.toUpperCase().split("");

    for (var i = 0; i < texto.length; i++) {
        for (var j = 0; j < normal.length; j++) {
            if (texto[i] == normal[j]) { resultado.push(cifrado[j]) };
        }
    }

    document.getElementById("resultado").innerHTML = resultado.join("");
}

function descifrarPoly() {
    var normal = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' '];
    var cifrado = ['AA', 'AB', 'AC', 'AD', 'AE', 'BA', 'BB', 'BC', 'BD', 'BD', 'BE', 'CA', 'CB', 'CC', 'CD', 'CE', 'DA', 'DB', 'DC', 'DD', 'DE', 'EA', 'EB', 'EC', 'ED', 'EE', ' '];
    var resultado = [];
    var valor = document.getElementById("texto").value;
    var texto = valor.toUpperCase().replace(/ /g, '  ').match(/.{1,2}/g);

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == '  ') { texto[i] = ' '; }
        for (var j = 0; j < normal.length; j++) {
            if (texto[i] == cifrado[j]) { resultado.push(normal[j]) };
        }
    }

    document.getElementById("resultado").innerHTML = resultado.join("");
}


function codEscitala(){
    var txt = document.getElementById("texto").value;
    var n = document.getElementById("n").value;
	//Convertimos "n" en entero
	var n=Math.floor(Number(n))
  var e=(txt.length%n>0?1:0)
	//Calculamos el nÃºmero de filas resultantes
	var lin=Math.floor((txt.length/n)+e)
  var aux=n*lin
	var solucion=''
  console.log(lin)
  console.log(txt.length)
  console.log(aux)
  if(n<lin){
    n=lin
  }
  for(var j=0;j<lin;j++){
    for(var i=0;i<aux;i++){
      if(i%lin==j){
        if(txt[i]){
          solucion+=txt[i]
        }else{
          solucion+=' '
        }
        console.log(solucion)
      }
      console.log(j)   
      console.log(i)
    }
  }
  return solucion
}

function decEscitala(){
    var txt = document.getElementById("texto").value;
    var n = document.getElementById("n").value;
	//Convertimos "n" en entero
	var n=Math.floor(Number(n))
	var solucion=''
  for(var j=0;j<n;j++){
    //console.log(j)
    for(var i=0;i<txt.length;i++){
      //console.log(i)
      if(i%n==j){
        solucion+=txt[i]
        }    
      }
    }
  return solucion
}