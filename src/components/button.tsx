export function Button({ price }: priceProps ){
    return(
        <button className="btn">Купить {price}₽</button>
    )
}

interface priceProps{
    price: number
}

