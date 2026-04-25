
type ChildPropsProps = {
    count : number
}

const ChildProps = ({count}:ChildPropsProps) =>{
    console.log('Child rendered')


    return <>
        hi am props Child
    </>
}

export default ChildProps