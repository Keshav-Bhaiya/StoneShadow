import { MapPin, Phone, Mail } from 'lucide-react';
import { FormEvent, useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    interest: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-xs font-medium text-amber-700 tracking-widest">
              GET IN TOUCH
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-800 mt-4 mb-6">
              Start Your Project With Us
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Whether you are an architect, interior designer, or homeowner, our team is ready to assist you in selecting the perfect stone for your vision.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-emerald-700" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Headquarters</h3>
                  <p className="text-sm text-gray-600">123 Stone Avenue, Industrial Area,</p>
                  <p className="text-sm text-gray-600">New Delhi - 110001</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-emerald-700" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
                  <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-600">+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-emerald-700" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                  <p className="text-sm text-gray-600">info@stoneshadow.com</p>
                  <p className="text-sm text-gray-600">export@stoneshadow.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-2 tracking-wider">
                    FIRST NAME
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-amber-700 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-2 tracking-wider">
                    LAST NAME
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-amber-700 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2 tracking-wider">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-amber-700 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2 tracking-wider">
                  INTEREST
                </label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-amber-700 transition-colors bg-white"
                >
                  <option value="">Select Stone Type</option>
                  <option value="marble">Marble</option>
                  <option value="granite">Granite</option>
                  <option value="sandstone">Sandstone</option>
                  <option value="quartzite">Quartzite</option>
                  <option value="exotics">Exotics</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2 tracking-wider">
                  MESSAGE
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-amber-700 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-800 text-white py-4 font-medium hover:bg-gray-900 transition-colors duration-300"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
