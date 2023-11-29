const Togglebutton =({setOpen})=>{
    return(
        <button onClick={()=>setOpen((prev)=>!prev)}>button</button>
    )
}
export default Togglebutton;