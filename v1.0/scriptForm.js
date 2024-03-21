function handleSubmitForm() {
    const submitBtn = document.getElementById('form-submit-btn')
    const reviewForm = document.getElementById('review-form')
    const submitMessage = document.getElementById('submit-message')
    submitBtn.addEventListener('click', () => {
        reviewForm.style.display = 'none'
        submitMessage.style.display = 'flex'
    })
}

handleSubmitForm()