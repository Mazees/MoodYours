export default function Button({onClick, children}){
    return(
        <button className="bg-transparent transition-all rounded-lg border-2 border-brown-tertiary text-brown-tertiary hover:text-white hover:border-brown-primary hover:bg-brown-primary w-fit py-2 px-4 hover:scale-110 cursor-pointer" onClick={onClick}>{children}</button>
    )
}