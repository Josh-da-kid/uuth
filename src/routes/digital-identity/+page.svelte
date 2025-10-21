<script>
	import { Button } from 'carbon-components-svelte';
</script>

<main
	class="text-center w-screen min-h-screen items-center flex flex-col py-12 gap-4 bg-cover bg-no-repeat"
	style="background-image: url('https://img.freepik.com/free-photo/close-up-colorful-smoky-abstract_53876-148112.jpg?semt=ais_hybrid&w=740&q=80');"
>
	<h1 class="font-semibold">Identity <span class="text-red-700">& Access</span></h1>
	<p class="text-gray-500 text-break-words lg:w-[520px]">
		Streamlined Payment and salary management solutions for UCTH. Access PayIQue for salary tracking
		and payslips, or make secure Id card payments through our integrated system.
	</p>

	<section
		class="mt-12 md:flex gap-8 space-y-8 px-4 w-screen items-center justify-center md:space-y-0"
	>
		<div
			class="text-start flex flex-col space-y-3 w-[400px] p-8 rounded-md border-4 border-red-500"
			style="border: 2px solid blue;"
		>
			<div class="sm:flex items-center gap-4">
				<svg
					class="bg-blue-500 rounded-md p-2 text-white"
					xmlns="http://www.w3.org/2000/svg"
					width="55"
					height="55"
					viewBox="0 0 24 24"
					><g fill="none" stroke="currentColor" stroke-width="1.5"
						><path
							stroke-linejoin="round"
							d="M14 3.5h-4c-3.771 0-5.657 0-6.828 1.172S2 7.729 2 11.5v1c0 3.771 0 5.657 1.172 6.828S6.229 20.5 10 20.5h4c3.771 0 5.657 0 6.828-1.172S22 16.271 22 12.5v-1c0-3.771 0-5.657-1.172-6.828S17.771 3.5 14 3.5Z"
						/><path stroke-linecap="round" d="M5 16c1.036-2.581 4.896-2.75 6 0" /><path
							d="M9.75 9.75a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0Z"
						/><path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M14 8.5h5M14 12h5m-5 3.5h2.5"
						/></g
					></svg
				>
				<h2 class="font-medium text-2xl">Create Staff Account</h2>
			</div>
			<p>
				Register for an new UUTH digital identity through our whatsapp bot. Quick, secure, and
				automated account creation.
			</p>
			<h4 class="font-medium text-xl ml-2">What You'll Get:</h4>

			<li>Personnel IDID Registration</li>
			<li>Digital Payslips</li>
			<li>Transaction History</li>

			<div class="items-center justify-center flex">
				<Button>Create Via whatsapp</Button>
			</div>
		</div>

		<div
			class="text-start flex flex-col space-y-3 w-[400px] p-8 rounded-md border-4 border-red-500"
			style="border: 2px solid red;"
		>
			<div class="sm:flex items-center gap-4">
				<svg
					class="bg-red-500 rounded-md p-2 text-white"
					xmlns="http://www.w3.org/2000/svg"
					width="55"
					height="55"
					viewBox="0 0 24 24"
					><g fill="none" stroke="currentColor" stroke-width="1.5"
						><path
							stroke-linejoin="round"
							d="M14 3.5h-4c-3.771 0-5.657 0-6.828 1.172S2 7.729 2 11.5v1c0 3.771 0 5.657 1.172 6.828S6.229 20.5 10 20.5h4c3.771 0 5.657 0 6.828-1.172S22 16.271 22 12.5v-1c0-3.771 0-5.657-1.172-6.828S17.771 3.5 14 3.5Z"
						/><path stroke-linecap="round" d="M5 16c1.036-2.581 4.896-2.75 6 0" /><path
							d="M9.75 9.75a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0Z"
						/><path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M14 8.5h5M14 12h5m-5 3.5h2.5"
						/></g
					></svg
				>
				<h2 class="font-medium text-2xl">Modify Account</h2>
			</div>
			<p>
				Update your existing UUTH digital identity information quickly and securely through
				Whatsapp.
			</p>
			<h4 class="font-medium text-xl ml-2">Modification Options:</h4>

			<li>Update Personnel Information</li>
			<li>Change Contact Details</li>
			<li>Update Department Info</li>

			<div class="items-center justify-center flex">
				<Button kind="danger">Modify Via Whatsapp</Button>
			</div>
		</div>
	</section>
</main>
