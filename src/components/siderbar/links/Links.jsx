const Links=()=>{

    const items=["homepage","services","portfolio"]

    return(<div  className="links">
        {items.map((item)=>(
            <a href={`#${item}`} key={item}>{item}
            </a>
        ))}
    </div>)
}

export default Links;