import './Home.css'
import { useState } from 'react';

export function Home() {
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
      author: 'Christian Nolan',
      role: 'Junior UI/UX Designer · Microsoft',
      time: '2h ago',
      text: 'Users will tell you what they think they want. Users will tell you what they think you want to hear. Users will tell you what they think sounds good. Users will not tell you what you need to know. You have to watch them to discover that. - Adam Judge',
      image: './Pages_img/image_20.png',
      avatar: './Pages_img/mimimi.png',
      likes: 20,
      liked: false,
    },
  ]);

  const toggleLike = (index) => {
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

  return (
    <>
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
            <li className='home_li' onClick={() => toggleLike(index)}>
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























