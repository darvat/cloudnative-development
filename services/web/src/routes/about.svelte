<script>
	import FeatureToggle from "../components/feature-toggle.svelte";
	import { FEATURE_TOGGLES } from "../feature-toggles";
	import ContactCard from "../components/contact-card.svelte";
	const erinLindford = {
		name: "Erin Lindford",
		avatarSrc:"​https://randomuser.me/api/portraits/women/17.jpg​",
		job: "Customer Support",
		email: "​erinlindford@example.com​",
		phone: "(555) 765-4321"
	}
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<h1>About this site</h1>

<ContactCard {...erinLindford} />

<p>This is the 'about' page. There's not much here.</p>

<FeatureToggle name={FEATURE_TOGGLES.vipWelcome.name}>
	<p>Some people see this, others don't!</p>
</FeatureToggle>