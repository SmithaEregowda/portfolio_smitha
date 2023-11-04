import { Button, Form, Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React from 'react'
import ContentHeading from '../../commoncomponents/heading'
import styles from "./contact.module.scss"
import {LinkedinFilled,MailFilled,PhoneFilled} from "@ant-design/icons"
const ContactSection = () => {
    const [form]=Form.useForm();
    const contactformHandler=(values)=>{
        console.log(values)
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
        <div className={styles.contactIcons}>
            <div className={styles.contactItem}>
                <div className={styles.socialIcon}>
                <div className={styles.icon}>
                <LinkedinFilled 
                style={{ fontSize: '40px', color: "#ff5039" }}
                />
                </div>
                </div>
                <div className={styles.label}>
                    https://www.linkedin.com/in/smitha-h-e-a3b630156/
                </div>
            </div>
            <div className={styles.contactItem}>
            <div className={styles.socialIcon}>
                <div className={styles.icon}>
                <MailFilled
                style={{ fontSize: '40px', color: "#ff5039" }}
                />
                </div>
                </div>
                <div className={styles.label}>
                    smithaeregowda@gmail.com
                </div>
            </div>
            <div className={styles.contactItem}>
            <div className={styles.socialIcon}>
                <div className={styles.icon}>
                <PhoneFilled 
                style={{ fontSize: '40px', color: "#ff5039" }}
                />
                </div>
                </div>
                <div className={styles.label}>
                    7892433070
                </div>
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
                        <Form.Item label="You're Name">
                            <Input />
                        </Form.Item>
                        <Form.Item label="You're Email">
                            <Input />
                        </Form.Item>
                        <Form.Item label="You're Message">
                            <TextArea rows={4} />
                        </Form.Item>
                    </Form>
                </div>
                <div>
                    <Button type='primary'>Send Message</Button>
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