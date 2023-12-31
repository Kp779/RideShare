import React from "react";
import Link from 'next/link';
import styles from '../../styles/styles.module.css';
import { useEffect, useState } from 'react';
import {ethers} from 'ethers';

const HomeNavbar = () => {
  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState(false);

  useEffect(() => {
    setIsMetamaskInstalled(!!window.ethereum);
  }, []);

  async function handleMetamaskLogin() {
    try {
      // Check if Metamask is installed
      if (!isMetamaskInstalled) {
        throw new Error('Metamask is not installed');
      }

      // Request the user's Ethereum address
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      console.log(address);
      // Authenticate the user on your backend server and retrieve a JWT token
      const response = await fetch('/api/nonce', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ address }),
      });
      if (!response.ok) {
        const error = await response.json();
        console.log(error);
      }
      const resp = await response.json();
      const nonce = resp.message;
      console.log(nonce);

      const signedMessage = await signer.signMessage(nonce);
      const data = { signedMessage, nonce, address };
      const authResponse = await fetch('/api/login', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      let token = await authResponse.json();
      console.log(token);

      //const { token } = await response.json();

      // Store the JWT token in local storage
      localStorage.setItem(address, token.token);

      // Redirect the user to the protected route
      window.location.href = '/protected-route';
    } catch (error) {
      console.error(error);
      alert('Failed to login with Metamask');
    }
  }
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Ride share</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active mx-3 "style={{fontSize:'1.3rem', fontWeight:600}} aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-3" href="#" style={{fontSize:'1.3rem', fontWeight:600}}>About</a>
        </li>
     
      </ul>
      <div className="d-flex ">
      <button className={styles.btn} onClick={handleMetamaskLogin}>Login with Metamask</button>
      <Link href="/signup">
          <button className={styles.btn}>Signup</button>
        </Link>
    </div>
       
    </div>
  </div>
</nav>
        </>

    );
}
export default HomeNavbar ;