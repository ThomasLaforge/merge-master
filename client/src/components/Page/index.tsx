import './style.scss'

interface PageProps {
    title: string,
    className: string,
    children: React.ReactNode
}

export function Page(props: PageProps){
    const {title, className, children} = props
    
    return <div className="page">
        <div className="title">{title}</div>
        <div className={className}>
            {children}
        </div>
    </div>
}