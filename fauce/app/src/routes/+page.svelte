<script lang="ts">
	import type { SDKProvider } from '@metamask/sdk';

	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { Web3Eth } from 'web3-eth';

	// Import Components
	import CoverImage from '@/components/CoverImage.svelte';
	import ProfileHeader from '@/components/ProfileHeader.svelte';
	import Card from '@/components/shared/Card.svelte';

	interface Window {
		ethereum?: SDKProvider;
	}

	let isHasProvider = $derived(browser && typeof window?.ethereum !== 'undefined');
	let web3 = $derived(isHasProvider ? new Web3Eth(window?.ethereum) : null);

	onMount(async () => {
		$effect(() => {
			console.log(web3);
		});
	});

	const onConnectWallet = async () => {
		if (!isHasProvider) return;

		const accounts = await web3?.provider?.request({
			method: 'eth_requestAccounts'
		});
		console.log('Accounts requested from MetaMask RPC: ', accounts);
	};
</script>

<!-- <button class="bg-neutral-700" on:click={onConnectWallet}>connect</button> -->

<div class="max-w-[990px] mx-auto p-4">
	<CoverImage></CoverImage>
	<ProfileHeader></ProfileHeader>

	<div class="w-full mt-10 flex gap-x-4">
		<div class="max-w-sm flex flex-col gap-y-4">
			<Card title="✨ Future mochibuddies Retail Shop ✨">
				{#snippet header_right()}
					<button class="bg-gray-100 p-1.5 rounded-lg hover:bg-gray-200">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							class="w-5 h-5 fill-black -scale-x-100"
							><path
								d="M11 7.05V4a1 1 0 0 0-1-1 1 1 0 0 0-.7.29l-7 7a1 1 0 0 0 0 1.42l7 7A1 1 0 0 0 11 18v-3.1h.85a10.89 10.89 0 0 1 8.36 3.72 1 1 0 0 0 1.11.35A1 1 0 0 0 22 18c0-9.12-8.08-10.68-11-10.95zm.85 5.83a14.74 14.74 0 0 0-2 .13A1 1 0 0 0 9 14v1.59L4.42 11 9 6.41V8a1 1 0 0 0 1 1c.91 0 8.11.2 9.67 6.43a13.07 13.07 0 0 0-7.82-2.55z"
							></path></svg
						>
					</button>
				{/snippet}
				{#snippet body()}
					<div class="flex flex-col gap-y-2">
						<!-- Progress -->
						<div class="flex flex-col mt-2">
							<div class="w-full bg-gray-200/60 rounded-full h-3 overflow-hidden">
								<div class="bg-green-400 h-full" style="width: 14%"></div>
							</div>
							<div class="flex gap-x-1">
								<span class="font-bold">14%</span>
								<span>of</span>
								<span>goal</span>
							</div>
						</div>
						<!-- Details -->
						<p class="text-gray-700 whitespace-pre-line break-words line-clamp-3">
							Planning to open a shop front in future! We will be saving money for the renovation,
							monthly rental and furnitures. Any amount of tips would be a big help! 🙏🏻
						</p>
					</div>
				{/snippet}
			</Card>
			<!-- About -->
			<Card title="About">
				{#snippet body()}
					<div class="flex flex-col gap-y-4">
						<p class="text-gray-700 whitespace-pre-line break-words line-clamp-3">
							Hello! Thanks for dropping by on Mochi Buddies! I am a full-time illustrator from
							Singapore and drawing has been my hobby since young. Drawing brings me joy in life and
							I wish to spread the happiness and positivity of my work through the 5 characters. If
							you like what I create consider buying me a flower(ko-fi) here to fund my journey. You
							might want to check for rewards information in my pin post below for more~!
						</p>
						<!-- Profile.Social.Links -->
						<div class="flex flex-col gap-y-2">
							<!-- Profile.Link -->
							<div class="flex items-center gap-x-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									class="w-6 h-6 fill-gray-400"
									><path
										d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"
									></path><path
										d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"
									></path></svg
								>
								<a class="text-gray-400 underline" href="https://www.mochibuddies.com/"
									>mochibuddies.com</a
								>
							</div>
							<!-- Profile.Social.Link -->
							<div class="flex gap-2">
								<!-- Profile.Social.LINK_OPEN_DELAY.Facebook -->
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									class="w-6 h-6 fill-gray-400"
									><path
										d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"
									></path></svg
								>

								<!-- Profile.Social.LINK_OPEN_DELAY.Instagram -->
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									class="w-6 h-6 fill-gray-400"
									><path
										d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"
									></path><circle cx="16.806" cy="7.207" r="1.078"></circle><path
										d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
									></path></svg
								>
								<!-- Profile.Social.LINK_OPEN_DELAY.Twitter -->
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									class="w-6 h-6 fill-gray-400"
									><path
										d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
									></path></svg
								>
								<!-- Profile.Social.LINK_OPEN_DELAY.Tiktok -->
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									class="w-6 h-6 fill-gray-400"
									><path
										d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
									></path></svg
								>
							</div>
						</div>
						<!-- Total.Donate.Received -->
						<div class="flex gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								class="w-6 h-6 fill-red-400"
								><path
									d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"
								></path><path
									d="M12 11c-2 0-2-.63-2-1s.7-1 2-1 1.39.64 1.4 1h2A3 3 0 0 0 13 7.12V6h-2v1.09C9 7.42 8 8.71 8 10c0 1.12.52 3 4 3 2 0 2 .68 2 1s-.62 1-2 1c-1.84 0-2-.86-2-1H8c0 .92.66 2.55 3 2.92V18h2v-1.08c2-.34 3-1.63 3-2.92 0-1.12-.52-3-4-3z"
								></path></svg
							>
							<span>x</span>
							<span class="font-bold">31099</span>
							<span>Received</span>
						</div>
					</div>
				{/snippet}
			</Card>
			<!-- Top Supported -->
			<Card title="Top Supporters">
				{#snippet body()}
					<div
						class="flex items-center justify-between p-2 gap-x-1 bg-gray-100/60 rounded-lg hover:underline"
					>
						<div class="flex gap-x-2">
							{#each [{ avatar: 'https://ko-fi.com/img/anon3.png' }, { avatar: 'https://storage.ko-fi.com/cdn/useruploads/a4f97f0a-9711-45b3-be47-2f0945d6806c_tiny.png' }, { avatar: 'https://cdn.ko-fi.com/cdn/useruploads/tiny_a00247c5-8fe2-4760-a28b-72ddcd746b3e.jpg' }] as { avatar } (avatar)}
								<div
									class="w-8 h-8 bg-cover border-2 border-gray-200/60 rounded-full overflow-hidden"
									style:background-image="url('{avatar}')"
								></div>
							{/each}
						</div>
						<a class="text-gray-400" href="/">See Leaderboard</a>
					</div>
				{/snippet}
			</Card>
		</div>
		<div class="w-full flex flex-col gap-y-4">
			<!-- Page intro -->
			<div class="flex flex-col">
				<div class="flex items-center mb-2">
					<img
						src="https://cdn.ko-fi.com/cdn/useruploads/54e103c3-6480-4b88-87ef-8a7a1e6c969e.jpg"
						class="w-10 h-10 mr-2 rounded-full"
						alt=""
					/>
					<name class="font-bold">Mochi Buddies</name>
				</div>
				<div class="card-bubble relative">
					<Card>
						{#snippet body()}
							<p class="text-gray-700 whitespace-pre-line break-words line-clamp-[10]">
								Welcome to Mochi Buddies! (✿◠‿◠)
								---------------------------------------------------------- *Shipping of kofi shop
								items except stickers rewards on every Wednesday.
								---------------------------------------------------------- Kofi membership shipping
								dates. *Shipping dates for Kofi sticker club (eg Jan rewards will be shipped in Feb)
								Current Dispatch Schedule for Sticker Club Stickers Rewards. April Rewards: 17 May
								May Rewards: 14 June June Rewards: 30 July (Delayed as I will be at oversea
								conventions) July Rewards: 16 August Check out my membership tiers for more
								subscriptions options where you can receive monthly theme sticker packs
								automatically ~ 😋 ! All prices stated are inclusive of delivery. International
								tiers comes with tracking number for your mails. Remember to sign up and login when
								making a pledge so you can unlock the benefits! Please consider to support what I do
								by treating mochibuddies a flower~ These goes into paying rent! Even if you can't
								support right now, by supporting my social media would be very much appreciated too!
							</p>
						{/snippet}
					</Card>
				</div>
			</div>
			<!-- Feed -->
			<Card title="Feed">
				{#snippet body()}
					<div class="flex flex-col gap-y-6">
						{#each { length: 10 } as feed}
							<div class="">
								<div class="flex justify-between items-center">
									<!-- Header.Left -->
									<div class="flex items-center">
										<img
											class="w-10 h-10 mr-2 rounded-full"
											src="https://ko-fi.com/img/anon12.png"
											alt=""
										/>
										<div>
											<name class="font-bold">Jason Prieur</name>
											<span>bought a flower</span>
											<span class="text-gray-400 text-sm"> · 8h</span>
										</div>
									</div>
									<!-- Header.Right -->
									<div class="flex flex-shrink-0">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											class="w-4 h-4 fill-gray-400"
											><path
												d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
											></path></svg
										>
									</div>
								</div>
							</div>
						{/each}
					</div>
				{/snippet}
			</Card>
		</div>
	</div>
</div>

<style lang="postcss">
	.card-bubble::before {
		@apply w-0 absolute left-8 bottom-auto -top-2 content-[''] border-x-8 border-t-0 border-b-8 border-solid border-b-gray-200 border-t-transparent border-l-transparent border-r-transparent;
	}
	.card-bubble::after {
		@apply w-0 absolute left-8 bottom-auto -top-2 content-[''] border-x-8 border-t-2 border-b-8 border-solid border-b-white border-t-transparent border-l-transparent border-r-transparent;
	}
</style>
