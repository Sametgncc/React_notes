
//  KURAL : JSX içinde mutlaka bir tane parent olmalıdır 1 den fazla olunca uyarı vermekte 



const Jsx1 = () => {
  return (
    <div>
      <label htmlFor="name">Jsx</label>
      <div className="warning" >Hello</div>
    </div>
  )
}

export default Jsx1
