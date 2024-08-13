function loadReviews() {
    const reviewsContainer = document.getElementById('reviews');
    reviewsContainer.innerHTML = '';
    const reviews = JSON.parse(localStorage.getItem('reviews')) || {};
    
    for (const product in reviews) {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        const productTitle = document.createElement('h3');
        productTitle.textContent = product;
        productDiv.appendChild(productTitle);
        
        const reviewList = document.createElement('div');
        reviewList.className = 'review-list';
        reviews[product].forEach((review, index) => {
            const reviewDiv = document.createElement('div');
            reviewDiv.className = 'review';
            reviewDiv.textContent = review;
            
            const deleteBtn = document.createElement('span');
            deleteBtn.textContent = ' Удалить';
            deleteBtn.className = 'delete-btn';
            deleteBtn.onclick = () => {
                deleteReview(product, index);
            };
            
            reviewDiv.appendChild(deleteBtn);
            reviewList.appendChild(reviewDiv);
        });

        productDiv.appendChild(reviewList);
        reviewsContainer.appendChild(productDiv);
    }
}

function addReview() {
    const productName = document.getElementById('productName').value.trim();
    const reviewText = document.getElementById('reviewText').value.trim();

    if (!productName || !reviewText) {
        alert('Пожалуйста, заполните все поля.');
        return;
    }

    const reviews = JSON.parse(localStorage.getItem('reviews')) || {};
    if (!reviews[productName]) {
        reviews[productName] = [];
    }
    reviews[productName].push(reviewText);
    localStorage.setItem('reviews', JSON.stringify(reviews));

    document.getElementById('productName').value = '';
    document.getElementById('reviewText').value = '';
    loadReviews();
}

function deleteReview(product, index) {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || {};
    reviews[product].splice(index, 1);
    if (reviews[product].length === 0) {
        delete reviews[product];
    }
    localStorage.setItem('reviews', JSON.stringify(reviews));
    loadReviews();
}

document.getElementById('addReviewBtn').onclick = addReview;
window.onload = loadReviews;