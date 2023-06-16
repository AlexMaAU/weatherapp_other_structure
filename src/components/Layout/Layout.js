import './Layout.css'

const Layout = ({title, data})=>{
    return (
        <div className="layout">
            <div className="title">{title}</div>
            <div className="data">{data}</div>
        </div>
    )
}

export default Layout