// Payment service integrations

// Stripe API integration
export const processStripePayment = async (paymentData) => {
  try {
    const response = await fetch('https://api.stripe.com/v1/payment_intents', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_STRIPE_SECRET_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        amount: Math.round(paymentData.amount * 100), // Convert to cents
        currency: 'usd',
        payment_method: paymentData.paymentMethodId,
        confirm: true,
        return_url: `${window.location.origin}/payment-success`
      })
    });
    
    const result = await response.json();
    return { success: true, data: result };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// PayPal API integration
export const processPayPalPayment = async (paymentData) => {
  try {
    const response = await fetch('https://api.paypal.com/v2/checkout/orders', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_PAYPAL_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'USD',
            value: paymentData.amount.toFixed(2)
          },
          description: paymentData.description
        }],
        application_context: {
          return_url: `${window.location.origin}/payment-success`,
          cancel_url: `${window.location.origin}/payment-cancel`
        }
      })
    });
    
    const result = await response.json();
    return { success: true, data: result };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// M-Pesa API integration (for Kenya)
export const processMpesaPayment = async (paymentData) => {
  try {
    const response = await fetch('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_MPESA_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        BusinessShortCode: process.env.REACT_APP_MPESA_SHORTCODE,
        Password: process.env.REACT_APP_MPESA_PASSWORD,
        Timestamp: new Date().toISOString().replace(/[-:T.]/g, '').slice(0, 14),
        TransactionType: 'CustomerPayBillOnline',
        Amount: Math.round(paymentData.amount),
        PartyA: paymentData.phoneNumber,
        PartyB: process.env.REACT_APP_MPESA_SHORTCODE,
        PhoneNumber: paymentData.phoneNumber,
        CallBackURL: `${window.location.origin}/api/mpesa-callback`,
        AccountReference: paymentData.reference,
        TransactionDesc: paymentData.description
      })
    });
    
    const result = await response.json();
    return { success: true, data: result };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Generic payment processor
export const processPayment = async (paymentMethod, paymentData) => {
  switch (paymentMethod) {
    case 'card':
      return await processStripePayment(paymentData);
    case 'paypal':
      return await processPayPalPayment(paymentData);
    case 'mpesa':
      return await processMpesaPayment(paymentData);
    default:
      return { success: false, error: 'Unsupported payment method' };
  }
};