import Card from './Card';
import dishes from './../assets/js/dishes';

function Main() {
  return (
    <section className='sec'>
      <div className='mt-6 mb-3'>
        <h1 className='title has-text-grey'>Meals</h1>
      </div>
      <section className='columns is-multiline'>
        {dishes.map((dish) => (
          <div key={dish.id} className='column is-12-mobile is-3-tablet'>
            <Card
              imgSrc={dish.imgSrc}
              price={dish.price}
              description={dish.description}
              name={dish.name}
            />
          </div>
        ))}
      </section>
    </section>
  );
}

export default Main;
