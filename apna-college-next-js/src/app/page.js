"use client";

import Link from 'next/link';
import styles from './ApnaCollege.module.css';
import { useRef, useEffect, useState } from 'react';
export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currVideo, setVideo] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoId, setVideoId] = useState("wqr8ergP2aw");
  const [isAtBottom, setIsAtBottom] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    const el = listRef.current;
    if (el) {
      el.addEventListener('scroll', handleScrollTrack);
    }

    return () => {
      if (el) {
        el.removeEventListener('scroll', handleScrollTrack);
      }
    };
  }, []);

  const students = [
    { name: "Ashutosh Kumar", img: "/apna-college-people/ashutosh kumar.webp", companyLogo: "/apna-college-people/ggl.webp", company: "Google", role: "Intern" },
    { name: "Gaurav Kumar", img: "/apna-college-people/gaurav kumar.webp", companyLogo: "/apna-college-people/microsoft.webp", company: "Microsoft", role: "Software Engineer" },
    { name: "Gungun Panchal", img: "/apna-college-people/gungun panchal.webp", companyLogo: "/apna-college-people/hitachi.webp", company: "Hitachi", role: "Software Engineer" },
    { name: "Jiya Malik", img: "/apna-college-people/jiya malik.webp", companyLogo: "/apna-college-people/ggl.webp", company: "Google", role: "Software Engineer" },
    { name: "Kartik Aryan", img: "/apna-college-people/kartik aryan.webp", companyLogo: "/apna-college-people/paypal.webp", company: "PayPal", role: "Software Engineer" },
    { name: "Kushal Tripathi", img: "/apna-college-people/kushal tripathi.webp", companyLogo: "/apna-college-people/salesforce.webp", company: "Salesforce", role: "Software Dev" },
    { name: "Muskan Sharma", img: "/apna-college-people/muskan sharma.webp", companyLogo: "/apna-college-people/phonepay.webp", company: "PhonePe", role: "SDE Intern" },
    { name: "Naman Omar", img: "/apna-college-people/naman omar.webp", companyLogo: "/apna-college-people/samsung.webp", company: "Samsung", role: "Engineer" },
    { name: "Ritu Gupta", img: "/apna-college-people/ritu gupta.webp", companyLogo: "/apna-college-people/mercediz.webp", company: "Mercedes", role: "Software Engineer" },
    { name: "Sakshi Goyat", img: "/apna-college-people/sakhshi goyat.webp", companyLogo: "/apna-college-people/kpmg.webp", company: "KPMG", role: "Tech Analyst" },
    { name: "Shreya Shree", img: "/apna-college-people/shreya shree.webp", companyLogo: "/apna-college-people/jpmorgan.webp", company: "JPMorgan", role: "Analyst" },
    { name: "Shruti Hivre", img: "/apna-college-people/shruti hivre.webp", companyLogo: "/apna-college-people/isro.webp", company: "ISRO", role: "Research Intern" },
    { name: "Shubham Kumar", img: "/apna-college-people/shubham kumar.webp", companyLogo: "/apna-college-people/ibm.webp", company: "IBM", role: "Cloud Engineer" },
    { name: "Shubhangi Raj", img: "/apna-college-people/shubhangi raj.webp", companyLogo: "/apna-college-people/goldman sach.webp", company: "Goldman Sachs", role: "Summer Analyst" },
    { name: "SS Abhilash", img: "/apna-college-people/ss abhilash.webp", companyLogo: "/apna-college-people/ey.webp", company: "EY", role: "Digital Consultant" },
    { name: "Swaroop Pokhar", img: "/apna-college-people/swaroop pokhar.webp", companyLogo: "/apna-college-people/deloit.webp", company: "Deloitte", role: "Business Analyst" },
    { name: "Tuba Parwej", img: "/apna-college-people/tuba parwej.webp", companyLogo: "/apna-college-people/ggl.webp", company: "Google", role: "Intern" },
    { name: "Vaibhav Gupta", img: "/apna-college-people/vaibhav gupta.webp", companyLogo: "/apna-college-people/microsoft.webp", company: "Microsoft", role: "Software Engineer" }
  ];

  const VideoDetail = [
    { id: 1, videoId: "wqr8ergP2aw", title: "How they cracked Rs 12+ LPA at ACCENTURE as Advanced Engineering Application Analyst?", channel: "Apna College" },
    { id: 2, videoId: "r4pm-bMvrkQ", title: "DSA + Development + CP got him Dream Package! at Phonepe | Interview lessons", channel: "Apna College" },
    { id: 3, videoId: "mstrQbmKrFk", title: "How this student cracked Internship at Salesforce? Interview lessons with Shradha Khapra Ma'am", channel: "Apna College" },
    { id: 4, videoId: "rDTt8DcUtOY", title: "How he got Off-Campus referrals from Top Companies? Must watch 🚀 : Interview lessons", channel: "Apna College" },
    { id: 5, videoId: "eyCpWDRo154", title: "How this 3rd year student cracked first day first job: Internship + PPO at Deutsche Bank?", channel: "Apna College" },
    { id: 6, videoId: "YzxnxCM7q5A", title: "How this Core branch student with just 6.5 CGPA got 27 LPA at JusPay?", channel: "Apna College" },
    { id: 7, videoId: "Lp-F-NLc41g", title: "How this student cracked DE Shaw & Co? Interview lessons with Shradha Khapra Ma'am", channel: "Apna College" },
    { id: 8, videoId: "rYGFET0amJc", title: "How he got offer from Bank of New York? Interview with Shradha Ma'am", channel: "Apna College" },
  ];

  const testinomials = [
    { url: "/apna-college-people/t1.png" },
    { url: "/apna-college-people/t2.png" },
    { url: "/apna-college-people/t3.png" },
    { url: "/apna-college-people/t4.png" },
    { url: "/apna-college-people/t5.png" },
    { url: "/apna-college-people/t6.png" },
    { url: "/apna-college-people/t7.png" },
    { url: "/apna-college-people/t8.png" },
    { url: "/apna-college-people/t9.png" },
    { url: "/apna-college-people/t10.png" },
    { url: "/apna-college-people/t11.png" },
    { url: "/apna-college-people/t12.png" },
  ];

  const handleScrollTrack = () => {
    const element = listRef.current;
    if (!element) return;

    const isBottom = element.scrollHeight - element.scrollTop === element.clientHeight;
    setIsAtBottom(isBottom);
  };

  const toggler = () => {
    const el = listRef.current;
    if (!el) return;

    if (isAtBottom) {
      el.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
    }
  };

  const listPerPage = 9;
  const totalPages = Math.ceil(students.length / listPerPage);
  const startIdx = (currentPage - 1) * listPerPage;
  const endIdx = startIdx + listPerPage;
  const currentItem = students.slice(startIdx, endIdx);

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className={styles.body}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src="/apna-college-people/logo.webp" alt="Apna College Logo" />
        </div>
        <div className={styles.navLinks}>
          <ul>
            <li>
              <a href="/course">New Sigma 8</a>
            </li>
            <li>
              <a href="/dsa-sheet">DSA Sheet</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Our Placed Students</h1>
          <p>Thousands of students selected in tech companies</p>
        </div>
      </div>

      <div className={styles.container}>
        {currentItem.map((student, i) => (
          <div className={styles.card} key={i}>
            <img className={styles.student} src={student.img} alt={student.name} />
            <div className={styles.studentCard}>
              <p>{student.name}</p>
              <img className={styles.company} src={student.companyLogo} alt={`${student.company} Logo`} />
              <p>{student.company}</p>
              <p>{student.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.pagination}>
        <div className={styles.pageToggler}>
          <div className={styles.prev} onClick={prevPage}>prev</div>
          <p>{currentPage} of {totalPages}</p>
          <div className={styles.next} onClick={nextPage}>next</div>
        </div>
      </div>

      <div className={styles.placedPlace}>
        <h3>Our Student place At</h3>
        <div className={styles.placedCom}>
          {students.map((student, i) => (
            <img className={styles.companyImg} key={i} src={student.companyLogo} alt={`${student.company} Logo`} />
          ))}
        </div>
      </div>

      <div className={styles.story}>
        <div className={styles.ourStory}>Our Story</div>
        <h3>Detailed Interview Of <span>Selected Students</span></h3>

        <div className={styles.storyPage}>
          <div className={styles.storyVideo}>
            {isPlaying ? (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&controls=1`}
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
                allowFullScreen
              ></iframe>
            ) : (
              <>
                <img
                  onClick={() => setIsPlaying(true)}
                  src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                  alt="YouTube Thumbnail"
                  className={styles.thumbnail}
                />
                <div onClick={() => setIsPlaying(true)} className={styles.playButton}><img src="/apna-college-people/play.png" /><p>watch video</p></div>
              </>
            )}
          </div>
          <div className={styles.storyListWrapper}>
            <div className={styles.storyList} ref={listRef} onScroll={handleScrollTrack}>
              {VideoDetail.map((detail, i) => (
                <div key={detail.id} className={`${styles.list} ${videoId === detail.videoId ? styles.active : ''}`}
                  onClick={() => setVideoId(detail.videoId)}>
                  <div className={styles.listImg}>
                    <img src={`https://img.youtube.com/vi/${detail.videoId}/hqdefault.jpg`} alt="Thumbnail" />
                  </div>
                  <div className={styles.listDetail}>
                    <p className={styles.title}>{detail.title}</p>
                    <p className={styles.channel}>{detail.channel}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.listToggler} onClick={toggler}>
              {isAtBottom ? '⬇️': '⬆️'}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.testinomial}>
        <h3>Testimonials & <span>Feedbacks</span></h3>
        <div className={styles.testinomialImg}>
          {testinomials.map((url, i) => (
            <div key={i} className={styles.imageBox}>
              <img src={url.url} />
            </div>
          ))}
        </div>
      </div>


<div className={styles.footer}>
  <div className={styles.footerNavs}>
    <div className={styles.footerMain}>
      <div className={styles.footerLogo}>
        <img src="/apna-college-people/logo.webp" alt="Apna College Logo" />
      </div>
      <p>Where education meets real-world needs.</p>
    </div>

    <div className={styles.footerNav}>
      <h3>HELPFUL LINKS</h3>
      <ul className={styles.footerLink}>
        <li><a href="#">Courses</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Refund Policy</a></li>
        <li><a href="#">Terms & Conditions</a></li>
      </ul>
    </div>

    <div className={styles.footerNav}>
      <h3>GET IN TOUCH</h3>
      <ul className={styles.footerLink}>
        <li><a href="mailto:alpha@apnacollege.in">alpha@apnacollege.in</a></li>
        <li><a href="mailto:delta@apnacollege.in">delta@apnacollege.in</a></li>
        <li><a href="mailto:sigma@apnacollege.in">sigma@apnacollege.in</a></li>
        <li><span>Support Team: 10am-6pm</span></li>
      </ul>
    </div>

    <div className={styles.footerNav}>
      <h3>CONNECT WITH US</h3>
      <ul className={styles.footerLink}>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Youtube</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">LinkedIn</a></li>
      </ul>
    </div>
  </div>
  <div className={styles.copyright}>
    <p>Copyright © 2025</p>
  </div>
</div>
   </div>
  );
}