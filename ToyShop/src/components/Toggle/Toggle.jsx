
const Toggle = ({prop1,func2}) => {
    return (
        <>
            <div className={`toggle ${prop1}`} onClick={func2}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>
    )
}
export default Toggle;


