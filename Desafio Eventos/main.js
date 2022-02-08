function resultado(){
    let n1 = parseInt(document.getElementById('Plata').value);
    let n2 = parseInt(document.getElementById('Cuotas').value);
    let n3 = parseInt(document.getElementById('Interes').value);
    const d1 = (n1/n2).toFixed(2);
    const d2 = (((n1*n3)/100)/n2).toFixed(2);
    const d3 = ((n1/n2)+(((n1*n3)/100)/n2)).toFixed(2);
    const d4 = ((n1*n3)/100).toFixed(2);
    const d5 = (n1+((n1*n3)/100));
    if(n1>0){
        for(i=1;i<=n2;i++){
            document.getElementById("tab").innerHTML= 
                    `<tr>
                        <td>${i}</td>
                        <td>${d1}</td>
                        <td>${d2}</td>
                        <td>${d3}</td>
                    </tr>`;
        }

        document.getElementById("t1").innerHTML= n1;
        document.getElementById("t2").innerHTML= d4;
        document.getElementById("t3").innerHTML= d5;        
    }else{
        alert("Falta ingresar un Número");
    }
}
