import React from 'react'
import "./styles.css"

const TerceiroComponente = () => {
    
  var calcular = document.getElementById('cal');
calcular.addEventListener('click', function() {
  var x = Number(document.getElementById('x').value); // movidas para dentro do event listener
  var y = Number(document.getElementById('y').value); // movidas para dentro do event listener

  var res = (x + y)*2 ;
  alert(`Soma de ${x} + ${y} e multiplicado por 2 = ${res}`);
  document.getElementById('resultado').innerHTML = res;
});
    return(
    <form>
        <div>
  <div>
    <input id="x" type="number" required=""/>
    <label>INSIRA O PRIMEIRO VALOR</label>      
  </div>

  <div>       
    <input id="y" type="number" required=""/>
    <label>INSIRA O SEGUNDO VALOR</label>
  </div>

  <button id="cal" type="submit">CALCULAR</button>

  <div class="input-container">       
    <input id="resultado" style="border-bottom: 1px solid var(--cor-efeito);" type="text" required="" disabled/>
    <label>RESULTADO</label>
  </div>
</div>
    </form>
    );
    }

export default TerceiroComponente;