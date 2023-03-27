import { Link } from 'react-router-dom';

function Reserve() {
  return (
    <form
      className='container has-background-light py-3 px-6'
      spellCheck='off'
      autoComplete='off'
      noValidate='noValidate'
      id='reserve-table'
    >
      <h1 className='has-text-centered is-size-4 has-text-weight-semibold my-6'>
        Reserve your table
      </h1>

      <div className='field'>
        <label htmlFor='name' className='label'>
          Name *
        </label>
        <div className='control'>
          <input
            className='input'
            name='name'
            id='name'
            type='text'
            placeholder='Enter your name'
          />
        </div>
      </div>

      <div className='field'>
        <label htmlFor='email' className='label'>
          Email *
        </label>
        <div className='control'>
          <input
            className='input'
            name='email'
            id='email'
            type='email'
            placeholder='Enter your email'
          />
        </div>
      </div>

      <div className='field'>
        <label htmlFor='subject' className='label'>
          Subject *
        </label>
        <div className='control'>
          <div className='select is-fullwidth'>
            <select name='subject' id='subject'>
              <option value={'b'}>Birthday</option>
              <option value={'l'}>Lunch</option>
              <option value={'d'}>Dinner</option>
            </select>
          </div>
        </div>
      </div>

      <div className='field'>
        <label htmlFor='date' className='label'>
          Date *
        </label>
        <div className='control'>
          <input
            className='input'
            name='date'
            id='date'
            type='date'
            placeholder='Enter your date'
          />
        </div>
      </div>

      <div className='field'>
        <label htmlFor='notes' className='label'>
          Notes
        </label>
        <div className='control'>
          <textarea
            className='textarea'
            name='notes'
            id='notes'
            placeholder='Extra notes'
          ></textarea>
        </div>
      </div>

      <div className='field'>
        <div className='control'>
          <label className='checkbox'>
            <input type='checkbox' /> I agree to the{' '}
            <Link to='#'>terms and conditions</Link>
          </label>
        </div>
      </div>

      <div className='field is-grouped'>
        <div className='control'>
          <button className='button is-primary is-light'>Reserve</button>
        </div>
        <div className='control'>
          <button className='button is-danger is-light'>Cancel</button>
        </div>
      </div>
    </form>
  );
}

export default Reserve;
