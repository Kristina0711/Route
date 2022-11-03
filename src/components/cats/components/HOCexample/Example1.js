import CustomButton from './CustomButton'
import WithLogging from  './hoc/WithLogging'


const CustomButtonWithLogging = WithLogging(CustomButton)

const Example1 = () => {
    return (
        <>
            <p>Купит котёнка рарвотдлы</p>
            <CustomButtonWithLogging />
        </>
    )
}

export default Example1; 