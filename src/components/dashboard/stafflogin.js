import React,{useState} from "react";
import '../../App.css'
export function Stafflogin(){
    const [datas, setDatas] = useState([]);

  function Addlist() {
    const cartValue = document.getElementById('cart-value').value;
    if (cartValue.trim() !== '') {
    
      setDatas([...datas, cartValue]);
      document.getElementById('cart-value').value = '';
    }
  }

  return (
    <div className="App">
      <div className='Add-to-cart'>
        <h2>TO DO LIST</h2>
        <form>
          <label>Enter a list</label>
          <input type='text' id='cart-value' placeholder='Enter a Routins' />
          <input type='button' value="Add to List" onClick={Addlist} />
        </form>
      </div>

      <div className='table'>
        <table border={1}>
          <thead>
            <tr>
              <th>id</th>
              <th>Daily Routines</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((value, index) => (
            
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}