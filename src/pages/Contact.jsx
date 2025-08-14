import React, { useEffect, useRef, useState } from "react";
import { FiMapPin, FiPhone, FiMail, FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser"; // Updated package

const locations = [
    {
        city: "Islamabad Office",
        address: "Street no 15, House no 443, Shahzad Town Islamabad",
        postal: "Islamabad 44000-Pakistan",
        phone: "(+92-3459533699)",
        tel: "(+966-539932328)",
    },
];

const Contact = () => {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    // Animate on scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    // Send email
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");



        emailjs.send(
            "service_u992nfr", // EmailJS Service ID
            "template_l389gqt", // EmailJS Template ID
            {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                message: formData.message,
            },
            "SPLjJJXgTrMJFhHyk" // EmailJS Public Key
        )
            .then(() => {
                setStatus("✅ Message sent successfully!");
                setFormData({ name: "", phone: "", email: "", message: "" });

                // Auto-hide success message after 5 seconds
                setTimeout(() => setStatus(""), 3000);
            })
            .catch(() => {
                setStatus("❌ Failed to send message. Try again.");
                setTimeout(() => setStatus(""), 5000);
            })
            .finally(() => setLoading(false));
    };

    return (
        <div
            ref={ref}
            className={`min-h-screen text-gray-300 px-4 sm:px-6 lg:px-8 py-12 sm:py-20 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
        >
            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">
                        Contact Eccentric Technologies
                    </span>
                </h1>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                    Reach out to our global offices or send us a message directly
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
                {/* Location Cards */}
                <div className="grid md:grid-cols-1 gap-6">
                    {locations.map((location, index) => (
                        <div
                            key={index}
                            className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/30 p-6 shadow-lg hover:shadow-emerald-500/20 transition-shadow transform hover:-translate-y-1 duration-300"
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mr-4">
                                    <FiMapPin size={20} />
                                </div>
                                <h3 className="text-xl font-bold text-white">{location.city}</h3>
                            </div>

                            <div className="space-y-3">
                                <p className="text-gray-400">{location.address}</p>
                                <p className="text-gray-400">{location.postal}</p>
                                <div className="pt-3 border-t border-gray-700/30">
                                    <div className="flex items-center text-gray-400 mb-1">
                                        <FiPhone className="mr-2 text-blue-400" />
                                        <span>{location.phone}</span>
                                    </div>
                                    {location.tel && (
                                        <div className="flex items-center text-gray-400 mb-1">
                                            <FiPhone className="mr-2 text-blue-400" />
                                            <span>{location.tel}</span>
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Form */}
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/30 p-8 shadow-lg">
                    <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            id="name"
                            aria-label="Full Name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-700/30 border border-gray-700/50 rounded-lg text-white"
                            required
                        />
                        <input
                            type="tel"
                            id="phone"
                            aria-label="Phone Number"
                            placeholder="Phone Number"
                            pattern="[0-9+ ]*"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-700/30 border border-gray-700/50 rounded-lg text-white"
                            required
                        />
                        <input
                            type="email"
                            id="email"
                            aria-label="Email Address"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-700/30 border border-gray-700/50 rounded-lg text-white"
                            required
                        />
                        <textarea
                            id="message"
                            aria-label="Message"
                            rows="4"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-700/30 border border-gray-700/50 rounded-lg text-white"
                            required
                        ></textarea>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-medium rounded-lg shadow-lg flex items-center justify-center"
                        >
                            {loading ? "Sending..." : <><FiSend className="mr-2" /> Send Message</>}
                        </button>
                        {status && (
                            <p
                                className={`text-sm mt-2 ${status.includes("✅") ? "text-green-400" : "text-red-400"
                                    }`}
                            >
                                {status}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
