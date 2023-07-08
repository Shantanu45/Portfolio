const loader = document.querySelector('.spinner');

// if you want to show the loader when React loads data again
const showLoader = () => loader?.classList.remove('spinner--hide');

const hideLoader = () => loader?.classList.add('spinner--hide');

export default {showLoader, hideLoader};