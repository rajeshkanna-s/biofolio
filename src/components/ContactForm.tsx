import { useState } from 'react';
import type { FormEvent } from 'react';
import { contactForm, siteConfig } from '../data/data';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { generateProfilePDF } from '../utils/generatePDF';
import '../styles/ContactForm.css';

export default function ContactForm() {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    reachingOutAs: '',
    howFound: '',
    profileGender: '',
    ageGroup: '',
    locatedIn: '',
    educationLevel: '',
    workStatus: '',
    casteOrReligion: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: '8d4d97e4-c634-4683-9793-6a89fcee8329',
          subject: `🕉️ New Marriage Interest — ${formData.name}`,
          from_name: 'BioFolio Marriage Profile',
          name: formData.name,
          phone: formData.phone,
          reaching_out_as: formData.reachingOutAs,
          how_found: formData.howFound,
          profile_gender: formData.profileGender,
          age_group: formData.ageGroup,
          located_in: formData.locatedIn,
          education_level: formData.educationLevel,
          work_status: formData.workStatus,
          caste_or_religion: formData.casteOrReligion,
          message: formData.message || 'No message provided',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setTimeout(() => setStatus('idle'), 6000);
        setFormData({
          name: '', phone: '', reachingOutAs: '', howFound: '',
          profileGender: '', ageGroup: '', locatedIn: '',
          educationLevel: '', workStatus: '', casteOrReligion: '', message: '',
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(contactForm.whatsappMessage)}`;

  return (
    <section className="contact section section-alt" id="contact" ref={ref}>
      {/* Decorative background */}
      <div className="contact__bg-pattern" aria-hidden="true" />

      <div className="section-container">
        <div className={`section-header reveal ${isRevealed ? 'revealed' : ''}`}>
          <span className="section-label">Connect</span>
          <h2 className="section-title">{contactForm.heading}</h2>
          <p className="section-subtitle">{contactForm.subheading}</p>
        </div>

        <div className={`contact__wrapper reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '100ms' }}>
          <div className="contact__form-intro">
            <span className="contact__form-ornament">✦</span>
            <p className="contact__form-note">
              We appreciate your interest. Share a few details and we'll get back to you within <strong>24 hours</strong>. Most fields are just quick selections — no lengthy forms here.
            </p>
          </div>

          <form className="contact__form" onSubmit={handleSubmit} id="contact-form">
            {/* hidden Web3Forms fields */}
            <input type="hidden" name="access_key" value="8d4d97e4-c634-4683-9793-6a89fcee8329" />
            <input type="hidden" name="subject" value="New Marriage Interest Received" />

            {/* Name */}
            <div className="contact__field">
              <label className="contact__label" htmlFor="cf-name">
                Your Name <span className="contact__required">*</span>
              </label>
              <input
                type="text"
                id="cf-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="contact__input"
                placeholder="Enter your full name"
              />
            </div>

            {/* Phone */}
            <div className="contact__field">
              <label className="contact__label" htmlFor="cf-phone">
                Phone / WhatsApp <span className="contact__required">*</span>
              </label>
              <input
                type="tel"
                id="cf-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="contact__input"
                placeholder="+91 98765 43210"
              />
            </div>

            {/* Reaching out as */}
            <div className="contact__field contact__field--full">
              <label className="contact__label">Reaching out as...</label>
              <div className="contact__radio-group">
                {contactForm.fields.reachingOutAs.map((opt) => (
                  <label className={`contact__radio ${formData.reachingOutAs === opt ? 'contact__radio--active' : ''}`} key={opt}>
                    <input
                      type="radio"
                      name="reachingOutAs"
                      value={opt}
                      checked={formData.reachingOutAs === opt}
                      onChange={handleChange}
                    />
                    <span className="contact__radio-dot" />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* How Found */}
            <div className="contact__field">
              <label className="contact__label" htmlFor="cf-howfound">How did you find this profile?</label>
              <select id="cf-howfound" name="howFound" value={formData.howFound} onChange={handleChange} className="contact__select">
                <option value="">Select...</option>
                {contactForm.fields.howFound.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            {/* Profile Gender */}
            <div className="contact__field">
              <label className="contact__label">Profile you're sharing about</label>
              <div className="contact__radio-group">
                {contactForm.fields.profileGender.map((opt) => (
                  <label className={`contact__radio ${formData.profileGender === opt ? 'contact__radio--active' : ''}`} key={opt}>
                    <input type="radio" name="profileGender" value={opt} checked={formData.profileGender === opt} onChange={handleChange} />
                    <span className="contact__radio-dot" />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Age group */}
            <div className="contact__field">
              <label className="contact__label" htmlFor="cf-age">Age group</label>
              <select id="cf-age" name="ageGroup" value={formData.ageGroup} onChange={handleChange} className="contact__select">
                <option value="">Select...</option>
                {contactForm.fields.ageGroup.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            {/* Located in */}
            <div className="contact__field">
              <label className="contact__label" htmlFor="cf-location">Located in</label>
              <select id="cf-location" name="locatedIn" value={formData.locatedIn} onChange={handleChange} className="contact__select">
                <option value="">Select...</option>
                {contactForm.fields.locatedIn.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            {/* Education */}
            <div className="contact__field">
              <label className="contact__label" htmlFor="cf-edu">Education level</label>
              <select id="cf-edu" name="educationLevel" value={formData.educationLevel} onChange={handleChange} className="contact__select">
                <option value="">Select...</option>
                {contactForm.fields.educationLevel.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            {/* Work status */}
            <div className="contact__field contact__field--full">
              <label className="contact__label">Working / Business</label>
              <div className="contact__radio-group">
                {contactForm.fields.workStatus.map((opt) => (
                  <label className={`contact__radio ${formData.workStatus === opt ? 'contact__radio--active' : ''}`} key={opt}>
                    <input type="radio" name="workStatus" value={opt} checked={formData.workStatus === opt} onChange={handleChange} />
                    <span className="contact__radio-dot" />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Caste / Religion */}
            <div className="contact__field">
              <label className="contact__label" htmlFor="cf-caste">Caste / Religion</label>
              <select id="cf-caste" name="casteOrReligion" value={formData.casteOrReligion} onChange={handleChange} className="contact__select">
                <option value="">Select...</option>
                {contactForm.fields.casteOrReligion.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="contact__field contact__field--full">
              <label className="contact__label" htmlFor="cf-message">Initial message (optional)</label>
              <textarea
                id="cf-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="contact__textarea"
                rows={4}
                placeholder="Share a brief message about yourself or the person you're reaching out for..."
              />
            </div>

            {/* Submit */}
            <div className="contact__field contact__field--full">
              <button
                type="submit"
                className="btn btn-primary contact__submit"
                disabled={status === 'sending'}
                id="contact-submit"
              >
                {status === 'sending' ? (
                  <>
                    <span className="contact__spinner" /> Sending...
                  </>
                ) : (
                  <>♥ Express Interest</>
                )}
              </button>
            </div>
          </form>

          {/* Contact alternatives */}
          <div className={`contact__alternatives reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '300ms' }}>
            <div className="contact__alt-divider">
              <span className="contact__alt-divider-line" />
              <span className="contact__alt-divider-text">or reach out directly</span>
              <span className="contact__alt-divider-line" />
            </div>
            <div className="contact__alt-buttons">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold contact__wa-btn" id="whatsapp-btn">
                💬 WhatsApp
              </a>
              <a href={`mailto:${siteConfig.emailAddress}`} className="btn btn-secondary contact__email-btn" id="email-btn">
                ✉️ Email
              </a>
              <button
                className="btn btn-secondary contact__pdf-btn"
                onClick={() => {
                  const btn = document.getElementById('pdf-btn') as HTMLButtonElement;
                  if (btn) {
                    btn.textContent = '⏳ Generating...';
                    btn.disabled = true;
                  }
                  setTimeout(() => {
                    generateProfilePDF();
                    if (btn) {
                      btn.textContent = '📄 Download as PDF';
                      btn.disabled = false;
                    }
                  }, 100);
                }}
                id="pdf-btn"
              >
                📄 Download as PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Toast notification */}
      {status === 'success' && (
        <div className="toast toast-success" role="alert">
          🙏 {contactForm.successMessage}
        </div>
      )}
      {status === 'error' && (
        <div className="toast toast-error" role="alert">
          ❌ Something went wrong. Please try again or use WhatsApp.
        </div>
      )}
    </section>
  );
}
