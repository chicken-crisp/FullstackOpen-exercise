const Total = ({arr}) => {
    const sum = arr.reduce((a,b)=> a+b ,0)

    return (
    <p>
        Number of exercises {sum}
    </p>
    )
}
export default Total