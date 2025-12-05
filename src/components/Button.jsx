function Button({children, onClick}){
  return <button onClick={onClick} className="text-xs hover:cursor-pointer dashed-bg px-1">{children}</button>
}

export default Button