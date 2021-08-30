import Card from './Card'



const Cardlist = ({Pokedata}) => {

    return (
        <div className="main">
            {
            Pokedata.map((element, i) => {
                return <Card id={Pokedata[i].url.slice(34,-1)} name={Pokedata[i].name} key={i}/>
            })
            }
        </div>
    )

}

export default Cardlist;