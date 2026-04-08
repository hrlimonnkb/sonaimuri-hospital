"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    console.log("Form Data Submitted:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500)); 
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();

    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <div>
      <h2 className="text-[#512D6D] text-3xl font-black mb-2">Get In Touch</h2>
      <p className="text-gray-500 text-sm mb-8">
        Do you have any questions about our services, doctors, or facilities? Send us a message and our reception team will get back to you shortly.
      </p>

      {/* Success Message */}
      {submitSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl mb-6 font-medium text-sm">
          Thank you! Your message has been sent successfully. We will contact you soon.
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Name Input */}
          <div>
            <label className="block text-xs font-bold text-[#512D6D] uppercase tracking-wider mb-2">Your Name</label>
            <input 
              type="text" 
              placeholder="John Doe" 
              {...register("name", { required: "Name is required" })}
              className={`w-full bg-gray-50 border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#916BBF] transition-all ${errors.name ? 'border-red-400 focus:ring-red-400' : 'border-gray-200 focus:border-transparent'}`} 
            />
            {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name.message}</span>}
          </div>

          {/* Phone Input */}
          <div>
            <label className="block text-xs font-bold text-[#512D6D] uppercase tracking-wider mb-2">Phone Number</label>
            <input 
              type="tel" 
              placeholder="017XX-XXXXXX" 
              {...register("phone", { 
                required: "Phone number is required",
                pattern: { value: /^[0-9+\-\s]+$/, message: "Invalid phone number format" }
              })}
              className={`w-full bg-gray-50 border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#916BBF] transition-all ${errors.phone ? 'border-red-400 focus:ring-red-400' : 'border-gray-200 focus:border-transparent'}`} 
            />
            {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone.message}</span>}
          </div>
        </div>
        
        {/* Email Input */}
        <div>
          <label className="block text-xs font-bold text-[#512D6D] uppercase tracking-wider mb-2">Email Address</label>
          <input 
            type="email" 
            placeholder="example@email.com" 
            {...register("email", { 
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
            })}
            className={`w-full bg-gray-50 border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#916BBF] transition-all ${errors.email ? 'border-red-400 focus:ring-red-400' : 'border-gray-200 focus:border-transparent'}`} 
          />
          {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
        </div>

        {/* Message Textarea */}
        <div>
          <label className="block text-xs font-bold text-[#512D6D] uppercase tracking-wider mb-2">Message</label>
          <textarea 
            rows="4" 
            placeholder="How can we help you today?" 
            {...register("message", { required: "Please enter your message" })}
            className={`w-full bg-gray-50 border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#916BBF] transition-all resize-none ${errors.message ? 'border-red-400 focus:ring-red-400' : 'border-gray-200 focus:border-transparent'}`}
          ></textarea>
          {errors.message && <span className="text-red-500 text-xs mt-1 block">{errors.message.message}</span>}
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-[#512D6D] text-white py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-[#35055a] transition-colors shadow-lg hover:shadow-xl mt-2 disabled:bg-[#916BBF] disabled:cursor-not-allowed flex justify-center items-center gap-2"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}