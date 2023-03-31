

function  Cars ({Make, Modle, Price, image}) {
     
    return (
        <div className="cars">
            <div className="cars-image">
                <figure className="image is-1b1">
                    <img src={image} alt="logo"/>
                </figure>
            </div>

            <div className="cars-content">
                <div className="content">

                <p className="Make is-4">Make: {Make}</p>
                <p className="Modle is-4">Modle: {Modle}</p>
                <p className="Price is-4">Price: {Price}</p>
              
            </div>
            </div>

     </div>

    );
}

export default Cars