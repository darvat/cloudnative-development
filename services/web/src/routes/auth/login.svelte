<script>
import { goto } from '@sapper/app';
import { onMount } from "svelte";

let firebaseAuthUiConfig = {}
let isSignInUiShown = false
onMount(() => {    
    firebaseAuthUiConfig = {
        callbacks: {
            signInSuccessWithAuthResult: () => {
                goto("/admin");
                return false;
            },
            uiShown: () => {
                isSignInUiShown = true
            }
        },
        credentialHelper: firebaseui.auth.CredentialHelper.NONE,
        signInFlow: "popup",
        signInOptions:
            [firebase.auth.EmailAuthProvider.PROVIDER_ID]
    };
});

const signIn = () => {
    firebaseAuthUi.start("#firebaseui-auth-container", firebaseAuthUiConfig);
};
</script>

<button class:hidden={isSignInUiShown} on:click={signIn}>Sign In</button>
<div id="firebaseui-auth-container"></div>