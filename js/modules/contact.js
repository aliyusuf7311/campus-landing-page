/**
 * Contact Section Module
 */

export function initContact() {
    const contactContainer = document.getElementById('contact');
    
    const contactHTML = `
        <div class="contact-container">
            <div class="section-title">
                <h2>Hubungi Kami</h2>
                <p>Punya pertanyaan? Kami siap membantu Anda</p>
            </div>
            <form id="contactForm" class="contact-form">
                <div class="form-group">
                    <label for="name">Nama Lengkap</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        placeholder="Masukkan nama lengkap Anda"
                    >
                </div>
                
                <div class="form-group">
                    <label for="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        placeholder="Masukkan email Anda"
                    >
                </div>
                
                <div class="form-group">
                    <label for="subject">Subjek</label>
                    <input 
                        type="text" 
                        id="subject" 
                        name="subject" 
                        required 
                        placeholder="Subjek pesan"
                    >
                </div>
                
                <div class="form-group">
                    <label for="message">Pesan</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        required 
                        placeholder="Tuliskan pesan Anda di sini..."
                    ></textarea>
                </div>
                
                <button type="submit" class="btn btn-primary form-submit">Kirim Pesan</button>
            </form>
        </div>
    `;
    
    contactContainer.innerHTML = contactHTML;
    
    // Setup form submission
    setupContactForm();
}

/**
 * Setup contact form event listener
 */
function setupContactForm() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            console.log('📧 Form submitted:', data);
            
            // Validate form
            if (!validateForm(data)) {
                alert('Mohon isi semua field dengan benar');
                return;
            }
            
            // Show success message
            showSuccessMessage('Pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda.');
            
            // Reset form
            form.reset();
            
            // Here you can add code to send data to backend
            // await sendFormData(data);
        });
    }
}

/**
 * Validate form data
 */
function validateForm(data) {
    if (!data.name || !data.email || !data.subject || !data.message) {
        return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        return false;
    }
    
    return true;
}

/**
 * Show success message
 */
function showSuccessMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #27ae60;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        animation: slideInUp 0.5s ease;
    `;
    messageDiv.textContent = message;
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.style.animation = 'fadeOut 0.5s ease';
        setTimeout(() => messageDiv.remove(), 500);
    }, 4000);
}

export default initContact;