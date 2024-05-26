export const About = () => {
    return(
        <div className="flex flex-col mx-auto text-justify lg:w-10/12">
            <h1 className="text-amber-900 p-5">Nossa História</h1>
            <div className="p-5 flex flex-wrap md:flex-nowrap">
                <img src="https://travelingtwogether.com/wp-content/uploads/2021/01/f85004da-d80d-42a2-98f7-ba3fd1c3ee81.jpg" alt="Torre da Dunder Mifflin em Scranton, Pensilvânia, EUA" className="w-96 rounded-2xl"/>
                <p className="p-2">A Dunder Mifflin Paper Company, Inc. foi fundada em 1949 em Scranton, Pensilvânia, por Robert Dunder e Robert Mifflin. Eles começaram o negócio como uma pequena operação de suprimentos de escritório, vendendo papel, canetas e outros itens essenciais.</p>
            </div>
           
            <div className="p-5 flex flex-wrap md:flex-nowrap">
                <div>
                    <p className="p-2">
                        Ao longo dos anos, a Dunder Mifflin cresceu e se expandiu, abrindo filiais em várias cidades dos Estados Unidos. A empresa tornou-se um fornecedor líder de produtos de escritório, atendendo a uma ampla gama de clientes, desde pequenas empresas até grandes corporações.
                    </p>
                    <p className="p-2">
                        Em 2010, a Dunder Mifflin foi adquirida pela Sabre Corporation, uma empresa de tecnologia com sede na Flórida.
                    </p>
                </div>
                <img src="https://i.imgur.com/AP3QzVQ.png" alt="" className="w-96 rounded-2xl"/>
            </div>
                
            
        </div>
    )
}