import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  // Định nghĩa styles
  const styles = {
    footer: {
      backgroundColor: '#f8f9fa',
      padding: '40px 0',
      marginTop: '50px'
    },
    heading: {
      color: '#000',
      fontSize: '18px',
      fontWeight: '600',
      textTransform: 'uppercase',
      marginBottom: '20px'
    },
    link: {
      color: '#666',
      textDecoration: 'none',
      fontSize: '14px',
      transition: 'all 0.3s ease',
    },
    listItem: {
      marginBottom: '12px'
    },
    text: {
      color: '#666',
      fontSize: '14px'
    },
    borderTop: {
      borderTop: '1px solid #ddd',
      paddingTop: '20px',
      marginTop: '30px'
    }
  };

  return (
    <>
      <footer style={styles.footer}>
        <div className="container">
          <div className="row py-5">
            <div className="col-md-4">
              <h4 style={styles.heading}>HỖ TRỢ</h4>
              <ul className="list-unstyled">
                <li style={styles.text}>Email: haminhtien250102@gmail.com</li>
                  <li style={styles.listItem}>
                  <a 
                    href="https://github.com/HMThmtien" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={styles.link}
                  >
                    GitHub:https://github.com/HMThmtien
                  </a>
                </li>
                <li style={styles.text}>Hotline: 098.288.1068</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4 style={styles.heading}>THÔNG TIN</h4>
              <ul className="list-unstyled">
                <li style={styles.listItem}><Link style={styles.link} to="/">Giới thiệu</Link></li>
                <li style={styles.listItem}><Link style={styles.link} to="/">Chính sách đổi hàng</Link></li>
                <li style={styles.listItem}><Link style={styles.link} to="/">Bảo mật</Link></li>
                <li style={styles.listItem}><Link style={styles.link} to="/">Liên hệ</Link></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4 style={styles.heading}>CỬA HÀNG</h4>
              <ul className="list-unstyled">
                <li style={{...styles.text, ...styles.listItem}}>Store 1:  Cầu Giấy, HN</li>
                <li style={{...styles.text, ...styles.listItem}}>Store 2:  Hai Bà Trưng, HN</li>
              
              </ul>
            </div>
          </div>
          <div className="row py-3" style={styles.borderTop}>
            <div className="col text-center">
              <p style={{...styles.text, margin: 0}}>&copy; 2024 HMT</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
