import React, { useCallback, useState, useEffect } from 'react';
import Web3 from 'web3/dist/web3.min.js';

import Button from '../Button';

import './styles.scss';

const License = () => {
  const [account, setAccount] = useState(); // state variable to set account.

  useEffect(() => {
    async function load() {
      const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
      const accounts = await web3.eth.requestAccounts();
      console.log(web3);

      setAccount(accounts[0]);
    }

    load();
  }, []);
  const handleLoadLicense = useCallback(async () => {
    console.log('a');
    if (!window.etherium) {
      alert('Please install Metamask');
    }
    if (window.etherium) {
      const accs = await window.etherium.request({
        method: 'eth_requestAccounts',
      });
      console.log(accs[0]);
    }
  }, []);

  return (
    <div className="license">
      <div className="license__noti">
        You don't have any licenses. {account}
      </div>
      <Button onClick={handleLoadLicense}>Load license</Button>
    </div>
  );
};

export default License;
