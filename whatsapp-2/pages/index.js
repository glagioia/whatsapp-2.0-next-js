import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Whatsapp 2.0</title>       
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>
      <div style={{width:'50%', textAlign:'center'}}>
        <Image src="/whatsapp-home.jpg" height={250} width={250}/>
        <h2 style={{color: '#727372'}}>Keep your phone connected</h2>
        <p style={{color: '#b7b9bb'}}>
          WhatsApp connnects you to your phone to sync messages. To reduce data usage, connect your phone to Wi-Fi.
        </p>

      </div>
     
    </Container>
  )
}


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8fafc;
  width: 100%;
  height: 100%;
  `;

