import React, { useState } from 'react'
import "./videoSidebar.css"
import {AiOutlineHeart} from 'react-icons/ai';
import {AiFillHeart} from 'react-icons/ai';
import {BsFillChatDotsFill} from 'react-icons/bs';
import ReplyIcon from '@mui/icons-material/Reply';
import Perfil from "./img/perfil.png"

function VideoSidebar({likes, messages, shares}) {

    const [liked, setLiked] = useState(false)

    function handleLike(){
        setLiked(!liked)
    }


  return (
    <div className='videoSidebar'>
        <div>
            <img src={Perfil} width={80} className='videoSidebar__options'/>
        </div>
        <div 
        className='videoSidebar__options'
        onClick={handleLike}
        >
            { liked ? <AiFillHeart fontSize='30'/> : <AiOutlineHeart fontSize='30'/>}
            
            <p>{ liked ? likes + 1 : likes }</p>
        </div>
        <div className='videoSidebar__options'>
            <BsFillChatDotsFill fontSize='25'/>
            <p>{messages}</p>
        </div>
        <div className='videoSidebar__options'>
            <ReplyIcon fontSize='large'/>
            <p>{shares}</p>
        </div>
    </div>
  )
}

export default VideoSidebar