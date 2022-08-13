const ItemDetailList = ({ atribute }) => {

    const attrib = ['ITEM_CONDITION', 'KILOMETERS', "VEHICLE_YEAR", 'TRANSMISSION', 'POWER', "ENGINE", "FUEL_TYPE"];
    const valuesArray = {};

    attrib.map(attr => {
        return atribute.map(att => {
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