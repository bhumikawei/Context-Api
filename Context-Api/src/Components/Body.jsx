import image from '../assets/vernon.jpg'

const Card = () => {
  return (
    
      <div className="card" style={{width: "18rem"}}>
      <img src={image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Vernon</h5>
        <p className="card-text">Vernon is Vernon . 2 - 1</p>
        <a href="#" className="btn btn-primary">Songs</a>
      </div>
      </div> 
  )
}
export default Card