<script>
	import { page } from '$app/stores';

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<header class="flex justify-between items-center md:px-12 p-3 relative">
	<a href="/"
		><div class="flex items-center gap-2">
			<img src="/logonobg.png" alt="UUTH logo" class="logo h-12 w-12" />
			<div class="font-semibold text-black sm:text-xl">
				UUTH <span class="text-red-700">IDID Service</span>
			</div>
		</div></a
	>

	<!-- Desktop navigation -->
	<div class="hidden sm:flex items-center space-x-4">
		<ul class="flex nav-links space-x-5 font-semibold sm:text-xl">
			<li>
				<a
					href="/"
					class="hover:text-red-700"
					class:text-red-700={$page.url.pathname === '/'}
					class:text-gray-500={$page.url.pathname !== '/'}>Home</a
				>
			</li>
			<li>
				<a
					href="/services"
					class="hover:text-red-700"
					class:text-red-700={$page.url.pathname === '/services'}
					class:text-gray-500={$page.url.pathname !== '/services'}>Services</a
				>
			</li>
			<li>
				<a
					href="/about"
					class="hover:text-red-700"
					class:text-red-700={$page.url.pathname === '/about'}
					class:text-gray-500={$page.url.pathname !== '/about'}>About Us</a
				>
			</li>
			<li>
				<a
					href="/info"
					class="hover:text-red-700"
					class:text-red-700={$page.url.pathname === '/info'}
					class:text-gray-500={$page.url.pathname !== '/info'}>News</a
				>
			</li>
			<li>
				<a
					href="/contact"
					class="hover:text-red-700"
					class:text-red-700={$page.url.pathname === '/contact'}
					class:text-gray-500={$page.url.pathname !== '/contact'}>Contact Us</a
				>
			</li>
		</ul>
	</div>
	<div class="hidden sm:flex font-semibold text-gray-500 gap-2 items-center sm:text-xl">
		<button>Log In</button>
		<button class="bg-red-700 p-4 text-white">Sign Up</button>
	</div>

	<!-- Mobile menu button -->
	<div class="sm:hidden">
		<button on:click={toggleMenu} class="text-gray-500 hover:text-gray-700 focus:outline-none">
			<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				{#if isMenuOpen}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				{:else}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16m-7 6h7"
					/>
				{/if}
			</svg>
		</button>
	</div>

	<!-- Mobile menu -->
	{#if isMenuOpen}
		<div class="sm:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-10">
			<ul class="flex flex-col items-center space-y-2 p-4">
				<li>
					<a
						href="/"
						class="hover:text-red-700"
						class:text-red-700={$page.url.pathname === '/'}
						class:text-gray-500={$page.url.pathname !== '/'}
						on:click={() => (isMenuOpen = false)}>Home</a
					>
				</li>
				<li>
					<a
						href="/services"
						class="hover:text-red-700"
						class:text-red-700={$page.url.pathname === '/services'}
						class:text-gray-500={$page.url.pathname !== '/services'}
						on:click={() => (isMenuOpen = false)}>Services</a
					>
				</li>
				<li>
					<a
						href="/about"
						class="hover:text-red-700"
						class:text-red-700={$page.url.pathname === '/about'}
						class:text-gray-500={$page.url.pathname !== '/about'}
						on:click={() => (isMenuOpen = false)}>About Us</a
					>
				</li>
				<li>
					<a
						class="hover:text-red-700"
						href="/info"
						class:text-red-700={$page.url.pathname === '/info'}
						class:text-gray-500={$page.url.pathname !== '/info'}
						on:click={() => (isMenuOpen = false)}>News</a
					>
				</li>
				<li>
					<a
						class="hover:text-red-700"
						href="/contact"
						class:text-red-700={$page.url.pathname === '/contact'}
						class:text-gray-500={$page.url.pathname !== '/contact'}
						on:click={() => (isMenuOpen = false)}>Contact Us</a
					>
				</li>
				<li class="w-full">
					<button
						class="w-full text-gray-500 hover:text-red-700"
						on:click={() => (isMenuOpen = false)}>Log In</button
					>
				</li>
				<li class="w-full">
					<button
						class="bg-red-700 p-2 text-white w-full rounded"
						on:click={() => (isMenuOpen = false)}>Sign Up</button
					>
				</li>
			</ul>
		</div>
	{/if}
</header>
