import React from 'react';

function Testimonial() {
  const testimonials = [
    {
      id: 1,
      image: './imgs/customers/cust1.jpg',
      name: 'John',
      message: 'Amazing Dish. I recommend it',
      rating: 5,
    },
    {
      id: 2,
      image: './imgs/customers/cust2.jpg',
      name: 'Peter',
      message: 'Great service and food',
      rating: 4,
    },
    {
      id: 3,
      image: './imgs/customers/cust3.jpg',
      name: 'Rebecca',
      message: 'Delicious meal, will come back',
      rating: 4,
    },
  ];

  return (
    <section className='sec'>
      <div className='sec mt-6 mb-3'>
        <h2 className='title has-text-grey'>Testimonials</h2>
      </div>

      <div className='columns is-multiline'>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className='column is-fullwidth is-12-mobile is-3-tablet'
          >
            <div className='card'>
              <div class='card-image'>
                <figure class='image is-4by3'>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    width='200px'
                  />
                </figure>
              </div>
              <div class='card-content'>
                <div class='content'>
                  <h2 className='is-size-5'>{testimonial.name}</h2>
                  <p className=''>{testimonial.message}</p>
                  <div>
                    {[...Array(5)].map((_, i) => {
                      const ratingValue = i + 1;
                      return (
                        <span key={i}>
                          {ratingValue <= testimonial.rating ? (
                            <span
                              className='has-text-warning is-size-5'
                              title='star'
                            >
                              ★
                            </span>
                          ) : (
                            <span
                              className='has-text-grey-light is-size-5'
                              title='star'
                            >
                              ☆
                            </span>
                          )}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonial;
