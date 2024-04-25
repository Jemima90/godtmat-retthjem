 
const Menus = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text orange_gradient text-center">
            God mat - Rett hjem
            <br className="max-md:hidden"/>
            <span className="head_texts text-center">
            <p class="italic">Smaker Godt</p>
            </span>
        </h1>
        <p className="desc text-center">
            Vi leverer god mat rett hjem med våre måltids-abonnement og catering tjeneste for dine fester og sammenkomster!
        </p>
        

        <div className='service-offer'>
               

                    <div className='first-service'>
                        <div className='first-service-text'>
    
                            <p> Mange eldre er avhengige av hjemmetjeneste fra kommunen. Selv om dette gjør det mulig å bo trygt hjemme, har ikke sykepleieren tid til å lage mat og trenger ferdiglaget mat som bør lagres i kjøleskapet av pårørende.</p>
                            <p> <i> ''Du vil ikke at dine nærmeste skal bo utelukkende på Fjordland'' </i></p>
                            <p> Vi tror på helse- og livskvalitetseffekter av å spise hjemmelaget mat, levert i praktiske glassinnhegninger som kan rengjøres og gjenbrukes til neste levering. Kommunesykepleieren kan raskt varme opp maten og sørge for at måltidet blir servert i tide uten å være avhengig av ultrabearbeidet mat og plastemballasje. </p>
                        </div>

                        <div className='image'>
                            <img alt='' src='/assets/images/FoodDelivery/betasuppe-pølse.jpg' />
                            <img alt='' src='/assets/images/FoodDelivery/chicken-curry.jpeg' />
                        </div>

                    </div>

                    <div className='first-service-reverse'>
                        <div className='first-service-text'>
                            <p> <i>''Bra for din kjære, bra for helsen og bra for miljøet.''</i> </p>
                            <p>Johan Service Hjemmelaget Matlevering er en spesiell matleveringstjeneste som gir hjemmelagde måltidsplaner som imøtekommer ernæringsbehov og preferanser, samtidig som den fremmer helse til eldre individer. Våre lidenskapelige kokker tilbereder måltider fra bunnen av med ferske og sunne ingredienser som passer til deres kostholdsbehov. Vi forstår viktigheten av hjemmelagde måltider, så vi sørger for å tilberede dem med kjærlighet og omsorg. </p>
                        </div>
                        <div className='image'>
                                <img alt='' src='/assets/images/FoodDelivery/food-delivery3.JPG' />
                                <img alt='' src='/assets/images/FoodDelivery/pineapple-chicken.jpeg' />
                        </div>
                
                    </div>

                    <div className='first-service'>
                        <div className='first-service-text'>
                            <h3>Hvordan fungerer Johan Service Hjemmelaget Matlevering? </h3>
                            <p>For å komme i gang er det bare å angi når du vil at tjenesten skal starte og hvor lenge du ønsker å abonnere, ønsket leveringstid, leverings- og faktureringsadresse, så sørger vi for at maten blir levert i tide.</p>
                            <p>Du kan også angi datoer hvor du ønsker at vi skal levere dobbel porsjon dersom en venn eller slektning kommer innom på middag.</p>
                        </div>
                        <div className='image'>
                                <img alt='' src='/assets/images/FoodDelivery/fish-curry.jpeg' />
                                <img alt='' src='/assets/images/FoodDelivery/food-delivery4.jpeg' />
                        </div>
                        
                    </div>
                             
                </div>



    </section>
      )
}

export default Menus
