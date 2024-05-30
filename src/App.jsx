import { useState } from 'react'
import './App.css'
function App() {
  //state to hold the values
  const [height,setHeight] = useState(0)
  const [weight,setWeight] = useState(0)
  const [age,setAge] = useState(0)
  const [bmi,setBmi] = useState(0)
  const [status, setStatus] = useState()

  //conditional rendering
  const [isHeight, setIsHeight] = useState(true)
  const [isweight, setIsweight] = useState(true)
  const [isAge, setIsAge] = useState(true)

  //validation
  const validate = (e) =>{
    let name = e.target.name 
    let value = e.target.value 
    console.log(!!value.match(/^[0-9]*$/));
    
    if(!!value.match(/^[0-9]*$/)){
      if(name == 'height'){
        setHeight(value)
        setIsHeight(true)
      }
      else if(name == 'weight'){
        setWeight(value)
        setIsweight(true)
      }
      else{
        setAge(value)
        setIsAge(true)
        
      }
    }
    else{
      if(name == 'height'){
        setIsHeight(false)
      }
      else if(name == 'weight'){
        setIsweight(false)
      }
      else{
        setIsAge(false)
      }
    }
  }
  const handleClear = () =>{
    setHeight(0)
    setWeight(0)
    setAge(0)
    setStatus('')
    setIsHeight(true)
    setIsweight(true)
    setBmi(0)
    setIsAge(true)
  }



  //calculate function
  const calculate = () =>{
    let heightmtr = height/100
    let mtrsqr = heightmtr*heightmtr
    let Bmi = weight/mtrsqr
    let bodymass = Bmi.toFixed(2)
    setBmi(bodymass)

    if(bodymass<18.5){
      setStatus('Under weight')
    }
    else if(bodymass>18.5 && bodymass<24.9){
      setStatus('Normal weight')
    }
    else if(bodymass>25 && bodymass<29.9){
      setStatus('Over weight')
    }
    else{
      setStatus('Obesity')
    }
  }
  return (
    <>
       <div className='d-flex justify-content-center align-items-center' id='bmi' style={{width:'100', height:'100vh'}}>
        <div className='p-5 rounded shadow' id='div1' style={{width:'500px'}}>
          <h1 className='text-center'>BMI Calculator</h1>
          <p className='text-center fw-bolder mt-3'>Measure your body fat based on weight and height. </p>
          
          <div className='mt-5 flex-column rounded shadow bg-light text-dark d-flex justify-content-center align-items-center p-4 '>
          <h2 className='fs-1 fw-bolder'>{bmi}</h2>
          <p className='fw-bolder'>Body Mass Index</p>  
          <h3 className='text-center fw-bolder mt-2' id='status'>{status}</h3>
           </div>
          <div className='d-flex mt-3 justify-content-between '>
            <label className='mt-2' htmlFor=""><h5>Age :</h5></label>
            <input type="text" className='form-control w-25 ms-1' placeholder='enter age' onChange={(e)=>validate(e)} name='age' style={{height:'40px'}} value={age || ""}/>
            {!isAge &&
              <p>Invalid input</p>
            }
            <h5 className='ms-5'>ages : 2-120</h5>
          </div>
          {/* <div className='d-flex mt-3'>
            <h5>Gender :</h5> <input type="radio" className='ms-2' style={{marginTop:'-15px'}} /><p className='fs-5 ms-1'>Male</p>
            <input type="radio" className='ms-2' style={{marginTop:'-15px'}} /><p className='fs-5 ms-1'>Female</p>
          </div> */}
          <div className='d-flex mt-3 justify-content-between'>
          <h5 className='mt-2'>Height :</h5>
          <input type="text" placeholder='Height in cm' className='form-control w-75 ms-2' name='height' onChange={(e)=>validate(e)} value={height || ""}/>
          {!isHeight && 
            <p>Invalid input</p>
          }
         </div>
         <div className='d-flex mt-3 w-100 justify-content-between'>
          <h5 className='mt-2'>Weight :</h5>
          <input type="text" placeholder='Weight in cm' className='form-control w-75 ms-2' name='weight' onChange={(e)=>validate(e)} value={weight || ""}/>
          {!isweight && 
            <p>Invalid input</p>
          }
         </div>
         <div className='d-flex mt-4 justify-content-between w-100'>
         <button className='btn btn-outline-light ' style={{width:'170px' , height:'60px'}} onClick={calculate}>CALCULATE</button>
         <button className='btn btn-outline-light' style={{width:'190px' , height:'60px'}} onClick={handleClear}>CLEAR</button>
         </div>
          </div>
       </div>
    </>
  )
}

export default App
