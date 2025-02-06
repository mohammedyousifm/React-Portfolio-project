import "./contact.css"

const Contact = () => {

  const message = 'I\'ll get back to you as soon as possible.';

  return (
    <>
     <h1 className="title-all"><span className="icon-envelope"></span> Contact</h1>
       <section id="Contact" className="contact-us">

         <div className="container">
             <p className="subtitle">Hello, you can contact me for any inquiries or collaborations.
             Feel free to reach out, and { message }
             </p>
             <div className="all-icons flex">
                 <div><a href="https://wa.me/249905370486"         target="_blank"       className="icon icon-whatsappicon icon-whatsapp" ></a></div>
                 <div><a href="https://github.com/mohammedyousifm" target="_blank"       className="icon icon-github-square"></a></div>
                 <div><a href="https://www.linkedin.com/in/mohammed-yousif-96a492261" target="_blank" className="icon icon-linkedin"></a></div>
                 <div><a href="https://github.com/mohammedyousifm" target="_blank"       className="icon icon-envelope"></a></div>
             </div>
             <form action="send_email.php" method="POST">
                 <div className="input-group">
                     <label htmlFor="name">Full Name</label>
                     <input type="text" id="name" name="name" required />
                 </div>
                 <div className="input-group">
                     <label htmlFor="email">Email Address</label>
                     <input type="email" name="email" required />
                 </div>
                 <div className="input-group">
                     <label htmlFor="subject">Subject</label>
                     <input type="text" id="subject" name="subject" required />
                 </div>
                 <div className="input-group">
                     <label htmlFor="message">Message</label>
                     <textarea  name="message"  required></textarea>
                 </div>
                 <button type="submit">Send Message</button>
             </form>
         </div>
       </section>
    </>
  );
}

export default Contact;
