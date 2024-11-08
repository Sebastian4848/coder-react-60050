import React, { useState, useContext } from 'react';
import { Cart as CartContext } from '../../context/CartProvider';
import { db } from "../../firebase/config";
import { collection, addDoc, doc, runTransaction, serverTimestamp } from 'firebase/firestore';
import Swal from 'sweetalert2';
import styles from './Checkout.module.scss';
import Loader from '../Loader/Loader';
import { NavLink } from 'react-router-dom';

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (email !== confirmEmail) {
      Swal.fire({
        title: "Error!",
        text: "Los Emails no coinciden",
        icon: "error",
        confirmButtonText: "OK"
      });
      return;
    }

    setLoading(true);

    try {
      // Start a transaction to validate and update stock
      const order = await runTransaction(db, async (transaction) => {
        const productsToUpdateRefs = cart.map((product) => ({
          ref: doc(db, 'products', product.id),
          id: product.id,
          quantity: product.quantity
        }));

        const stockUpdates = [];

        // Step 1: Check stock for each product
        for (const product of productsToUpdateRefs) {
          const productDoc = await transaction.get(product.ref);

          if (!productDoc.exists()) {
            throw new Error(`Product ${product.id} does not exist.`);
          }

          const currentStock = productDoc.data().stock;
          if (currentStock < product.quantity) {
            throw new Error(`Not enough stock for ${productDoc.data().title}. Available: ${currentStock}, Required: ${product.quantity}`);
          }

          // Prepare the stock update
          stockUpdates.push({ ref: product.ref, newStock: currentStock - product.quantity });
        }

        // Step 2: Update stock for each product
        stockUpdates.forEach(({ ref, newStock }) => {
          transaction.update(ref, { stock: newStock });
        });

        // Step 3: Create the new order
        const newOrder = {
          buyer: { name, email, phone, address },
          items: cart,
          total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
          timestamp: serverTimestamp(),
          status: 'generated'
        };

        const orderRef = await addDoc(collection(db, 'orders'), newOrder);
        return orderRef.id;
      });

      setOrderId(order);
      clearCart();
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: `Hubo un error en la creación de tu orden: ${error.message}`,
        icon: "error",
        confirmButtonText: "OK"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.checkoutContainer}>
      <h1>Checkout</h1>
      {loading ? (
        <>
        <h2>...Generando Orden...</h2>
        <Loader/>
        </>
      ) : orderId ? (
        <div className={styles.checkoutContainer}>
          <h2>Gracias por tu compra! Tu numero de orden es el siguiente: {orderId}</h2>
          <p>Recibirás un email con los detalles de tu pedido</p>
          <NavLink to="/" >
                    <button className={styles.button}>
                        Ir a Home
                    </button>
                </NavLink>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <p>Ingresa tus datos</p>
          <input
            type="text"
            placeholder="Nombre completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Telefono"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Dirección"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Confirmar Email"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            required
          />
          <button type="submit" className={styles.submitButton}>Confirmar Compra</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
