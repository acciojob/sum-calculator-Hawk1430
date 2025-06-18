import React, {useState, useEffect} from 'react'

const SumCalculator = () => {
    const [num,setNum] = useState(0);
    const [result, setResult] = useState(0);
      useEffect(()=>{
        setResult(prev => prev + num);
    }, [num])

  return (
    <div>
        <h1>Sum Calculator</h1>
        <input type="number" 
          value={num}
          onChange={(e) => setNum(Number(e.target.value))}
        />
        <div>
          <p>Sum: {result}</p>
        </div>
    </div>
  )
}

export default SumCalculator