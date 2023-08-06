import { useState } from 'react';
import './Form.css';

export default function Form() {
    const [to, setTo] = useState('Purchase Interest Team');
    const [message, setMessage] = useState('I want to purchase the product');
  
    function handleSubmit(e) {
      e.preventDefault();
      setTimeout(() => {
        alert(`You sent a ${message} to ${to}`);
      }, 5000);
    }
  
    return (
      <form onSubmit={handleSubmit} id='contact'>
        <label>
            <h3>Envie o seu pedido por aqui!</h3>
            <p>Aqui você pode colocar sua intenção de compra ou pedir ajuda para o nosso time de relacionamento:</p>
        </label>
        <label>
          To:{' '}
          <select
            value={to}
            onChange={e => setTo(e.target.value)}>
            <option value="Purchase Interest">Purchase Interest</option>
            <option value="Client Contact">Client Contact</option>
          </select>
        </label>
        <textarea
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    );
  }