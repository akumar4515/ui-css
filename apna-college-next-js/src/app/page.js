"use client";

import styles from './ApnaCollege.module.css';
import { useState } from 'react';
export default function App() {
  const [currentPage, setCurrentPage] = useState(1);

 const students = [
  { 
    name: "Ashutosh Kumar", 
    img: "/apna-college-people/ashutosh kumar.webp", 
    companyLogo: "/apna-college-people/ggl.webp", 
    company: "Google", 
    role: "Intern" 
  },
  { 
    name: "Gaurav Kumar", 
    img: "/apna-college-people/gaurav kumar.webp", 
    companyLogo: "/apna-college-people/microsoft.webp", 
    company: "Microsoft", 
    role: "Software Engineer" 
  },
  { 
    name: "Gungun Panchal", 
    img: "/apna-college-people/gungun panchal.webp", 
    companyLogo: "/apna-college-people/hitachi.webp", 
    company: "Hitachi", 
    role: "Software Engineer" 
  },
  { 
    name: "Jiya Malik", 
    img: "/apna-college-people/jiya malik.webp", 
    companyLogo: "/apna-college-people/ggl.webp", 
    company: "Google", 
    role: "Software Engineer" 
  },
  { 
    name: "Kartik Aryan", 
    img: "/apna-college-people/kartik aryan.webp", 
    companyLogo: "/apna-college-people/paypal.webp", 
    company: "PayPal", 
    role: "Software Engineer" 
  },
  { 
    name: "Kushal Tripathi", 
    img: "/apna-college-people/kushal tripathi.webp", 
    companyLogo: "/apna-college-people/salesforce.webp", 
    company: "Salesforce", 
    role: "Software Dev" 
  },
  { 
    name: "Muskan Sharma", 
    img: "/apna-college-people/muskan sharma.webp", 
    companyLogo: "/apna-college-people/phonepay.webp", 
    company: "PhonePe", 
    role: "SDE Intern" 
  },
  { 
    name: "Naman Omar", 
    img: "/apna-college-people/naman omar.webp", 
    companyLogo: "/apna-college-people/samsung.webp", 
    company: "Samsung", 
    role: "Engineer" 
  },
  { 
    name: "Ritu Gupta", 
    img: "/apna-college-people/ritu gupta.webp", 
    companyLogo: "/apna-college-people/mercediz.webp", 
    company: "Mercedes", 
    role: "Software Engineer" 
  },
  { 
    name: "Sakshi Goyat", 
    img: "/apna-college-people/sakhshi goyat.webp", 
    companyLogo: "/apna-college-people/kpmg.webp", 
    company: "KPMG", 
    role: "Tech Analyst" 
  },
  { 
    name: "Shreya Shree", 
    img: "/apna-college-people/shreya shree.webp", 
    companyLogo: "/apna-college-people/jpmorgan.webp", 
    company: "JPMorgan", 
    role: "Analyst" 
  },
  { 
    name: "Shruti Hivre", 
    img: "/apna-college-people/shruti hivre.webp", 
    companyLogo: "/apna-college-people/isro.webp", 
    company: "ISRO", 
    role: "Research Intern" 
  },
  { 
    name: "Shubham Kumar", 
    img: "/apna-college-people/shubham kumar.webp", 
    companyLogo: "/apna-college-people/ibm.webp", 
    company: "IBM", 
    role: "Cloud Engineer" 
  },
  { 
    name: "Shubhangi Raj", 
    img: "/apna-college-people/shubhangi raj.webp", 
    companyLogo: "/apna-college-people/goldman sach.webp", 
    company: "Goldman Sachs", 
    role: "Summer Analyst" 
  },
  { 
    name: "SS Abhilash", 
    img: "/apna-college-people/ss abhilash.webp", 
    companyLogo: "/apna-college-people/ey.webp", 
    company: "EY", 
    role: "Digital Consultant" 
  },
  { 
    name: "Swaroop Pokhar", 
    img: "/apna-college-people/swaroop pokhar.webp", 
    companyLogo: "/apna-college-people/deloit.webp", 
    company: "Deloitte", 
    role: "Business Analyst" 
  },
  { 
    name: "Tuba Parwej", 
    img: "/apna-college-people/tuba parwej.webp", 
    companyLogo: "/apna-college-people/ggl.webp", 
    company: "Google", 
    role: "Intern" 
  },
  { 
    name: "Vaibhav Gupta", 
    img: "/apna-college-people/vaibhav gupta.webp", 
    companyLogo: "/apna-college-people/microsoft.webp", 
    company: "Microsoft", 
    role: "Software Engineer" 
  }
];
const listPerPage=9;
const totalPages = Math.ceil(students.length / listPerPage);
const startIdx=(currentPage-1)*listPerPage;
const endIdx=startIdx+listPerPage;
const currentItem=students.slice(startIdx,endIdx)

const prevPage=()=>{
  if (currentPage > 1) setCurrentPage(currentPage - 1);
}

const nextPage=()=>{
     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
}


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
        {students.map((student, i)=>(
          
           <img className={styles.companyImg} key={i} src={student.companyLogo} alt={`${student.company} Logo`} />

        ))}
      </div>
       

      </div>

      
    </div>
  );
}
