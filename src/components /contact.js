const conElement = document.createElement('div')

const con = () => {
   
    const template = `
    <h1 class="contact-title">Contact</h1>
        <h1 class="tel">TEL: 0712345678<h1>  
        <div class="hackney-picture">
            <img src="images/hackney.jpeg" alt="ramen">
        </div>
  
    ` ;

    conElement.innerHTML = template
    return document.body.appendChild(conElement)
}

export {con, conElement} 