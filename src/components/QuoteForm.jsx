import React, { useState } from 'react';

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

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phone.match(/^\+?\d{10,15}$/))
      newErrors.phone = 'Please enter a valid phone number';
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
      // Replace with your API endpoint
      // await fetch('/api/submit-quote', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      console.log('Form submitted:', formData);
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Get a Quote
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Fill out the form below to receive a personalized quote.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit} noValidate>
          <div className="space-y-4">
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
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.fullName ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors`}
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange}
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? 'fullName-error' : undefined}
              />
              {errors.fullName && (
                <p id="fullName-error" className="mt-1 text-sm text-red-500">
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
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors`}
                placeholder="+1 (123) 456-7890"
                value={formData.phone}
                onChange={handleChange}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1 text-sm text-red-500">
                  {errors.phone}
                </p>
              )}
            </div>

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
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.enquiryType ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors`}
                placeholder="e.g., Painting Services"
                value={formData.enquiryType}
                onChange={handleChange}
                aria-invalid={!!errors.enquiryType}
                aria-describedby={errors.enquiryType ? 'enquiryType-error' : undefined}
              />
              {errors.enquiryType && (
                <p id="enquiryType-error" className="mt-1 text-sm text-red-500">
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
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.brandName ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors`}
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
                <p id="brandName-error" className="mt-1 text-sm text-red-500">
                  {errors.brandName}
                </p>
              )}
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
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              Weimar
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                isSubmitting
                  ? 'bg-indigo-400 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-700'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors`}
              aria-disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>

          {submitStatus === 'success' && (
            <p className="mt-2 text-center text-sm text-green-600">
              Quote request submitted successfully!
            </p>
          )}
          {submitStatus === 'error' && (
            <p className="mt-2 text-center text-sm text-red-600">
              Failed to submit quote request. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;