'use client'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { NewsBlock } from "./NewsBlock";


export const News = () => {
    
    return(
        <div className="pt-32 md:pt-20 mx-auto" id="home">
                <Swiper navigation pagination={{type: "bullets", clickable:true}} modules={[Autoplay, Navigation, Pagination]} className="self-center h-60">
                    <SwiperSlide>
                        <div className="h-full w-full absolute left-0 top-0">
                            <div className="md:w-9/12 text-justify mx-auto bg-slate-200 p-5 rounded-xl">
                                <img src="https://i.imgur.com/820y7CO.png" alt="Logo da Sabre" className="md:w-40 mx-auto rounded-lg md:flex hidden"/>
                                <p>Scranton, Pensilvânia - A Dunder Mifflin, fornecedora líder de papel e suprimentos de escritório, anunciou hoje uma nova parceria com a Sabre, uma empresa global de tecnologia. Esta parceria estratégica permitirá que a Dunder Mifflin ofereça aos seus clientes uma gama mais ampla de produtos e serviços, incluindo soluções de software de escritório e serviços de TI gerenciados.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="md:w-9/12 text-justify mx-auto bg-slate-200 p-5 rounded-xl md:flex gap-2">
                            <img src="https://preview.redd.it/3tbujd7n80k71.jpg?auto=webp&s=6fc27dead6a403c1f4399a9684422acaf7f3b914" alt="Logo da Dunder Mifflin como divisão da Sabre"  className="w-40 mx-auto rounded-lg hidden md:inline"/>
                            <p>Em 2013, a Sabre vendeu a Dunder Mifflin para a Staples, Inc., uma das maiores varejistas de suprimentos de escritório do mundo. A Staples fechou a maioria das filiais da Dunder Mifflin e integrou as operações da empresa às suas próprias.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="md:w-9/12 text-justify mx-auto bg-slate-200 p-5 rounded-xl">
                            <p>Apesar de não existir mais como uma entidade separada, a Dunder Mifflin continua a ser lembrada com carinho pelos fãs da série de TV "The Office". A empresa representou o ambiente de trabalho peculiar e muitas vezes hilário de um escritório típico americano.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="w-9/12 text-justify mx-auto bg-slate-200 p-5 rounded-xl">
                            <img src="https://assets.architecturaldigest.in/photos/600842df274aca243711c63c/16:9/w_1920,c_limit/The-Office-Dunder-Mifflin-1366x768.jpg" alt="Equipe da Dunder Mifflin de Scranton" className="w-80 mx-auto rounded-lg"/>
                        </div>
                    </SwiperSlide>
                </Swiper>
        </div>
    )
}