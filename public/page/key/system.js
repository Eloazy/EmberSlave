async function data(data) {
	localStorage.setItem('tk', await btoa(data))
	test()
}
async function deletek() {localStorage.removeItem('tk')}