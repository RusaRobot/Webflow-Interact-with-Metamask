const web3 = new Web3(ethereum);

const isMetaMaskConnected = async () => {
    return ethereum.selectedAddress !== null;
}

export const getWalletAddress = async () => {
    return ethereum.selectedAddress ?? await ethereum.request({ method: 'eth_requestAccounts' })[0];
}

export const updateMetaMaskStatus = async () => {
    const connected = isMetaMaskConnected()
    if (connected) {
        const button = document.querySelector(window.buttonID ?? '#metabutton');
        button.textContent = "Metamask ilang";
        const accountsDiv = document.getElementById(window.buttonID ?? '#accounts');
        selectedAccount = ethereum.selectedAddress;
        document.querySelector("#accounts").textContent = selectedAccount;
    }
}

export const connectMetaMask = async () => {
   await ethereum.request({ method: 'eth_requestAccounts' });
   updateMetaMaskStatus();
}

updateMetaMaskStatus();
document.querySelector(window.buttonID ?? '#metabutton').addEventListener('click', connectMetaMask);
