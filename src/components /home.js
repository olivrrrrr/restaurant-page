const mainElement = document.createElement('main')

const home = (onClick) => {
    
    const template = `
            <div class="main-body">
                        <div class="slogan">
                            <h2>
                                A Bowl of Love From Japanese Cusine
                            </h2>
                        </div>
                        <div class="descrip">
                            <p>
                                Ramen ( ラーメン )  is a noodle soup dish that was originally
                                imported from China and has become one of the most popular 
                                dishes in Japan in recent decades 
                            </p>
                        </div>
                        <div class="order">
                            <button id="order-now">
                                Order Now
                            </button>
                        </div>
                        <div class="ramen-picture">
                            <img src="images/ramen.png" alt="ramen">
                        </div>
                      </div>  
    ` ;
    mainElement.innerHTML = template
    mainElement.querySelector('button').addEventListener('click', onClick)
    return document.body.appendChild(mainElement)
}

export {home, mainElement}