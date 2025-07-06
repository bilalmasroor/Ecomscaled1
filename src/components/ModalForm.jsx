import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader2 } from "lucide-react";

const ModalForm = ({ bg_color, title, customStyle, showTriangles = false }) => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    service: "",
    comments: "",
  });

  const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const contactRegex = /^\d{10,15}$/;

    if (!nameRegex.test(formData.name)) {
      toast.error("Please enter a valid name (letters only).");
      return false;
    }
    if (!emailRegex.test(formData.email)) {
      toast.error("Invalid email address.");
      return false;
    }
    if (!contactRegex.test(formData.contact)) {
      toast.error("Contact must be 10–15 digits.");
      return false;
    }
    if (!formData.service) {
      toast.error("Please select a service.");
      return false;
    }
    if (!formData.comments.trim()) {
      toast.error("Please enter some comments.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    const data = {
      access_key: ACCESS_KEY,
      subject: "New Consultation Request",
      ...formData,
    };

    try {
      const response = await fetch(import.meta.env.VITE_WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Your message has been sent!");
        setFormData({
          name: "",
          email: "",
          contact: "",
          service: "",
          comments: "",
        });
        setShowModal(false);
      } else {
        toast.error("Failed to send message. Try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="inline-block relative">
        <button
          onClick={() => setShowModal(true)}
          className={customStyle || `${bg_color} text-white px-6 py-2 text-sm sm:text-base md:text-lg lg:text-xl rounded-full hover:${bg_color} border  hover:text-white cursor-pointer duration-300`}
        >
          {title}
        </button>
        {showTriangles && (
          <>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-1 w-0 h-0 border-y-[30px] border-y-transparent border-l-[30px] border-l-white z-20"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 -mr-1 w-0 h-0 border-y-[30px] border-y-transparent border-r-[30px] border-r-white z-20"></div>
          </>
        )}
      </div>

      {showModal && createPortal(
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center backdrop-blur-sm bg-black/50"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="relative bg-white w-full max-w-md mx-4 sm:mx-0 p-6 rounded-xl shadow-[0_0_40px_rgba(0,101,177,0.4)] border border-[#0065B1]/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-gray-600 hover:text-black text-2xl font-bold"
            >
              &times;
            </button>

            <form onSubmit={handleSubmit} className="space-y-4 font-['Roboto']">
              <h2 className="text-xl sm:text-2xl font-black text-center mb-4">
                Speak To An Expert
              </h2>

              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-[#0065B1]"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email Address *"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-[#0065B1]"
              />

              <input
                type="text"
                name="contact"
                placeholder="Contact Number *"
                value={formData.contact}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-[#0065B1]"
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-[#0065B1]"
              >
                <option value="">Service(s) You're Interested In *</option>
                <option value="Amazon Automation">Amazon Automation</option>
                <option value="TikTok Shop Automation">
                  TikTok Shop Automation
                </option>
                <option value="Wallmart Automation">Wallmart Automation</option>
                <option value="Shopify Automation">Shopify Automation</option>
                <option value="Performance Marketing">
                  Performance Marketing
                </option>
              </select>

              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleInputChange}
                placeholder="Additional Comments *"
                className="w-full border border-gray-300 p-3 rounded h-28 focus:ring-2 focus:ring-[#0065B1]"
              ></textarea>

              <p className="text-sm text-gray-600">
                We never share your contact info with anyone.
              </p>

              <button
                type="submit"
                className="w-full bg-[#0065B1] text-white font-bold py-3 rounded-md hover:bg-white hover:text-[#0065b1] border border-[#0065b1] transition duration-300 flex justify-center items-center gap-2"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin w-5 h-5" />
                    Sending...
                  </>
                ) : (
                  "Schedule A Free Consultation Now!"
                )}
              </button>
            </form>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default ModalForm;
