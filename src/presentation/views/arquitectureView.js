export function showArquitectureView( container,presenter)
{
console.log("Presenter al mostrar la vista:", presenter);


    container.innerHTML = `
        <label for="inputPassword5" class="form-label">Password</label>
        <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
        <div id="passwordHelpBlock" class="form-text">
            ¿Que te ha parecido la materia?
</div>
    `;
}