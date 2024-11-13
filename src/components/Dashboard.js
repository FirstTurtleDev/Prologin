import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { alignProperty,  } from '@mui/material/styles/cssUtils';
import Modal from '../modal';
import { faAlignCenter, faAlignJustify, faDisplay, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { backdropClasses, colors } from '@mui/material';
import './Dashboard.css';

function Dashboard() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedComment, setSelectedComment] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Fetch comments from API
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => {
        setComments(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
      };
      const checkMobile = () => {
        if (window.innerHeight <= 600) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
      };
       // Add event listener to check on resize
    window.addEventListener('resize', checkMobile);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
      checkMobile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    window.location.href = '/';
  };

  const openModal = (comment) => {
    setSelectedComment(comment);
  };

  const closeModal = () => {
    setSelectedComment(null);
  };

  if (loading) {
    return <p>Loading data...</p>;
  }

  return (
    <div className='container'>
      <div className='header'>
        <h2 className='title'>ProDashboard</h2>
        <button onClick={handleLogout} className='logoutButton'>Logout</button>
      </div>
      <div className='commentsContainer'>
        {comments.slice(0, 10).map(comment => (
          <div key={comment.id} className='commentCard'>
            <div className='commentHeader'>
              <h4>ID:{comment.id}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
              <h4>Name:<br />{comment.name}&nbsp;&nbsp;&nbsp;</h4>
              <p>Email: {comment.email}</p>
              <button onClick={() => openModal(comment)} className='eyeButton'>
                <FontAwesomeIcon icon={faEye} className='ojo'/>
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Render Modal */}
      {selectedComment && <Modal comment={selectedComment} onClose={closeModal} />}
    </div>
  );
}








export default Dashboard;
