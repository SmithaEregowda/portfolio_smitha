import { Button, Form, Input, message } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React, { useEffect, useState } from 'react'
import ContentHeading from '../../commoncomponents/heading'
import styles from "./contact.module.scss"
import { LinkedinFilled, MailFilled, PhoneFilled, SendOutlined } from "@ant-design/icons"
import emailjs from "@emailjs/browser"
import FadeInSection from '../fadeinsection'

const ContactSection = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    useEffect(() => emailjs.init("sNpDZh3GMvoxoU2EF"), []);

    const contactformHandler = async (values) => {
        setLoading(true);
        const serviceId = "service_whbb42x";
        const templateId = "template_g3nobnq";
        try {
            await emailjs.send(serviceId, templateId, {
                name: values?.name,
                recipient: "smithaeregowda@gmail.com",
                email: values?.email,
                message: values?.message
            });
            message.success('Message sent successfully! I will get back to you soon.');
            form.resetFields();
        } catch (error) {
            console.log(error);
            message.error('Failed to send message. Please try again.');
        } finally {
            setLoading(false);
        }
    }

    const contactLinks = [
        {
            icon: LinkedinFilled,
            label: 'LinkedIn',
            value: 'https://www.linkedin.com/in/smitha-h-e-a3b630156/',
            isLink: true
        },
        {
            icon: MailFilled,
            label: 'Email',
            value: 'smithaeregowda@gmail.com',
            isLink: false
        },
        {
            icon: PhoneFilled,
            label: 'Phone',
            value: '+91 7892433070',
            isLink: false
        }
    ];

    return (
        <div className={styles.contactWrapper}>
            <div className={styles.header}>
                <ContentHeading 
                    bgText={"Contact"}
                    title={"Get In Touch"}
                    info={<p>I'm always interested in hearing about new projects and opportunities. Feel free to reach out using any of the contact methods below.</p>}
                    allignment={"center"}
                />
            </div>

            <div className={styles.contactIconsWrapper}>
                <div className={styles.contactIcons}>
                    {contactLinks.map((contact, index) => {
                        const IconComponent = contact.icon;
                        return (
                            <FadeInSection key={contact.label}>
                                <div className={styles.contactItem}>
                                    <div className={styles.socialIcon}>
                                        <div className={styles.icon}>
                                            <IconComponent style={{ fontSize: '32px', color: "white" }} />
                                        </div>
                                    </div>
                                    <div className={styles.label}>
                                        {contact.isLink ? (
                                            <p>
                                                <a 
                                                    href={contact.value} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    aria-label={`Connect on ${contact.label}`}
                                                >
                                                    {contact.label}
                                                </a>
                                            </p>
                                        ) : (
                                            <p>{contact.value}</p>
                                        )}
                                    </div>
                                </div>
                            </FadeInSection>
                        );
                    })}
                </div>
            </div>

            <div className={styles.contactInfo}>
                <div className={styles.contactForm}>
                    <div className={styles.contactFields}>
                        <Form 
                            form={form}
                            layout="vertical"
                            onFinish={contactformHandler}
                            autoComplete="off"
                        >
                            <Form.Item 
                                label="Your Name" 
                                name="name" 
                                rules={[
                                    { required: true, message: 'Please enter your name' },
                                    { min: 2, message: 'Name must be at least 2 characters' }
                                ]}
                            >
                                <Input 
                                    placeholder="John Doe"
                                    size="large"
                                />
                            </Form.Item>

                            <Form.Item 
                                label="Your Email" 
                                name="email" 
                                rules={[
                                    { required: true, message: 'Please enter your email' },
                                    { type: 'email', message: 'Please enter a valid email address' }
                                ]}
                            >
                                <Input 
                                    placeholder="you@example.com"
                                    size="large"
                                    type="email"
                                />
                            </Form.Item>

                            <Form.Item 
                                label="Your Message" 
                                name="message" 
                                rules={[
                                    { required: true, message: 'Please enter your message' },
                                    { min: 10, message: 'Message must be at least 10 characters' }
                                ]}
                            >
                                <TextArea 
                                    rows={5} 
                                    placeholder="Tell me about your project or inquiry..."
                                    size="large"
                                />
                            </Form.Item>
                        </Form>
                    </div>

                    <div className={styles.submitBtn}>
                        <FadeInSection>
                            <Button 
                                type='primary' 
                                size="large"
                                onClick={() => form.submit()}
                                loading={loading}
                                disabled={loading}
                                icon={<SendOutlined />}
                                aria-label="Send message"
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </Button>
                        </FadeInSection>
                    </div>
                </div>

                <div className={styles.contactImage}>
                    <img
                        src='images/contact.png'
                        alt='Contact illustration'
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    )
}

export default ContactSection