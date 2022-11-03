const catDetails = (props) => {
    const {catDetail} = props;
    console.log(props)
    const {bio, pic} = catDetail;
    console.log(pic)
    return(
        <div>
            <h1>Поздравляем!!!</h1>
            <h2>Вы приобрели:</h2>
            <br />
            <img src={`${props.url}${pic}`} alt='pic'/>
            <p>{bio}</p>
        </div>
    )
}

export default catDetails;