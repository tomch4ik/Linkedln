import './Home.css'
import { useState } from 'react';

export function Home() {
  const [inputText, setIText] = useState('');
  const [posts, setPosts] = useState([
    { 
      id: 1,
      author: 'Christian Nolan',
      role: 'Junior UI/UX Designer · Microsoft',
      time: '2h ago',
      text: '“The dumbest mistake is viewing design as something you do at the end of the process to ‘tidy up’ the mess, as opposed to understanding it’s a ‘day one’ issue and part of everything. - Tom Peterson',
      image: './Pages_img/image_15.png',
      avatar: './Pages_img/chuvak1.png',
      likes: 46,
      liked: false,
    },
    {
      id: 2,
      author: 'Jonathan Matthews',
      role: 'UI/UX Designer · RyanAir',
      time: '3h ago',
      text: 'Users will tell you what they think they want. Users will tell you what they think you want to hear. Users will tell you what they think sounds good. Users will not tell you what you need to know. You have to watch them to discover that. - Adam Judge',
      image: './Pages_img/image_20.png',
      avatar: './Pages_img/mimimi.png',
      likes: 20,
      liked: false,
    },
  ]);

  const tagLike = (index) => {
    setPosts((prevPosts) =>
      prevPosts.map((post, i) =>
        i === index
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (inputText.trim() === '') return;

    const id = Date.now();

    const newPost = {
      id,
      author: 'You',
      role: 'Junior UI/UX Designer · Microsoft',
      time: 'Just now',
      text: inputText,
      image: './Pages_img/Webinar.jpg', 
      avatar: './Header_img/Ellipse.svg',
      likes: 0,
      liked: false,
    };

    setPosts([newPost, ...posts]);
    setIText('');
  };

  return (
    <>
      <div className='home_section'>
        <div>
          <div className='home_dispare'>
            <img src='./Header_img/Ellipse.svg'/>
            <form onSubmit={handleSubmit} role="search" className='sidebar_search'>
              <img src='./Pages_img/edit_square.svg'/>
                <input
                  type="text"
                  placeholder='Start your post'
                  value={inputText}
                  onChange={(e) => setIText(e.target.value)}
                />
            </form>
          </div>
          <ul className='home_viewers'>
            <li className='home_li'>
              <img src='./Pages_img/camera.svg' />
              <span>Photo</span>
            </li>
            <li className='home_li'>
              <img src='./Pages_img/video.svg' />
              <span>Video</span>
            </li>
            <li className='home_li'>
              <img src='./Pages_img/CalendarCheck.svg' />
              <span>Event</span>
            </li>
          </ul>
        </div>
        
      </div>
      {posts.map((post, index) => (
        <div className='home_section' key={post.id}>
          <div className='home_content'>
            <div className='home_info'>
              <img src={post.avatar} />
              <div className='home_title'>
                <div className='homesd_name'>{post.author}</div>
                <div className='homesd_prof'>{post.role}</div>
                <div className='home_time'>{post.time}</div>
              </div>
            </div>
            <div className='home_text'>{post.text}</div>
            <img src={post.image} />
          </div>

          <ul className='home_viewers'>
            <li className='home_li' onClick={() => tagLike(index)}>
              <img
                src={
                  post.liked
                    ? './Pages_img/Thumb_upr.png'
                    : './Pages_img/thumbs_up.svg'
                }
              />
              <span style={{ fontWeight: post.liked ? 'bold' : 'normal', color: post.liked ? '#6C5CE7' : 'inherit' }}>
                Like
              </span>
              <span>{post.likes}</span>
            </li>
            <li className='home_li'>
              <img src='./Pages_img/message_circle.svg' />
              <span>Comment</span>
            </li>
            <li className='home_li'>
              <img src='./Pages_img/share_2.svg' />
              <span>Share</span>
            </li>
            <li className='home_li'>
              <img src='./Pages_img/send.svg' />
              <span>Send</span>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
}























