# Webflow-Interact-with-Metamask
Connecting metamask on Webflow
# How to use?

1. Create a button in Webflow / Wordpress
2. Assign it an HTML ID connect in button settings. Guide for Webflow
3. Create a Custom Code block in Webflow / Wordpress
4. Copy & paste this code in the custom code block:

```JS
<script>
// Change to custom button ID, starting with # (optional)
window.buttonID = "#connect"
</script>
<script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js" />
<script type="module" src="https://buildship-dev.github.io/metamask-button-webflow/wallet.js" />
```
5. Done!
