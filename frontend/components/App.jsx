import { Card, Stack, ToggleButton } from 'react-bootstrap'
import { useState,useEffect } from 'react';
import { fetchCart } from '../services/cartService';


export default function App({ home }) {
  const [weaponType, setWeaponType] = useState('');
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    async function getCart() {
      const fetchedData = await fetchCart();
      setCart(fetchedData);
    }
    getCart();
  }, []);

  console.log(cart);

  return (
    <div className="tw-text-5xl">
      
      <Card style={{ borderWidth: '3px', width: '100%', height: '20%', verticalAlign: 'center', display: 'flex', borderColor: '#9de3ef' }}>
        <Card.Body>
          <Card.Title style={{ fontSize: '20px', color: '#dfb990' }}>Choose Our Next Adventure:</Card.Title>
          <Stack className="col-md-12" direction="horizontal" gap={3} style={{ width: '100%', height: '75%' }}>

            <ToggleButton
              id="toggle-check"
              type="checkbox"
              variant="outline-light"
              checked={weaponType == 'spear'}
              value='spear'
              style={{ height: '100%', width: '100%', borderColor: "lightgrey" }}
              onChange={(e) => setWeaponType(e.currentTarget.value)}
            >
              <img style={{}} src='https://cdn-icons-png.freepik.com/512/5778/5778627.png'></img>
            </ToggleButton>

            <ToggleButton
              id="toggle-check1"
              type="checkbox"
              variant="outline-light"
              checked={weaponType == 'knife'}
              value='knife'
              style={{ height: '100%', width: '100%', borderColor: "lightgrey" }}
              onChange={(e) => setWeaponType(e.currentTarget.value)}
            >
              <img style={{ height: '100%' }} src='https://www.pngall.com/wp-content/uploads/15/Bow-Arrow-PNG-Images.png'></img>

            </ToggleButton>

          </Stack>
        </Card.Body>
      </Card>
    </div>
  )
}

