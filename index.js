

  
  function cl(){
    
    var campo=document.getElementById('campo')
    
   var campo2=Number(campo.value)
    
    
    var per=document.getElementById('per')
    
    
    var per2=Number(per.value)
    
   var  novo = campo2 - (campo2 *per2/100)
    
    var novo2=novo-campo2
  
  var re=document.getElementById('re').innerHTML = (`o preço digitado do produto é ${campo2}'  ${per2}% de discoto passa para <p id='p'>${novo}'</p> o valor discontado  é de <p>${novo2}</p> `)
  
  }
  //if (ch== "on")
    
  
  
  
  
  
  
