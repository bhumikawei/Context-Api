import styles from 'Navbar.module.css'

const Navbar = () => {
  return (
    <>
      <nav className={`${styles.navbar} navbar navbar-expand-lg bg-body-tertiary`}>
        <div className="container-fluid">

          <a className={`${styles['navbar-brand']} navbar-brand`} href="#">Navbar</a>

          <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
           aria-controls="navbarNav" 
           aria-expanded="false" 
           aria-label="Toggle navigation">

            <span className="navbar-toggler-icon"></span>

          </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav">

            <li className="nav-item">

                <a className={`${styles.navLink} nav-link active`} aria-current="page" href="#">Home</a>

            </li>

            <li className="nav-item">
                <a className={`${styles.navLink} nav-link`} href="#">Features</a>
            </li>

            <li className="nav-item">
                <a className={`${styles.navLink} nav-link`} href="#">Pricing</a>
            </li>

            <li className="nav-item">
                <a className={`${styles.navLink} nav-link disabled`} aria-disabled="true">Disabled</a>
            </li>

          </ul>
        </div>
       </div>
      </nav>
    </>
  )
}

export default Navbar