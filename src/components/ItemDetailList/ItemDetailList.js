
const ItemDetailList = ({ attributes }) => {
    return (
        <>
            <li class="list-group-item">Estado: {attributes[0].value_name}</li>
            <li class="list-group-item">Año: {attributes[16].value_name}</li>
            <li class="list-group-item">{attributes[12].value_name}</li>
            <li class="list-group-item">Transmisión: {attributes[14].value_name}</li>
            <li class="list-group-item">Potencia: {attributes[7].value_name}</li>
            <li class="list-group-item">Cilindrada: {attributes[4].value_name}</li>
            <li class="list-group-item">Combustible: {attributes[11].value_name}</li>
        </>
    );
};

export default ItemDetailList;