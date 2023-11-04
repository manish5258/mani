import React from 'react';
import ContactCard from "@/app/components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "@/app/components/ContactForm";

const Contact = () => {
    return (
        <>
            <div className={styles.container}>
            <h1>Contact Us</h1>
            <ContactCard />

                <section className={styles.contact_section}>
                    <h2> We &apos;d love to hear <span> from you </span> </h2>

                    <ContactForm />
                </section>
            </div>
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14005.603744305567!2d77.41816918654543!3d28.6477114415572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf02cab9e16df%3A0xb03482d8c00e67c!2sVijay%20Nagar%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201009!5e0!3m2!1sen!2sin!4v1699004876531!5m2!1sen!2sin"
                width={100} height={450} style={{border: 0}} allowFullScreen="" loading="lazy" className={styles.mapping}
                referrerPolicy="no-referrer-when-downgrade"> </iframe>
            

        </>
    );
};

export default Contact;
