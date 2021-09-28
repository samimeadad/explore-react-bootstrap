import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards/Cards';
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import News from './components/News/News';

function App () {
  const items = [
    {
      name: 'first items',
      description: 'sdfsdfwerewrdfgs 83wirewourhof weouryosgfobfv sbvo ouroewuhroueiwhf',
      img: 'https://image.shutterstock.com/image-vector/vector-illustration-allahu-akbar-arabic-260nw-320327609.jpg'
    },
    {
      name: 'second items',
      description: 'sdfsdfwerewrdfgs 83wirewourhof weouryosgfobfv sbvo ouroewuhroueiwhf',
      img: 'https://today.salamweb.com/wp-content/uploads/2021/03/dreamstime_s_91441921-1-768x612.jpg'
    },
    {
      name: 'third items',
      description: 'sdfsdfwerewrdfgs 83wirewourhof weouryosgfobfv sbvo ouroewuhroueiwhf',
      img: 'https://miro.medium.com/max/1000/1*kbD_0UQ3raDZgxJQcXWQcg.png'
    },
    {
      name: 'fourth items',
      description: 'sdfsdfwerewrdfgs 83wirewourhof weouryosgfobfv sbvo ouroewuhroueiwhf',
      img: 'https://image.shutterstock.com/image-vector/vector-illustration-allahu-akbar-arabic-260nw-320327609.jpg'
    },
    {
      name: 'fifth items',
      description: 'sdfsdfwerewrdfgs 83wirewourhof weouryosgfobfv sbvo ouroewuhroueiwhf',
      img: 'https://image.freepik.com/free-vector/golden-arabic-calligraphy-allahu-akbar-allah-is-great_1302-25345.jpg'
    },
  ];

  const [ news, setNews ] = useState( [] );

  useEffect( () => {
    fetch( 'https://newsapi.org/v2/everything?q=tesla&from=2021-08-28&sortBy=publishedAt&apiKey=cec10e31600e4c019690b030773febfd' )
      .then( res => res.json() )
      .then( data => setNews( data.articles ) );
  }, [] );

  return (

    <div>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {
          items.map( item => <Cards key={ item.name } item={ item }></Cards> )
        }

      </div>
      <div className="text-center mb-5">
        <Button variant="primary">Hello Me</Button>
      </div>

      <div className="text-center">
        {
          news.length === 0 ?
            <Spinner animation="border" />
            :
            <Row xs={ 1 } md={ 3 } className="g-4">
              {
                news.map( nw => <News news={ nw }></News> )
              }
            </Row>
        }
      </div>
    </div>
  );
}

export default App;