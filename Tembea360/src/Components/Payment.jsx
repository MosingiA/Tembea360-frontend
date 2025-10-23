import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Payment() {
  const navigate = useNavigate();
  const location = useLocation();
  const { tour, date, guests, totalPrice } = location.state || {};
  
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [cardNumber, setCardNumber] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [saveCard, setSaveCard] = useState(false);

  const subtotal = totalPrice || 200.00;
  const taxes = 20.00;
  const total = subtotal + taxes;

  const handlePayment = () => {
    alert('Payment processed successfully!');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div className="flex items-center p-4 border-b">
          <button onClick={() => navigate(-1)} className="mr-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-xl font-semibold">Payment</h1>
        </div>

        <div className="p-4">
          {/* Order Summary */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-medium">Order Summary</h2>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </div>
            
            <div className="space-y-1 text-sm text-gray-600 mb-4">
              <div>Tour Name: {tour?.title || 'The Grand Canyon'}</div>
              <div>Date: {date || '12/12/2024, 10:00 AM'}</div>
              <div>Participants: {guests || 2}</div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Taxes:</span>
                <span>${taxes.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-4">Select Payment Method</h3>
            
            <div className="space-y-3">
              <label className="flex items-center justify-between p-3 border rounded-lg cursor-pointer">
                <div className="flex items-center">
                  <div className="w-8 h-6 bg-black rounded mr-3"></div>
                  <span>Credit Card</span>
                </div>
                <input
                  type="radio"
                  name="payment"
                  value="credit"
                  checked={paymentMethod === 'credit'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-5 h-5 text-green-500"
                />
              </label>

              <label className="flex items-center justify-between p-3 border rounded-lg cursor-pointer">
                <div className="flex items-center">
                  <div className="w-8 h-6 bg-blue-500 rounded mr-3 flex items-center justify-center text-white text-xs font-bold">PP</div>
                  <span>PayPal</span>
                </div>
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  checked={paymentMethod === 'paypal'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-5 h-5"
                />
              </label>

              <label className="flex items-center justify-between p-3 border rounded-lg cursor-pointer">
                <div className="flex items-center">
                  <div className="w-8 h-6 bg-gray-800 rounded mr-3 flex items-center justify-center text-white text-xs">🍎</div>
                  <span>Apple Pay</span>
                </div>
                <input
                  type="radio"
                  name="payment"
                  value="apple"
                  checked={paymentMethod === 'apple'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-5 h-5"
                />
              </label>
            </div>
          </div>

          {/* Credit Card Form */}
          {paymentMethod === 'credit' && (
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Card Number</label>
                <input
                  type="text"
                  placeholder="0000 0000 0000 0000"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="w-full p-3 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Cardholder Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={cardholderName}
                  onChange={(e) => setCardholderName(e.target.value)}
                  className="w-full p-3 border rounded-lg"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Expiration Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={expirationDate}
                    onChange={(e) => setExpirationDate(e.target.value)}
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">CVV</label>
                  <input
                    type="text"
                    placeholder="123"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
              </div>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={saveCard}
                  onChange={(e) => setSaveCard(e.target.checked)}
                  className="mr-2"
                />
                <span className="text-sm text-gray-600">Save this card for future payments</span>
              </label>
            </div>
          )}

          {/* Security Notice */}
          <div className="flex items-center justify-center mb-6 text-sm text-gray-500">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Your payment is secure
          </div>

          {/* Confirm Button */}
          <button
            onClick={handlePayment}
            className="w-full bg-green-500 text-white py-4 rounded-lg font-semibold text-lg hover:bg-green-600"
          >
            Confirm Payment: ${total.toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment;