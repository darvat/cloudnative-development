<script>
import { onMount } from "svelte";
import {currentUser} from "../stores/user";
import { goto, stores } from "@sapper/app";
const { page } = stores();
onMount(() => {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            currentUser.signIn(user);
            if ($page.query.redirect) {
                goto($page.query.redirect);
            }
            } else {
                currentUser.signOut();
            }
    });
});
</script>