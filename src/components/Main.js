import Card from './Card';

function Main()
{
    const dishes = [
        {
          id: 1,
          name: 'Dish One',
          imgSrc: '/imgs/dishes/1.jpg',
          description: 'This is dish one. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris',
          price: 15.99
        },
        {
          id: 2,
          name: 'Dish Two',
          imgSrc: '/imgs/dishes/2.jpg',
          description: 'This is dish two. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris',
          price: 23.89
        },
        {
          id: 3,
          name: 'Dish Three',
          imgSrc: '/imgs/dishes/3.jpg',
          description: 'This is dish three. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris',
          price: 27.99
        }
      ];
    
    return(
        <>
          <section className="columns">
  
            {dishes.map((dish) => (

                <div className="column is-12-mobile is-3-tablet">
                    <Card imgSrc={dish.imgSrc} price={dish.price} 
                    description={dish.description} title={dish.title} />
                </div>
            ))}


         </section>
        </>
    );

}

export default Main;