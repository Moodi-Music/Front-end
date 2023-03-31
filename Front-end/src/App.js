import Cars from "./Cars"
import NavBar from "./NavBar";
import './Style.css';




function App(){

    const handleClick = () => {
        console.log("clicked");
    }
    return (

      
            
        

    <div>
        <NavBar/>
       
        <div className="container">
             <section className="section">
                <div className="columns">


                    <div className="column is-4">
                    <Cars Make={"Honda"} Modle={"Civic"} Price={"$10,000"} image="https://www.pngmart.com/files/4/Honda-Civic-PNG-Transparent-Picture.png"/>
                    </div>

                    <div className="column is-4">
                    <Cars Make={"Toyota"} Modle={"Camry"} Price={"$20,000"} image="https://www.kindpng.com/picc/m/348-3482940_toyota-camry-xse-toyota-camry-hybrid-se-2019.png"/>
                    </div>

                    <div className="column is-4">
                    <Cars Make={"Ford"} Modle={"Mustang"} Price={"$30,000"} image="http://pngimg.com/uploads/mustang/mustang_PNG30.png"/>
                    </div>

                   




                </div>
             </section>
        </div>

        <div className="container">
             <section className="section">
                <div className="columns">

                    <div className="column is-4">
                    <Cars Make={"Chevy"} Modle={"Camaro"} Price={"$40000"} image="https://purepng.com/public/uploads/large/purepng.com-chevrolet-camaro-black-carcarcarsvehiclevehiclestransport-561521126664dkdbq.png"/>
                    </div>


                    <div className="column is-4">
                    <Cars Make="Audi" Modle="A8" Price="$70,000" image="https://images.dealer.com/ddc/vehicles/2021/Audi/A8%20e/Sedan/perspective/front-left/2021_76.png"/>
                    </div>

                    <div className="column is-4">
                    <Cars Make="Mercedes" Modle="S Class" Price="$80,000" image="https://www.pngitem.com/pimgs/m/442-4429453_new-2020-mercedes-benz-s-class-s-mercedes.png"/>
                    </div>


                </div>
             </section>
        </div>
    </div>
       



        
    )
}

export default App