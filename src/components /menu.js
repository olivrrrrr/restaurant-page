const menuElement = document.createElement('main')

const menu = () => {
    // const menu = [{title: 'ramen', cost: '$4.00', descrption:'Spciy'}]
    const template = `
                <h1 class="menu-title">Menu</h1>

                <div class="food-tile">
                    <h1 class="food">Shoyu Ramen<h1>  
                    <p class="food-para">Shoyu is the Japanese word for soy sauce,
                    and this lighter-style ramen­­—which can appear
                     clear-brown or darker and cloudy—is flavored 
                     with exactly that.<p>
                   <p class="food-price">Price: $4.00<p>
                <div>
                <div class="food-tile">
                    <h1 class="food">Miso Ramen<h1> 
                    <p class="food-para">Shio (or salt) ramen is frequently made 
                    from a chicken broth base. This lighter-bodied, 
                    lighter-flavored ramen that’s also lower in fat 
                    and oil is often clear in appearance and is the
                     saltiest of the group.
                    <p>
                    <p class="food-price">Price: $4.00<p>
                <div>
        
                <div class="food-tile">
                    <h1 class="food">Tonkotsu Ramen<h1>  
                    <p class="food-para">Tonkotsu is a viscous, creamy, 
                    and complex ramen made from simmered pork bones.
                     The bones break down and release collagen while cooking,
                      meaning that tonkotsu can be so thick that it coats the 
                      back of a spoon. Tonkotsu shokunin often fortify their 
                      already rich broth with pork and/or chicken fat.
                    </p>
                    <p class="food-price">Price: $4.00<p>
                 <div>
    ` ;
    menuElement.innerHTML = template
    return document.body.appendChild(menuElement)
}

export {menu, menuElement} 