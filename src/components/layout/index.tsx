interface LayoutPorps {
    children: any
}

export default function Layout(props: LayoutPorps) {
    return (
        <div>
            {props.children}
        </div>
    ) 
}