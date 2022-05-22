interface SubMenuProps {
    children: React.ReactNode;
}

export default function SubMenu(props: SubMenuProps) {
    return (
        <nav className='sub-nav'>
            { props.children }
        </nav>
    )
}