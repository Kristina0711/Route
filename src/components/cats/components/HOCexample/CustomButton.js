const CustomButton = (props) => {
return (
    <button onClick={() => {
        console.log('нажали на кнопку');
        props.onClick?.()
    }}>
        Подробнее
    </button>
)
}


export default CustomButton;