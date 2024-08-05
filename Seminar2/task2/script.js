const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            { id: "1", text: "Отличный телефон! Батарея держится долго." },
            { id: "2", text: "Камера супер, фото выглядят просто потрясающе." },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            { id: "3", text: "Уникальный телефон с большим экраном." },
        ],
    },
];

const reviewContainer = document.getElementById('review-container');

// Load initial reviews
initialData.forEach(product => {
    product.reviews.forEach(review => {
        addReviewToContainer(review.text);
    });
});

function addReviewToContainer(reviewText) {
    const reviewDiv = document.createElement('div');
    reviewDiv.className = 'review';
    reviewDiv.textContent = reviewText;
    reviewContainer.appendChild(reviewDiv);
}

document.getElementById('submit-review').addEventListener('click', () => {
    const reviewInput = document.getElementById('review-input');
    const reviewText = reviewInput.value.trim();

    try {
        if (reviewText.length < 30 || reviewText.length > 500) {
            throw new Error('Длина отзыва должна быть от 30 до 500 символов.');
        }
        addReviewToContainer(reviewText);
        reviewInput.value = '';  // Clear input field
    } catch (error) {
        alert(error.message);
    }
});