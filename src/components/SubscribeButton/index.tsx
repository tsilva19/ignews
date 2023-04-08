import { signIn, useSession } from 'next-auth/react';
import React from 'react';
import styles from './styles.module.scss'

interface Props {
  priceId: string;
}


export default function SubscribeButton(props: Props) {
  const { data: session} = useSession()

  function handleSubscribe(){
    if (!session){
      signIn('github')
      return;
    }
  }


  return (
    <button
     type="button"
     className={styles.subscribeButton}
     onClick={handleSubscribe}
    >

     Subscribe now

    </button>
  );
}
