// Checkout Form Handling

class Checkout {
    constructor() {
        this.form = document.getElementById('checkout-form');
        this.orderSummary = document.getElementById('order-summary');
        this.whatsappButton = document.getElementById('whatsapp-button');
        this.init();
    }

    init() {
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
    }

    handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(this.form);
        const orderDetails = this.getOrderDetails(formData);
        this.displayOrderSummary(orderDetails);
        this.setupWhatsAppIntegration(orderDetails);
    }

    getOrderDetails(formData) {
        const order = {};
        formData.forEach((value, key) => {
            order[key] = value;
        });
        return order;
    }

    displayOrderSummary(orderDetails) {
        this.orderSummary.innerHTML = `<h2>Order Summary</h2>`;
        Object.entries(orderDetails).forEach(([key, value]) => {
            this.orderSummary.innerHTML += `<p>${key}: ${value}</p>`;
        });
    }

    setupWhatsAppIntegration(orderDetails) {
        const message = encodeURIComponent(`Order Details: ${JSON.stringify(orderDetails)}`);
        this.whatsappButton.href = `https://api.whatsapp.com/send?text=${message}`;
    }
}

// Initialize the checkout process
document.addEventListener('DOMContentLoaded', () => {
    new Checkout();
});
