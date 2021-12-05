let productos=[["PC","180.000"],["TV","22.000"],["Celular","30.000"],["Heladera","50.500"]];

let botonGenerar=document.getElementById("boton");
botonGenerar.addEventListener("click",e=>{
    e.preventDefault();
    let producto=document.getElementById("producto");
    let productoValue=producto.value;

 
    for (let i=0; i<productos.length;i++){
        if (productoValue==productos[i][0]){
            let precio=document.getElementById("texto");
            precio.innerHTML= ` <h2> ${productos[i][0]}</h2>
                        <p> El precio del producto es:${productos[i][1]}</p>`
            break
        }
        else{
            let mensaje=document.getElementById("texto");
            mensaje.innerHTML="<p>El Producto no existe o no esta en stock</p>"
            break
        }
    }

})