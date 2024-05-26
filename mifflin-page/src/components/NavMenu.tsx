export const NavMenu = () => {
    return(
        <div className="bg-amber-900 text-white w-full">
            <div className="container md:grid md:grid-cols-2 mx-auto flex flex-col">
                <img src="img/dunder-logo.png" className="w-24 flex self-center"/>
                
                <ul className="container md:grid md:grid-cols-3 md:items-center p-3 flex justify-around">
                    <li className="hover:underline">Inicio</li>
                    <li className="hover:underline">Sobre</li>
                    <li className="hover:underline">Contato</li>
                </ul>
            </div>
            
        </div>
    )
}