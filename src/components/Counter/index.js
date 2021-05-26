import '../../style/counter.css'
import disabledMinus from '../../assets/images/minus-circle-opacity-50.svg'
import minus from '../../assets/images/minus-circle.svg'
import plus from '../../assets/images/plus-circle.svg'

function Counter({counter, handleClickSuma, handleClickMenos}){
  let disabledBtn = counter <= 1 ? true : false

  if(disabledBtn) {
    return(
      <section className="counter">
        <button onClick={() => handleClickMenos()} disabled>
          <img src={disabledMinus} alt="minus button disabled"/>
        </button>
        <p>{counter}</p>
        <button className="" onClick={() => handleClickSuma()}>
          <img src={plus} alt="plus button"/>
        </button>
      </section>
      )
    }

    return(
      <section className="counter">
        <button className="" onClick={() => handleClickMenos()}>
          <img src={minus} alt="minus button"/>
        </button>
        <p>{counter}</p>
        <button className="" onClick={() => handleClickSuma()}>
          <img src={plus} alt="plus button" />
        </button>
      </section>
    )
  }

export default Counter