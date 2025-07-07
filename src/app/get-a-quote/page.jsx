'use client';
import { useState, useEffect } from 'react';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    enquiryType: '',
    brandName: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Handle message timeout
  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.enquiryType.trim()) newErrors.enquiryType = 'Enquiry type is required';
    if (!formData.brandName) newErrors.brandName = 'Please select a brand';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-wordpressType': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      const result = await response.json();
      console.log(result.message);
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        phone: '',
        enquiryType: '',
        brandName: '',
        message: '',
      });
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-black">
      <div className="max-w-2xl w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div>
          <h2 className="text-center text-3xl font-semibold text-gray-800">
            Request a Quote
          </h2>
          <p className="mt-2 text-center text-sm text-gray-500">
            Fill out the form below to receive a personalized quote for your project.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit} noValidate>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  aria-required="true"
                  className={`mt-1 block w-full px-4 py-3 border ${
                    errors.fullName ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600`}
                  placeholder="Your Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                />
                {errors.fullName && (
                  <p
                    id="fullName-error"
                    className="mt-1 text-sm text-red-500"
                  >
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  aria-required="true"
                  className={`mt-1 block w-full px-4 py-3 border ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600`}
                  placeholder="Phone No"
                  value={formData.phone}
                  onChange={handleChange}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                {errors.phone && (
                  <p
                    id="phone-error"
                    className="mt-1 text-sm text-red-500"
                  >
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="enquiryType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Enquiry Type
                </label>
                <input
                  id="enquiryType"
                  name="enquiryType"
                  type="text"
                  required
                  aria-required="true"
                  className={`mt-1 block w-full px-4 py-3 border ${
                    errors.enquiryType ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600`}
                  placeholder="e.g., Painting Services"
                  value={formData.enquiryType}
                  onChange={handleChange}
                  aria-invalid={!!errors.enquiryType}
                  aria-describedby={errors.enquiryType ? 'enquiryType-error' : undefined}
                />
                {errors.enquiryType && (
                  <p
                    id="enquiryType-error"
                    className="mt-1 text-sm text-red-500"
                  >
                    {errors.enquiryType}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="brandName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Brand Name
                </label>
                <select
                  id="brandName"
                  name="brandName"
                  required
                  aria-required="true"
                  className={`mt-1 block w-full px-4 py-3 border ${
                    errors.brandName ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600`}
                  value={formData.brandName}
                  onChange={handleChange}
                  aria-invalid={!!errors.brandName}
                  aria-describedby={errors.brandName ? 'brandName-error' : undefined}
                >
                  <option value="" disabled>
                    Select a brand
                  </option>
                  <option value="Dulux">Dulux</option>
                  <option value="Nippon">Nippon</option>
                  <option value="Burger">Burger</option>
                  <option value="Master">Master</option>
                </select>
                {errors.brandName && (
                  <p
                    id="brandName-error"
                    className="mt-1 text-sm text-red-500"
                  >
                    {errors.brandName}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-sm font-medium text-white ${
                isSubmitting
                  ? 'bg-green-400 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600`}
              aria-disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </button>
          </div>
        </form>

        {submitStatus && (
          <div
            className={`fixed top-30 right-4 max-w-sm p-4 rounded-lg shadow-lg ${
              submitStatus === 'success'
                ? 'bg-green-500 text-white'
                : 'bg-red-500 text-white'
            }`}
          >
            {submitStatus === 'success'
              ? 'Quote request submitted successfully!'
              : 'Failed to submit quote request. Please try again.'}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuoteForm;