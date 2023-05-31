import './styles/App.scss';
import { propsInterface } from './Interfaces';
import { FC } from 'react';


const Form : FC<propsInterface> = ({errors, setErrors, cardState, setCardState}) => {
  return (
    <form>
      <div className="form-field">
        <label htmlFor="name"></label>
        <input id="name" placeholder="e.g Jane Appleseed"></input>
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div className="form-field">
        <label htmlFor="card-num"></label>
        <input id="card-num" placeholder="e.g 1234 5678 9123 0000"></input>
        {errors.cardNum && <p>{errors.cardNum}</p>}
      </div>
      <div className="three-fields">
        <div className="form-field">
          <label htmlFor="month"></label>
          <input id="month" placeholder="MM"></input>
          {errors.month && <p>{errors.month}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="year"></label>
          <input id="year" placeholder="YY"></input>
          {errors.year && <p>{errors.year}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="cvc"></label>
          <input id="cvc" placeholder="e.g 123"></input>
          {errors.cvc && <p>{errors.cvc}</p>}
        </div>
      </div>
    </form>
  )
}

export default Form;