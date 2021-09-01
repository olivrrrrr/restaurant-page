
const navElement = document.createElement('div')

const navbar = (onClick) => {
    
    const template = `
                <div class="navbar">
                    <div class="logo">
                        <a href="#"><h2>ラー<span>メ</span>ン</h2></a>
                    </div>
                    <div class="options">
                        <ul>
                            <a href="#"><li id="home">Home</li></a>
                            <a href="#" ><li id="menu">Menu</li></a>
                            <a href="#" ><li id="contact">Contact</li></a>
                        </ul>
                    </div>
                </div>
                
                ` ;

    
    navElement.innerHTML = template
    let elements = navElement.querySelectorAll('ul')
    for(const element of elements){
        element.addEventListener('click', onClick)
    }
    return document.body.appendChild(navElement)
}

export {navbar, navElement}
