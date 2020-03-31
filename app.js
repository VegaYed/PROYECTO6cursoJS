const cargarPosts = document.getElementById('cargar').addEventListener('click',function(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    xhr.onload = function(){
        if(this.status === 200){
            const respuesta = JSON.parse(this.responseText);

            let template = '';
            respuesta.forEach(post => {
                template+=`
                    <h5>Titulo: ${post.title} </h3>
                    <h5>Id post: ${post.id} </h3>
                    <p>body: ${post.body} </p>                
                `;
            });
            const divListado = document.getElementById('listado');
            divListado.innerHTML = template;
        }
    }

    xhr.send();

});

