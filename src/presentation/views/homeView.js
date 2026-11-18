export function showHome( container,presenter)
{
console.log("Presenter al mostrar la vista:", presenter);


    container.innerHTML = `
        <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="https://www.creativosonline.org/wp-content/uploads/2018/01/carrusel-react.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
            <img src="https://www.justinmind.com/wp-content/uploads/2016/10/carousel-ui-header.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
            <img src="https://www.migueltroyano.com/wp-content/uploads/2020/10/html_carrusel_css_sin_javascript.jpg" class="d-block w-100" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
    `;
}