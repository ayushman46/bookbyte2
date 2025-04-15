import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import { Check, AlertTriangle } from 'lucide-react';

declare global {
  interface Window {
    Razorpay: any;
  }
}

const CheckoutPage = () => {
  const { items, totalPrice, clearCart } = useCart();
  const [isLoaded, setIsLoaded] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [orderData, setOrderData] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (items.length === 0) {
      navigate('/cart');
    }

    // Load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => {
      console.log('Razorpay script loaded'); // Debugging
      setIsLoaded(true);
    };
    script.onerror = () => {
      console.error('Failed to load Razorpay script'); // Debugging
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [items, navigate]);

  const handlePayment = () => {
    if (!isLoaded) {
      console.error('Razorpay script not loaded'); // Debugging
      return;
    }

    setPaymentStatus('loading');

    // Create mock order data
    const orderData = {
      id: `order_${Date.now()}`,
      amount: totalPrice * 100, // Razorpay uses amount in paise
      currency: 'INR',
      receipt: `receipt_${Date.now()}`
    };
    console.log('Order Data:', orderData); // Debugging

    // Razorpay options
    const options = {
      key: 'rzp_test_xS1qJuFKBNBsIV', // Your Razorpay test key
      amount: orderData.amount,
      currency: orderData.currency,
      name: 'ReadExplore',
      description: 'Book Purchase',
      order_id: orderData.id,
      handler: function (response: any) {
        console.log('Payment Success Response:', response); // Debugging
        if (response.razorpay_payment_id) {
          setPaymentStatus('success');
          setOrderData({
            ...orderData,
            paymentId: response.razorpay_payment_id,
            items: items,
          });

          // Clear cart after successful payment
          setTimeout(() => {
            clearCart();
          }, 5000);
        } else {
          console.error('Payment failed: Missing payment ID');
          setPaymentStatus('error');
        }
      },
      prefill: {
        name: 'John Doe',
        email: 'customer@example.com',
        contact: '9876543210'
      },
      theme: {
        color: '#1f40b0'
      },
      modal: {
        ondismiss: function () {
          console.log('Payment modal closed');
          setPaymentStatus('idle');
        }
      }
    };

    try {
      const razorpayInstance = new window.Razorpay(options);
      console.log('Razorpay instance created:', razorpayInstance); // Debugging
      razorpayInstance.open();
    } catch (error) {
      console.error('Razorpay error:', error);
      setPaymentStatus('error');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h1 className="text-4xl font-poppins font-bold text-navy-800 mb-4">
              Checkout
            </h1>
            <p className="text-lg text-navy-600">
              Complete your purchase securely with Razorpay
            </p>
          </div>

          {paymentStatus === 'success' ? (
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-poppins font-semibold text-navy-800 mb-2">
                  Payment Successful!
                </h2>
                <p className="text-navy-600">
                  Thank you for your purchase. Your order has been confirmed.
                </p>
              </div>

              <div className="border-t border-b border-gray-200 py-4 mb-6">
                <h3 className="font-medium text-navy-800 mb-3">Order Summary</h3>
                <div className="space-y-3">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <span>{item.title} × {item.quantity}</span>
                      <span>₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between font-semibold mt-4 pt-4 border-t border-gray-200">
                  <span>Total</span>
                  <span>₹{totalPrice}</span>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={() => navigate('/')}
                  className="px-6 py-3 bg-navy-600 text-white rounded-md hover:bg-navy-700 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          ) : paymentStatus === 'error' ? (
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                  <AlertTriangle className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-2xl font-poppins font-semibold text-navy-800 mb-2">
                  Payment Failed
                </h2>
                <p className="text-navy-600">
                  There was an issue processing your payment. Please try again.
                </p>
              </div>

              <div className="text-center">
                <button
                  onClick={() => setPaymentStatus('idle')}
                  className="px-6 py-3 bg-navy-600 text-white rounded-md hover:bg-navy-700 transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Order Summary */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-poppins font-semibold text-navy-800 mb-4">
                  Order Summary
                </h2>

                <div className="border-b border-gray-200 pb-4 mb-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between py-2">
                      <div className="flex items-center">
                        <img
                          src={item.coverImage}
                          alt={item.title}
                          className="w-12 h-18 object-cover rounded-sm mr-3"
                        />
                        <div>
                          <p className="font-medium text-navy-800">{item.title}</p>
                          <p className="text-sm text-navy-600">Quantity: {item.quantity}</p>
                        </div>
                      </div>
                      <p className="text-navy-800">₹{item.price * item.quantity}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-navy-600">Subtotal</span>
                    <span className="text-navy-800">₹{totalPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy-600">Shipping</span>
                    <span className="text-navy-800">Free</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg pt-2 border-t border-gray-200">
                    <span>Total</span>
                    <span>₹{totalPrice}</span>
                  </div>
                </div>
              </div>

              {/* Payment Section */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-poppins font-semibold text-navy-800 mb-4">
                  Payment Method
                </h2>

                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <input
                      type="radio"
                      id="razorpay"
                      name="payment"
                      checked
                      className="h-4 w-4 text-navy-600"
                    />
                    <label htmlFor="razorpay" className="text-navy-800">
                      Razorpay (Credit/Debit Card, UPI, Netbanking)
                    </label>
                  </div>

                  <div className="flex space-x-2 mb-4">
                    <img src="https://cdn.razorpay.com/static/assets/logo/payment-powered-by-razorpay.svg" alt="Razorpay" className="h-8" />
                  </div>

                  <p className="text-navy-600 text-sm">
                    You will be redirected to Razorpay's secure payment gateway to complete your purchase.
                  </p>
                </div>

                <div className="mt-8">
                  <button
                    onClick={handlePayment}
                    disabled={!isLoaded || paymentStatus === 'loading'}
                    className={`w-full py-3 rounded-md text-white font-medium ${
                      !isLoaded || paymentStatus === 'loading'
                        ? 'bg-navy-400 cursor-not-allowed'
                        : 'bg-navy-600 hover:bg-navy-700'
                    }`}
                  >
                    {paymentStatus === 'loading' ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      `Pay ₹${totalPrice}`
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CheckoutPage;
