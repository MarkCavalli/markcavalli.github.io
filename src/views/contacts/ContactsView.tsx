import React, { Suspense } from "react";
import styles from './styles.module.css';
import ContactItem, { ContactItemProps } from './components/contactItem/ContactItem';
import CV from './components/cv/CV';
import MailIcon from './icons/mail.svg';
import LinkedInIcon from './icons/linkedin.svg';
import GitHubIcon from './icons/github.svg';
import ContentItem from './components/contentItem/ContentItem';

export default () => {
  const contacts: ContactItemProps[] = [
    {
      title: 'markcavalli@mail.ru',
      icon: MailIcon,
      url: 'mailto:markcavalli@mail.ru',
    },
    {
      title: 'linkedin.com/in/markcavalli',
      icon: LinkedInIcon,
      url: 'https://linkedin.com/in/markcavalli',
    },
    {
      title: 'github.com/markcavalli',
      icon: GitHubIcon,
      url: 'https://github.com/markcavalli',
    }
  ];

  return (
    <div>
      <div className={styles.bgImg}></div>
      <div className={styles.bg}></div>
      <section className={styles.main}>
        <h1 className={styles.title}>Contact Info</h1>

        <ContentItem title="Details">
          <p className={styles.infoText}>
            Hello! My name is Aleksei Osinnii. Do not confuse with Mark Cavalli everywhere, it's a nickname. Front-end is the first thing a user sees when visiting your website.
            It is important to pay attention to all the little things. After all, the user's first impression of your company depends on it.
            According to statistics, 53% of users will leave the website if it loads for more than 3 seconds.
          </p>
          <p className={styles.infoText}>
            I put forward increased demands on my work. I use a display with a frequency of 144 hz (6 ms per second), instead of the usual 60 hz (16 ms per second).
            This means that to maintain the smoothness of the image, the code must run almost 3 times faster than usual. Of course, there are few users with 144 hz,
            but their number is increasing, and they will definitely remember your website among the rest.
          </p>
          <p className={styles.infoText}>
            Interested? Let's create inspiring things together! If you have any opportunities for me, feel free to contact via any these links.
          </p>
        </ContentItem>

        <ContentItem title="Attachments">
          <CV />
        </ContentItem>

        <ContentItem title="Social Links">
          <div className={styles.contactsBlock}>
            {contacts.map((d, i) => <ContactItem key={i} title={d.title} icon={d.icon} url={d.url} />)}
          </div>
        </ContentItem>
      </section>
    </div>
  )
};