import { useState } from "react"

const UseForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm)
  const [error, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null)

  const handleChange = (e) => {
    const {name,value} = e.target
    setForm({
      ...form, 
    [name]: value
    })
    console.log(form)
  }
  const handleBlur = (e) => {

  }
  const handleSubmit = (e) => {

  }

  return {
    form, error, loading, response, handleChange, handleBlur, handleSubmit
  }

  // return (
  //   <><form className='containPaymentMethod' onSubmit={handleComprar}>
  //     <h2>Metodo de pago</h2>
  //     <label htmlFor="name">
  //       name
  //       <input type="text" name='name' placeholder='name' onChange={handleChange} required />
  //     </label>
  //     <label htmlFor="email">
  //       email
  //       <input type="email" name="email" id="email" placeholder='email@gmail.com' onChange={handleChange} required />
  //     </label>
  //     <label htmlFor="tel">
  //       telefono
  //       <input type="tel" name="telephone" pattern="\ [0-9]{4}[ -][0-9]{6}}" placeholder='2944-123123' onChange={handleChange} required />
  //     </label>
  //     <label htmlFor="card">
  //       numero de tarjetas
  //       <input type='number' name="card" id="card" placeholder='XXXX XXXX XXXX 1234' pattern="\([0-9]{4}\) [0-9]{4}[ -][0-9]{4}" onChange={handleChange} required />
  //     </label>
  //     <div className='expired'>
  //       <label className='labelExpired'>
  //         Vencimiento
  //         <div>
  //           <input type="number" name="month" id="month" min={0} max={12} placeholder="MM" onChange={handleChange} required />
  //           <input type="number" name="year" id="year" min={22} max={30} placeholder="YY" onChange={handleChange} required />
  //         </div>
  //       </label>
  //       <label htmlFor="">
  //         CVV
  //         <input type="number" name='cvv' placeholder={123} onChange={handleChange} required />
  //       </label>
  //     </div>
  //     <button className='entrar' type='submit'>finalizar compra</button>

  //   </form></>
  // )
}

export default UseForm