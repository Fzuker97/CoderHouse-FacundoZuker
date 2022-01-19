function resultado(){
    let n1 = Number(document.getElementById('Plata').value);
    let n2 = Number(document.getElementById('Cuotas').value);
    let n3 = Number(document.getElementById('Interes').value);
    const resul = ((n1 +((n1*n3)/100))/n2).toFixed(2);
    if(n1>0 && n2>0 && n3>0){
        alert('son'+' ' + n2 +" "+ 'Cuotas de' +" $"+ resul);
    }else{
        alert('Dato no valido o Dato Faltante.');
    }
    
}

