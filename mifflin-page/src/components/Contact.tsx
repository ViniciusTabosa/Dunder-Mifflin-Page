import { MifflinBranches } from "@/components/MifflinBranches";
import { ImMail4,ImPhone } from "react-icons/im";

export const Contact = () => {
    return(
        <div className="flex flex-col mx-auto lg:w-10/12" id="contact">
            <h1 className="text-amber-900 p-5 font-serif text-2xl">Fale Conosco</h1>
            
            <div className="bg-amber-900/20 p-5 rounded-md md:grid md:grid-cols-2 md:gap-0 flex flex-wrap gap-5">
                <div>
                    <h3 className="text-xl pb-2">Dunder Mifflin Paper Company</h3>
                    <ul>
                        <li  className="text-sm">1725 Slough Avenue, Scranton, Pennsylvania, US</li>
                        <li className="flex items-center gap-1"><ImPhone />(570) 555-1212</li>
                        <li className="flex items-center gap-1"><ImMail4 />contact@dundermifflin.com</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl pb-2">Nossas filiais</h3>
                    <MifflinBranches/>
                </div>
            </div>
        </div>
    )
}