import { useReducer } from "react";
import { initialState, reducer } from "./state/FormReducer";

const LongForm = () => {

  
  const [state,dispatch]=useReducer(reducer,initialState);

 
  
  
  const submit=(e)=>{
    e.preventDefault();
     
        
    }
    
  return (
    <div>
      <section className="content">
        <h1 className="content__heading">Send Me a Message</h1>
        <p className="content__lede">
          Use this handy contact form to get in touch with me.
        </p>
        <form onSubmit={submit} className="content__form contact-form">
          <div className="testing">
            <p>Does this do anything?</p>
          </div>
          <div className="contact-form__input-group">
            <input
              className="contact-form__input contact-form__input--radio"
              id="salutation-mr"
              name="gender"
              type="radio"
              value="Mr."
              onClick={(e)=>dispatch({type:"INPUT",payload:{name:e.target.name,value:e.target.value}})}

            />
            <label
              className="contact-form__label contact-form__label--radio"
              htmlFor="salutation-mr"
            >
              Mr.
            </label>
            <input
              className="contact-form__input contact-form__input--radio"
              id="salutation-mrs"
              name="gender"
              type="radio"
              value="Mrs."
              onClick={(e)=>dispatch({type:"INPUT",payload:{name:e.target.name,value:e.target.value}})}

            />
            <label
              className="contact-form__label contact-form__label--radio"
              htmlFor="salutation-mrs"
            >
              Mrs.
            </label>
            <input
              className="contact-form__input contact-form__input--radio"
              id="salutation-ms"
              name="gender"
              type="radio"
              value="Ms."
              onClick={(e)=>dispatch({type:"INPUT",payload:{name:e.target.name,value:e.target.value}})}

            />
            <label
              className="contact-form__label contact-form__label--radio"
              htmlFor="salutation-ms"
            >
              Ms.
            </label>
          </div>
          <div className="contact-form__input-group">
            <label className="contact-form__label" htmlFor="fullName">
              Full Name
            </label>
            <input
              className="contact-form__input contact-form__input--text"
              id="name"
              name="fullName"
              type="text"
              onBlur={(e)=>dispatch({type:"INPUT",payload:{name:e.target.name,value:e.target.value}})}
            />
          </div>
          <div className="contact-form__input-group">
            <label className="contact-form__label" htmlFor="email">
              Email Address
            </label>
            <input
              className="contact-form__input contact-form__input--email"
              id="email"
              name="email"
              type="email"
              onBlur={(e)=>dispatch({type:"INPUT",payload:{name:e.target.name,value:e.target.value}})}

            />
          </div>
          <div className="contact-form__input-group">
            <label className="contact-form__label" htmlFor="subject">
              How can I help you?
            </label>
            <select
              className="contact-form__input contact-form__input--select"
              id="subject"
              name="subject"
              onChange={(e)=>dispatch({type:"INPUT",payload:{name:e.target.name,value:e.target.value}})}

            >
              <option>I have a problem.</option>
              <option>I have a general question.</option>
            </select>
          </div>



          <div className="age">
            <h6 className="text-bold">Your Age</h6>
<button disabled={state.age===0}  onClick={(e)=>dispatch({type:"COUNTMAINUS"})} className="counter_button">
   - 
</button> {state.age} 
 <button onClick={(e)=>dispatch({type:"COUNTPLUS"})} className="counter_button">
  +
  </button>
          </div>






          <div className="contact-form__input-group">
            <label className="contact-form__label" htmlFor="message">
              Enter a Message
            </label>
            <textarea
              className="contact-form__input contact-form__input--textarea"
              id="message"
              name="message"
              rows="6"
              cols="65"
              onBlur={(e)=>dispatch({type:"INPUT",payload:{name:e.target.name,value:e.target.value}})}

            ></textarea>
          </div>
          <div className="contact-form__input-group">
            
            <input
              className="contact-form__input contact-form__input--checkbox"
         
              name="term"
              type="checkbox"
              onClick={(e)=>dispatch({type:"TOGGLE"})}
            />
            <label
              className="contact-form__label contact-form__label--checkbox"
              htmlFor="snacks-pizza"
            >
           
            </label>
            <p className="contact-form__label--checkbox-group">
             I agree to terms and conditions
            </p>
           
          </div>
          
         

          <button 
          className="contact-form__button" 
          type="submit"
          disabled={!state.term}
          >
            Send It!
          </button>
        </form>
      </section>
     
    </div>
  );
};

export default LongForm;
