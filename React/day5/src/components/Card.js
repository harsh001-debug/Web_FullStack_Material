function Card(props){
    return(
        <div className="card"style={{border:"2px solid black", padding:"2px"}}>
            <img id="card_img" src="https://www.beyoung.in/api/cache/catalog/products/printed_t-shirt_girl_final_16_9_2022/take_me_anywhere_blue_t-shirt_for_girls_base_5_10_2022_700x933.jpg" height="200px" width="150px" padding="100px"/>
            <div style={{textAlign:"center"}}>
                <h2>{props.cloth}</h2>
                <h1>{props.offer}</h1>
                <h2>Shop Now</h2>
            </div>
        </div>
    )
}



export default Card;