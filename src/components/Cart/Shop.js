import React, {useState} from 'react'
import '../Cart/Shop.css';
import {Link} from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import '../../assets/css/animaciones.css'
import {  Container } from 'react-bootstrap';
import Swal from 'sweetalert2'
import Thanks from '../../assets/thanks.jpg'



const Cart = () => {
  const { cart, totalPrice, clear, totalItems } = useCartContext(); //las importo del useCartContext
  
   // Estados para los campos del formulario de cliente
   const [nombre, setNombre] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
  
    // Estados para manejar los errores
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrormsg] = useState(false);

    // Handle para el campo de nombre
  const handleNombre = (e) => {
    setNombre(e.target.value);
    setSubmitted(false);
  };
 
  // Handle para el campo de email
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
 
  // Handle para el cambio en el campo de telefono
  const handlePhone = (e) => {
    setPhone(e.target.value);
    setSubmitted(false);
  };

   const order = { //todo esto se transmitira a la DB de firebase
    buyer: {
      name: `${nombre}`,
      email: `${email}`,
      phone: `${phone}`,
    },
    items: cart.map(product =>({id: product.id, name: product.name, price: product.price, quantity: product.quantity})),
    total: totalPrice(),
  }

  const handleClick = () =>{
    const db = getFirestore(); //instancia de firestore
    const ordersCollection = collection(db, 'orders'); //referencia a la colección que se creara ahora
    addDoc(ordersCollection, order) //queremos agregar el objeto order en la colección y guardarlo
	// .then(({id}) => console.log(id))
	.then(response =>{
	   Swal.fire({
       icon: 'success',
       title: `Compra realizada con éxito, conserve el siguiente ID ${response.id} para el pago online`,
       text: 'Gracias por su compra',
       })   
	})
	setTimeout(() => {
		clear();
	  }, 3000);	
  }
  

  // Funciones para verificar los inputs del formulario de cliente y mostrar los errores (si los hay) 

  function onlyLettersAndSpaces(str) {
    return /^[A-Za-z\s]*$/.test(str);
  }
  function containsArroba(str) {
    const tieneArroba = /@/;
    return tieneArroba.test(str);
  }

  function onlyNumbers(str) {
    return /^[0-9]+$/.test(str);
  }
  

  // Handle para el formulario de datos del cliente
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!onlyLettersAndSpaces(nombre) || nombre === '' || !containsArroba(email) || email === '' || !onlyNumbers(phone) || phone === '') {
    setErrormsg(true);
     
    } else {
      setSubmitted(true);
      setErrormsg(false);
      handleClick();
    }
  };

// Mensaje de éxito
const successMessage = () => {
  return (
    <div
      className="success"
      style={{
        display: submitted ? '' : 'none',
      }}>
      <h4 className="bg-transparent text-success scale-in-ver-center">Pago exitoso</h4>
    </div>
  );
};

// Mensaje de error 
const errorMessage = () => {
  return (
    <div
      className="error"
      style={{
        display: errorMsg ? '' : 'none',
      }}>
      <h5 className="bg-transparent text-danger scale-in-ver-center">Por favor complete todos los campos correctamente</h5>
    </div>
  );
};

      if (cart.length === 0) {
          return <section id="Carrito" className="py-5 text-center container">
          <div className="row py-lg-5">
              <div className="col-12 text-light">
			  <img src={Thanks} alt="logo" className="img-fluid" />
              <p className='fs-4'>Tu orden fue completada con éxito.</p>
              <p className='fs-6'>Un email incluyendo detalles de la compra ha sido enviado al correo electrónico provisto.</p>
			  <Link to="/" className='fs-5 text-purple'>Seguir comprando</Link>
            </div>
          </div>
        </section>
    } 

  return (
      <div className="container">
      <main>
      <div className="py-3 text-center text-light">
        <h2 className='text-shadow'>Checkout</h2>
        <p className="lead">Su lista de compra y formulario de pago.</p>
      </div>
      <div className="row g-5">
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary text-light">Su carrito</span>
            <span className="badge bg-purple rounded-pill">{totalItems()}</span>
          </h4>
          <ul className="list-group mb-3 bg-purple">
          {cart.map(item => (
            <Container key={item.id} className="list-group-item justify-content-between lh-sm"><li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
			    <img src={item.image} alt={item.name} className='img-fluid' />
                <h6 className="my-0">{item.name}{item.cant}</h6>
              </div>
            </li>
            </Container>
          ))}
          <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Total:$ {totalPrice()}</h6>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-md-7 col-lg-8 text-light">
          <h4 className="mb-3">Datos del cliente</h4>
          <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
      
          <form className="needs-validation">
            <div className="row g-3">
              <div className="col-sm-12">
                <label htmlFor="firstName" className="form-label">Nombre y apellido</label>
                <input onChange={handleNombre} value={nombre} type="text" className="form-control input" id="name" placeholder="Nombre y apellido" required />
                <div className="invalid-feedback">
                  Nombre requerido
                </div>
              </div>
              
              <div className="col-12">
                <label htmlFor="email" className="form-label">Email <span className="text-muted"></span></label>
                <input onChange={handleEmail} value={email} type="email" className="form-control input" id="email" placeholder="tu@email" required />
                <div className="invalid-feedback">
                  Por favor introduzca un email válido.
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="phone" className="form-label">Teléfono</label>
                <input onChange={handlePhone} value={phone} type="phone" className="form-control input"  id="phone" placeholder="0303456" required />
                <div className="invalid-feedback">
                  Por favor coloque su teléfono
                </div>
              </div>
            </div>
            <hr className="my-4" />
            
            <hr className="my-4" />
            <button onClick={handleSubmit} className="w-100 btn btn-lg cartButton" type="submit">Pagar</button>
          </form>
          
        </div>
      </div>
    </main>
  </div>
  )
}

export default Cart;

