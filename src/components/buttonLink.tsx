export function ButtonLink({ link, text }: btnLinkProps){
    return (
        <a href={link} className="btn__link">{text}</a>
    )
}

interface btnLinkProps{
    link: string
    text?: string
}