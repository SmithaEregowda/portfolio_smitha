import { Button, Form, Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React, { useEffect } from 'react'
import ContentHeading from '../../commoncomponents/heading'
import styles from "./contact.module.scss"
import {LinkedinFilled,MailFilled,PhoneFilled} from "@ant-design/icons"
import emailjs from "@emailjs/browser"
import FadeInSection from '../fadeinsection'

const ContactSection = () => {
    const [form]=Form.useForm();
    useEffect(() => emailjs.init("sNpDZh3GMvoxoU2EF"), []);

    const contactformHandler=async(values)=>{
        // e.preventDefault();
        const serviceId = "service_whbb42x";
        const templateId = "template_g3nobnq";
        try {
        //   setLoading(true);
          await emailjs.send(serviceId, templateId, {
            name: values?.name,
            recipient: "smithaeregowda@gmail.com",
            email:values?.email,
            message:values?.message
          });
        //   form.resetFields();
        } catch (error) {
          console.log(error);
        } finally {
            // form.resetFields();
        //   setLoading(false);
        }
    }

  return (
    <div className={styles.contactWrapper}>
        <div className={styles.header}>
            <ContentHeading 
                bgText={"Contact"}
                title={"Contact Me"}
                info={<p>Hi! , I'm Smitha H E , UI Developer with passion towards 
                creating Web Application <br /> Here some of the details About me:</p>}
                allignment={"center"}
           />
        </div>
        <div className={styles.contactIconsWrapper}>
        <div className={styles.contactIcons}>
            <FadeInSection>
            <div className={styles.contactItem}>
                <div className={styles.socialIcon}>
                <div className={styles.icon}>
                <LinkedinFilled 
                style={{ fontSize: '40px', color: "#ff5039" }}
                />
                </div>
                </div>
                <div className={styles.label}>
                    <p>https://www.linkedin.com/in/smitha-h-e-a3b630156/</p>
                </div>
            </div>
            </FadeInSection>
           <FadeInSection>
           <div className={styles.contactItem}>
            <div className={styles.socialIcon}>
                <div className={styles.icon}>
                <MailFilled
                style={{ fontSize: '40px', color: "#ff5039" }}
                />
                </div>
                </div>
                <div className={styles.label}>
                    <p>smithaeregowda@gmail.com</p>
                </div>
            </div>
           </FadeInSection>
           <FadeInSection>
           <div className={styles.contactItem}>
            <div className={styles.socialIcon}>
                <div className={styles.icon}>
                <PhoneFilled 
                style={{ fontSize: '40px', color: "#ff5039" }}
                />
                </div>
                </div>
                <div className={styles.label}>
                   <p> 7892433070</p>
                </div>
            </div>
           </FadeInSection>
        </div>
        </div>
        <div className={styles.contactInfo}>
            <div className={styles.contactForm}>
                <div className={styles.contactFields}>
                    <Form 
                    form={form}
                    layout={"vertical"}
                    onFinish={contactformHandler}
                    >
                        <Form.Item 
                        label="You're Name" 
                        name={"name"} 
                        rules={[
                            {required:true},
                            {message:"Name is required"}
                        ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item label="You're Email" 
                        name={"email"} 
                        required={true} 
                        rules={[
                            {required:true},
                            { type: 'email' },
                        {message:"please enter valid email"}
                    ]} 
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item 
                        label="You're Message"
                         name={"message"} 
                         rules={[
                            {required:true},
                            {message:"Name is required"}
                        ]}
                         >
                            <TextArea rows={4} />
                        </Form.Item>
                    </Form>
                </div>
                <div>
                   <FadeInSection>
                   <Button type='primary' onClick={()=>form.submit()}>Send Message</Button>
                   </FadeInSection>
                </div>
            </div>
            <div className={styles.contactImage}>
                <img
                src='images/contact.png'
                alt='contactimg'
                width={"100%"}
                height={400}
                />
            </div>
        </div>
    </div>
  )
}

export default ContactSection