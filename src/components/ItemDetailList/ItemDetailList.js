const ItemDetailList = ({ product }) => {

    // {product.map((item, index) => 
    //     (console.log(item.id)) 
    //     (console.log(index))
    // )}
    // let board = Array(2).fill(0).map(row => new Array(3).fill(1))
    // console.log(board)
    // p.map((items,index) => {
    //     return(
    //         items.map((subItems,sIndex) => {
    //         return(console.log(subItems))
    //     }))

    // })
    const attrib = ['ITEM_CONDITION', 'KILOMETERS', "VEHICLE_YEAR", 'TRANSMISSION', 'POWER', "ENGINE", "FUEL_TYPE"];
    const valuesArray = {};

    attrib.map(attr => {
        return product.map(att => {
            if (att.id === attr) {
                return (valuesArray[attr] = att.value_name);
            } else {
                return null;
            }
        });
    });

    return (
        <>

            <li class="list-group-item">Estado: {valuesArray['ITEM_CONDITION']}</li>
            <li class="list-group-item">Km: {valuesArray['KILOMETERS']}</li>
            <li class="list-group-item">Año: {valuesArray['VEHICLE_YEAR']}</li>
            <li class="list-group-item">Transmisión: {valuesArray['TRANSMISSION']}</li>
            <li class="list-group-item">Potencia: {valuesArray['POWER']}</li>
            <li class="list-group-item">Cilindrada: {valuesArray['ENGINE']}</li>
            <li class="list-group-item">Combustible: {valuesArray['FUEL_TYPE']}</li>
        </>
    );
};


export default ItemDetailList;;;